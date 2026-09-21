import { parseFrontmatter } from "~/utils/frontmatter";
import type { ProjectFrontmatter, ProjectEntry } from "~/types/project";

// 1. Eagerly load all markdown frontmatter for listings (Home & Projects page)
const modules = import.meta.glob("~/content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true
}) as Record<string, string>;

export const projects: ProjectFrontmatter[] = Object.values(modules)
  .map((raw) => parseFrontmatter<ProjectFrontmatter>(raw).data)
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

export const featuredProjects = projects.filter((p) => p.featured);

// 2. Lazily load markdown content when an individual project page is visited
const lazyModules = import.meta.glob("~/content/projects/*.md", {
  query: "?raw",
  import: "default"
}) as Record<string, () => Promise<string>>;

export async function getProjectBySlug(slug: string): Promise<ProjectEntry | undefined> {
  const entry = Object.entries(lazyModules).find(([path]) =>
    path.endsWith(`/${slug}.md`)
  );

  if (!entry) return undefined;

  const raw = await entry[1]();
  const { data, content } = parseFrontmatter<ProjectFrontmatter>(raw);
  return { frontmatter: data, content };
}