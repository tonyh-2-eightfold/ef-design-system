import fs from "node:fs";
import path from "node:path";
import App from "./App";

export const metadata = {
  title: "Octuple — Eightfold Design System",
};

// Reads the shared content guidelines from .claude/skills/_content/ at build
// time and passes them to the (client) catalog so the new "Content design
// standards" and "Terms list" sidebar entries can render them inline without
// a network round-trip.
/** Strip leading YAML frontmatter (--- ... ---) so it doesn't show as plain
    text above the rendered markdown. */
function stripFrontmatter(md: string): string {
  return md.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, "");
}

function readContent(): { contentDesignStandards: string; termsList: string } {
  const root = path.resolve(process.cwd(), "..", ".claude", "skills", "_content");
  return {
    contentDesignStandards: stripFrontmatter(fs.readFileSync(path.join(root, "content-design-standards.md"), "utf8")),
    termsList: stripFrontmatter(fs.readFileSync(path.join(root, "terms-list.md"), "utf8")),
  };
}

// Renders the catalog full-width. The route is outside the (site) route group,
// so it isn't constrained by the max-w-6xl wrapper that landing/gallery use.
export default function ComponentsPage() {
  const { contentDesignStandards, termsList } = readContent();
  return <App contentDesignStandards={contentDesignStandards} termsList={termsList} />;
}
