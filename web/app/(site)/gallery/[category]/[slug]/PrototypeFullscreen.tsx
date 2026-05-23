"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Button } from "@tonyh-2-eightfold/ef-design-system";

/* Iframe + Full screen + Screenshot buttons. The iframe carries a
   min-width so the prototype's product navbar renders in its desktop
   layout (Career Hub collapses to a hamburger menu below 1280px).
   Outside of fullscreen, the surrounding gallery layout is wide enough
   on most screens; the inner overflow-x lets very narrow viewports
   scroll horizontally rather than collapsing the prototype.

   The Screenshot button uses html-to-image against the iframe's
   contentDocument.body — works because the iframe is same-origin (it
   loads /content/designs/<slug>/index.html from the host app), and
   sandbox="allow-same-origin allow-scripts" preserves that access. */
export function PrototypeFullscreen({
  previewUrl,
  title,
  slug,
}: {
  previewUrl: string;
  title: string;
  slug: string;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [capturing, setCapturing] = useState(false);

  function enterFullscreen() {
    const el = iframeRef.current;
    if (!el) return;
    /* requestFullscreen returns a Promise in modern browsers; swallow
       rejections (Safari throws when triggered without a user gesture
       — but a button click is a gesture, so this is just defensive). */
    el.requestFullscreen?.().catch(() => {
      /* Fallback: open the live route in a new tab. */
      window.open(previewUrl, "_blank", "noopener,noreferrer");
    });
  }

  async function takeScreenshot() {
    const el = iframeRef.current;
    if (!el) return;
    const doc = el.contentDocument;
    const node = doc?.body;
    if (!node) {
      /* Iframe still loading or blocked. Fall back to opening the live
         route in a new tab where the user's browser can do the capture. */
      window.open(previewUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setCapturing(true);
    try {
      /* Use the iframe's viewport dimensions so the screenshot covers
         the full visible area, not just what's currently scrolled into
         view. */
      const width = doc?.documentElement?.scrollWidth ?? node.scrollWidth;
      const height = doc?.documentElement?.scrollHeight ?? node.scrollHeight;
      const dataUrl = await toPng(node, {
        cacheBust: true,
        pixelRatio: 2,
        width,
        height,
        backgroundColor: "#ffffff",
      });
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `${slug}-screenshot.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch {
      /* If html-to-image fails (e.g., due to a cross-origin font),
         open in a new tab so the user can still capture it manually. */
      window.open(previewUrl, "_blank", "noopener,noreferrer");
    } finally {
      setCapturing(false);
    }
  }

  return (
    <section className="mt-8">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-sm font-medium text-[var(--muted-foreground)]">
          Prototype
        </h2>
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={takeScreenshot}
            disabled={capturing}
            leadingIcon={
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 14 }}
                aria-hidden
              >
                photo_camera
              </span>
            }
          >
            {capturing ? "Capturing…" : "Take screenshot"}
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={enterFullscreen}
            leadingIcon={
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 14 }}
                aria-hidden
              >
                fullscreen
              </span>
            }
          >
            Full screen
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto overflow-y-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]">
        <iframe
          ref={iframeRef}
          src={previewUrl}
          title={`Prototype: ${title}`}
          className="block h-[80vh] w-full min-w-[1440px]"
          sandbox="allow-same-origin allow-scripts allow-forms"
          allowFullScreen
        />
      </div>
    </section>
  );
}
