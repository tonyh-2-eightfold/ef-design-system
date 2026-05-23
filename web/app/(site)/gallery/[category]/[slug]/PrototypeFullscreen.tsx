"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Button } from "@tonyh-2-eightfold/ef-design-system";

/* Iframe + viewport-size switcher + Take screenshot + Full screen.

   The viewport switcher constrains the iframe to a fixed pixel width
   matching common form-factor breakpoints, so designers can review the
   prototype's responsive behaviour without resizing their browser:

   - Desktop          full width (≥ 1440px via min-width)
   - Tablet landscape 1024px
   - Tablet portrait   800px
   - Mobile            420px

   The iframe stays the same height; it just gets a horizontal constraint.

   The Screenshot button uses html-to-image against the iframe's
   contentDocument.body. Works because the iframe is same-origin (it
   loads /content/designs/<slug>/index.html from the host app), and
   sandbox="allow-same-origin allow-scripts" preserves that access. */

type Viewport = "desktop" | "tablet-landscape" | "tablet-portrait" | "mobile";

const VIEWPORTS: { id: Viewport; label: string; width: number | null; icon: string }[] = [
  { id: "desktop", label: "Desktop", width: null, icon: "desktop_windows" },
  { id: "tablet-landscape", label: "Tablet landscape", width: 1024, icon: "tablet" },
  { id: "tablet-portrait", label: "Tablet portrait", width: 800, icon: "tablet_android" },
  { id: "mobile", label: "Mobile", width: 420, icon: "smartphone" },
];

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
  const [viewport, setViewport] = useState<Viewport>("desktop");

  const active = VIEWPORTS.find((v) => v.id === viewport) ?? VIEWPORTS[0];

  function enterFullscreen() {
    const el = iframeRef.current;
    if (!el) return;
    el.requestFullscreen?.().catch(() => {
      window.open(previewUrl, "_blank", "noopener,noreferrer");
    });
  }

  async function takeScreenshot() {
    const el = iframeRef.current;
    if (!el) return;
    const doc = el.contentDocument;
    const node = doc?.body;
    if (!node) {
      window.open(previewUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setCapturing(true);
    try {
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
      a.download = `${slug}-${viewport}-screenshot.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch {
      window.open(previewUrl, "_blank", "noopener,noreferrer");
    } finally {
      setCapturing(false);
    }
  }

  return (
    <section className="mt-8">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-sm font-medium text-[var(--muted-foreground)]">
          Prototype
        </h2>
        <div className="flex flex-wrap items-center gap-2">
          {/* Viewport switcher */}
          <div
            role="radiogroup"
            aria-label="Viewport size"
            className="inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--card)] p-0.5"
          >
            {VIEWPORTS.map((v) => {
              const isActive = v.id === viewport;
              return (
                <button
                  key={v.id}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  aria-label={v.label}
                  title={`${v.label}${v.width ? ` (${v.width}px)` : ""}`}
                  onClick={() => setViewport(v.id)}
                  className={
                    "inline-flex h-7 items-center justify-center rounded px-2.5 text-xs font-medium transition-colors " +
                    (isActive
                      ? "bg-[#B0F3FE] text-[#054D7B]"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]")
                  }
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 16 }}
                    aria-hidden
                  >
                    {v.icon}
                  </span>
                </button>
              );
            })}
          </div>

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

      {/* Iframe wrapper. For non-desktop viewports we constrain the
          iframe to a fixed pixel width and center it; desktop uses the
          original full-width behaviour with min-w-[1440px] so the
          product navbar reads in its desktop layout. */}
      <div
        className={
          "rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 " +
          (active.width == null ? "overflow-x-auto overflow-y-hidden" : "overflow-hidden")
        }
      >
        <div
          className={
            active.width == null
              ? "w-full"
              : "mx-auto"
          }
          style={active.width != null ? { width: active.width, maxWidth: "100%" } : undefined}
        >
          <iframe
            ref={iframeRef}
            key={viewport}
            src={previewUrl}
            title={`Prototype: ${title}`}
            className={
              "block h-[80vh] " +
              (active.width == null ? "w-full min-w-[1440px]" : "w-full")
            }
            sandbox="allow-same-origin allow-scripts allow-forms"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
