/**
 * Minimal, browser-safe frontmatter parser.
 * Replaces gray-matter, which depends on Node's Buffer global and
 * crashes when bundled for the browser by Vite.
 *
 * Supports the subset of YAML our project frontmatter actually uses:
 * - flat string values:      title: "Soko Platform"
 * - booleans:                featured: true
 * - numbers:                 order: 1
 * - inline string arrays:    categories: ["SaaS", "Backend"]
 */
export function parseFrontmatter<T>(raw: string): { data: T; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    return { data: {} as T, content: raw };
  }

  const [, frontmatterBlock, content] = match;
  const data: Record<string, unknown> = {};

  for (const line of (frontmatterBlock ?? "").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf(":");
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    data[key] = parseValue(value);
  }

  return { data: data as T, content: (content ?? "").trim() };
}

function parseValue(value: string): unknown {
  // Inline array: ["SaaS", "Backend"]
  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    if (!inner) return [];
    return inner
      .split(",")
      .map((item) => stripQuotes(item.trim()))
      .filter(Boolean);
  }

  if (value === "true") return true;
  if (value === "false") return false;
  if (value !== "" && !Number.isNaN(Number(value))) return Number(value);

  return stripQuotes(value);
}

function stripQuotes(value: string): string {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}