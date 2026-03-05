import Parser from "rss-parser";

const SUBSTACK_RSS_URL = "https://grassecon.substack.com/feed";

export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  author: string;
  imageUrl: string | null;
}

export async function getSubstackPosts(
  limit: number = 6
): Promise<SubstackPost[]> {
  try {
    const parser = new Parser({
      customFields: {
        item: [["dc:creator", "creator"]],
      },
    });

    const feed = await parser.parseURL(SUBSTACK_RSS_URL);

    return feed.items.slice(0, limit).map((item) => ({
      title: item.title ?? "",
      link: item.link ?? "",
      pubDate: item.pubDate ?? "",
      contentSnippet: extractSnippet(item.contentSnippet ?? item.content ?? "", 200),
      author:
        (item as unknown as Record<string, string>).creator ??
        item.creator ??
        "Grassroots Economics",
      imageUrl: item.enclosure?.url ?? extractFirstImage(item.content ?? "") ?? null,
    }));
  } catch {
    return [];
  }
}

function extractSnippet(text: string, maxLength: number): string {
  const clean = text.replace(/<[^>]*>/g, "").trim();
  return clean.length > maxLength
    ? clean.substring(0, maxLength) + "..."
    : clean;
}

function extractFirstImage(html: string): string | null {
  const match = html.match(/<img[^>]+src="([^"]+)"/);
  return match?.[1] ?? null;
}
