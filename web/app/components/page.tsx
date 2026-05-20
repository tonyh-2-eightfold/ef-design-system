import fs from "node:fs";
import path from "node:path";
import App from "./App";

export const metadata = {
  title: "Octuple — Eightfold Design System",
};

/** Strip leading YAML frontmatter (--- ... ---) and any HTML comments
    (editorial notes from the PDF extraction) so they don't show as plain
    text above or inside the rendered markdown. */
function cleanMarkdown(md: string): string {
  return md
    .replace(/^---\s*\n[\s\S]*?\n---\s*\n/, "")
    .replace(/<!--[\s\S]*?-->/g, "");
}

/** GitHub-style slug: lowercase, drop non-word/hyphen/space, then spaces → hyphens.
    Used in BOTH the heading-extraction below and the markdown component
    override that attaches ids to <h2>/<h3>, so sidebar sub-items and the
    rendered headings point at the same anchors. */
export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export interface HeadingItem {
  id: string;
  label: string;
  depth: 2 | 3;
}

/** Pull h2 headings out of the markdown so the sidebar can render expandable
    sub-items. Restricted to h2 to keep the sidebar readable — h3 and below
    would be too dense (e.g. the terms list has hundreds of glossary entries). */
function extractHeadings(md: string): HeadingItem[] {
  const out: HeadingItem[] = [];
  for (const line of md.split("\n")) {
    const m = line.match(/^(##) (.+?)\s*$/);
    if (!m) continue;
    const text = m[2].replace(/<a\s+[^>]*>.*?<\/a>/g, "").trim(); // strip inline anchors
    if (!text) continue;
    out.push({ id: slugify(text), label: text, depth: 2 });
  }
  return out;
}

function readContent() {
  const root = path.resolve(process.cwd(), "..", ".claude", "skills", "_content");
  const contentDesignStandards = cleanMarkdown(
    fs.readFileSync(path.join(root, "content-design-standards.md"), "utf8"),
  );
  const termsList = cleanMarkdown(fs.readFileSync(path.join(root, "terms-list.md"), "utf8"));
  return {
    contentDesignStandards,
    termsList,
    contentDesignStandardsHeadings: extractHeadings(contentDesignStandards),
    termsListHeadings: extractHeadings(termsList),
  };
}

// Renders the catalog full-width. The route is outside the (site) route group,
// so it isn't constrained by the max-w-6xl wrapper that landing/gallery use.
export default function ComponentsPage() {
  const data = readContent();
  return (
    <App
      contentDesignStandards={data.contentDesignStandards}
      termsList={data.termsList}
      contentDesignStandardsHeadings={data.contentDesignStandardsHeadings}
      termsListHeadings={data.termsListHeadings}
    />
  );
}
