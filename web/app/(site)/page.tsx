import { CATEGORIES, getCategory } from "@/lib/categories";
import { getAllDesigns } from "@/lib/designs";
import { HomePageView, type LatestDesign } from "@/components/site/home-page-view";

export const revalidate = 60;

// Thin server wrapper: read the filesystem-backed design index, hand the
// numbers off to the client view (which uses ef-design-system components
// that require browser-only React features like useState/useLayoutEffect).
export default function HomePage() {
  const all = getAllDesigns();
  // getAllDesigns sorts newest-first by createdAt; the strip self-updates
  // with every merged design PR.
  const latest: LatestDesign[] = all.slice(0, 4).map((d) => ({
    title: d.title,
    href: `/gallery/${d.category}/${d.slug}`,
    thumbnailUrl: d.thumbnailUrl,
    categoryName: getCategory(d.category)?.name ?? d.category,
  }));
  return (
    <HomePageView
      totalDesigns={all.length}
      categoryCount={CATEGORIES.length}
      latestDesigns={latest}
    />
  );
}
