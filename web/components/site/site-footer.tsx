"use client";

import { usePathname } from "next/navigation";

/* Site footer with pathname-aware hiding. Mirrors TopNav's behaviour:
   prototype routes under /careerhub render inside the gallery's iframe
   and should not show site chrome. */
export function SiteFooter() {
  const pathname = usePathname();
  if (pathname.startsWith("/careerhub")) return null;

  return (
    <footer className="mt-16 border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-[var(--muted-foreground)]">
        Internal. Designs added via PR to{" "}
        <code className="rounded bg-[var(--card)] px-1 py-0.5">
          ypike-eightfold/Octuple-TW-design-system
        </code>
        .
      </div>
    </footer>
  );
}
