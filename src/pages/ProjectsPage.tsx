import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../data/projects";
import "../styles/projectPage.css";

export default function ProjectsPage() {
  return (
    <section className="section projects-page">
      <div className="container">

        <div className="section-heading">
          <span className="section-eyebrow">
            PROJECTS
          </span>

          <h1>Projects I've built.</h1>

          <p>
            A selection of projects demonstrating my experience
            building practical and scalable software.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.slug}
            >

              <div className="project-card-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="project-card-content">

                <span className="project-label">
                  {project.category}
                </span>

                <h2>{project.title}</h2>

                <p>
                  {project.shortDescription}
                </p>

                <div className="technology-list">
                  {project.technologies
                    .slice(0, 6)
                    .map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                </div>

                <div className="project-actions">

                  <Link
                    to={`/projects/${project.slug}`}
                    className="project-case-study"
                  >
                    View case study
                    <ArrowUpRight size={17} />
                  </Link>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code2 size={17} />
                      GitHub
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={17} />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}