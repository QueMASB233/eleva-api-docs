export interface TocDivider {
  type: "divider";
  title: string;
}

export interface TocItem {
  type: "item";
  title: string;
  uri: string;
}

export type TocEntry = TocDivider | TocItem;

export interface TocSection {
  title: string;
  items: TocItem[];
}

export interface TocData {
  items: TocEntry[];
}

export function parseToc(data: TocData): TocSection[] {
  const sections: TocSection[] = [];
  let current: TocSection | null = null;

  for (const entry of data.items) {
    if (entry.type === "divider") {
      current = { title: entry.title, items: [] };
      sections.push(current);
    } else if (entry.type === "item" && current) {
      current.items.push(entry);
    }
  }

  return sections;
}

export function uriToSlug(uri: string): string {
  return uri
    .replace(/\.(md|json)$/, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export function slugToUri(slug: string, tocData: TocData): string | null {
  const joined = slug.replace(/\s+/g, "-").toLowerCase();
  for (const entry of tocData.items) {
    if (entry.type === "item") {
      if (uriToSlug(entry.uri) === joined) {
        return entry.uri;
      }
    }
  }
  return null;
}
