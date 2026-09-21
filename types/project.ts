export type ProjectCategory = "SaaS" | "Backend" | "Full Stack";

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  summary: string;
  categories: ProjectCategory[];
  techStack: string[];
  architectureHighlights: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  order?: number;
}

export interface ProjectEntry {
  frontmatter: ProjectFrontmatter;
  content: string;
}