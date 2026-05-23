export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  /* Wide enough that prototype iframes render their desktop layout
     (CareerHub's navbar collapses to a hamburger below 1280px, so the
     container needs to be comfortably wider). */
  return <div className="mx-auto max-w-screen-2xl px-6 py-10">{children}</div>;
}
