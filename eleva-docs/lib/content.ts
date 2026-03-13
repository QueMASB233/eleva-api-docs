import { TocData } from "./toc";

let tocCache: TocData | null = null;

export async function getToc(): Promise<TocData> {
  if (tocCache) return tocCache;
  const res = await fetch("/content/toc.json");
  tocCache = await res.json();
  return tocCache!;
}

export async function loadContent(uri: string): Promise<{ type: "md" | "json"; content: string }> {
  // URI paths in toc.json reference files like "docs/oauth/Overview.md" or "businesses/businesses.json"
  // These are in /public/apps/ for json and /public/ for docs
  const isJson = uri.endsWith(".json");
  const type = isJson ? "json" : "md";

  // Try apps/ prefix for JSON files, direct path for md
  let url: string;
  if (isJson) {
    url = `/apps/${uri}`;
  } else {
    url = `/${uri}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to load ${url}: ${res.status}`);
  }
  const content = await res.text();
  return { type, content };
}

export interface SearchEntry {
  title: string;
  slug: string;
  section: string;
  preview: string;
}

export async function buildSearchIndex(toc: TocData): Promise<SearchEntry[]> {
  const entries: SearchEntry[] = [];
  let currentSection = "";

  for (const item of toc.items) {
    if (item.type === "divider") {
      currentSection = item.title;
    } else if (item.type === "item") {
      const slug = item.uri
        .replace(/\.(md|json)$/, "")
        .replace(/\s+/g, "-")
        .toLowerCase();

      entries.push({
        title: item.title,
        slug,
        section: currentSection,
        preview: item.uri.endsWith(".json")
          ? `API specification for ${item.title}`
          : `Documentation for ${item.title}`,
      });
    }
  }

  return entries;
}
