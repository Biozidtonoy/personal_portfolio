import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../data/projects";

export default function PokemonMemoryPage() {
  const project = projects.find(
    (item) => item.slug === "pokemon-memory"
  )!;

  return (
    <section className="project-detail">
      <div className="container">
        {/* Back */}
        <Link to="/projects" className="back-link">
          <ArrowLeft size={17} />
          Back to projects
        </Link>

        {/* Header */}
        <span className="section-eyebrow">CASE STUDY</span>

        <h1>{project.title}</h1>

        <p className="project-detail-intro">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="technology-list large">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {/* Highlights */}
        <div className="detail-section">
          <h2>Engineering highlights</h2>

          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="project-detail-actions">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              <Code2 size={17} />
              View on GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
            >
              <ExternalLink size={17} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </section>
  );
}