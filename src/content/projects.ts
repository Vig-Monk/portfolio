import { parseFrontmatter } from "@/utils/frontmatter";
import type { ProjectEntry, ProjectFrontmatter } from "@/types/project";

const modules = import.meta.glob("@content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true
}) as Record<string, string>;

export const projects: ProjectEntry[] = Object.values(modules)
  .map((raw) => {
    const { data, content } = parseFrontmatter<ProjectFrontmatter>(raw);
    return { frontmatter: data, content };
  })
  .sort((a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99));

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projects.find((p) => p.frontmatter.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.frontmatter.featured);