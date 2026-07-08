import { parseFrontmatter } from "@/utils/frontmatter";
import type { ProjectFrontmatter } from "@/types/project";

const modules = import.meta.glob("@content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true
}) as Record<string, string>;

export const projects: ProjectFrontmatter[] = Object.values(modules)
  .map((raw) => parseFrontmatter<ProjectFrontmatter>(raw).data)
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

export const featuredProjects = projects.filter((p) => p.featured);

const lazyModules = import.meta.glob("@content/projects/*.md", {
  query: "?raw",
  import: "default"
}) as Record<string, () => Promise<string>>;

export async function getProjectBySlug(slug: string) {
  const entry = Object.entries(lazyModules).find(([path]) => path.endsWith(`/${slug}.md`));
  if (!entry) return undefined;
  const raw = await entry[1]();
  const { data, content } = parseFrontmatter<ProjectFrontmatter>(raw);
  return { frontmatter: data, content };
}