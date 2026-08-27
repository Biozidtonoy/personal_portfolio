export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;

  technologies: string[];
  highlights: string[];

  githubUrl?: string;
  liveUrl?: string;

  images?: string[];
}