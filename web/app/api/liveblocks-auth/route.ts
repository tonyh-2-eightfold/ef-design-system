import { Liveblocks } from "@liveblocks/node";
import { cookies } from "next/headers";
import { auth } from "@/auth";

/**
 * Issues Liveblocks access tokens for the gallery comment feature.
 *
 * Identity comes from the Auth.js session when OAuth is wired. While the
 * site runs with NEXT_PUBLIC_AUTH_BYPASS=true, every visitor gets a stable
 * anonymous identity instead (one per browser, kept in a cookie) so people
 * can still delete/edit their own comments during the bypass period. When
 * auth is flipped on later, this endpoint starts issuing real identities
 * with no code changes.
 */

const ANON_COOKIE = "lb-anon-id";

// A small pool of friendly anonymous display names so comment threads
// during the auth-bypass period are tellable-apart. Deterministic per
// anon id, so the same browser keeps the same name.
const ANON_NAMES = [
  "Anonymous Otter",
  "Anonymous Heron",
  "Anonymous Lynx",
  "Anonymous Ibex",
  "Anonymous Tern",
  "Anonymous Vole",
  "Anonymous Crane",
  "Anonymous Marten",
];

function anonName(id: string): string {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) | 0;
  const idx = Math.abs(hash) % ANON_NAMES.length;
  return ANON_NAMES[idx]!;
}

export async function POST() {
  const secret = process.env.LIVEBLOCKS_SECRET_KEY;
  if (!secret) {
    return Response.json(
      { error: "LIVEBLOCKS_SECRET_KEY is not configured" },
      { status: 503 },
    );
  }

  const liveblocks = new Liveblocks({ secret });

  const hasOAuthCredentials = !!(
    process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET
  );
  const explicitBypass = process.env.NEXT_PUBLIC_AUTH_BYPASS === "true";
  const authEnabled = hasOAuthCredentials && !explicitBypass;

  const session = authEnabled ? await auth() : null;

  let userId: string;
  let userInfo: { name: string; avatar?: string };

  if (session?.user?.email) {
    userId = session.user.email.toLowerCase();
    userInfo = {
      name: session.user.name ?? session.user.email,
      ...(session.user.image ? { avatar: session.user.image } : {}),
    };
  } else {
    // Stable per-browser anonymous identity via cookie.
    const cookieStore = await cookies();
    let anonId = cookieStore.get(ANON_COOKIE)?.value;
    if (!anonId || !/^anon-[a-z0-9-]{8,64}$/.test(anonId)) {
      anonId = `anon-${crypto.randomUUID()}`;
      cookieStore.set(ANON_COOKIE, anonId, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
      });
    }
    userId = anonId;
    userInfo = { name: anonName(anonId) };
  }

  const lbSession = liveblocks.prepareSession(userId, { userInfo });
  // Comment rooms are namespaced per gallery design: gallery:<category>/<slug>
  lbSession.allow("gallery:*", lbSession.FULL_ACCESS);

  const { status, body } = await lbSession.authorize();
  return new Response(body, {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
