import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  ExternalLink,
} from "lucide-react";
import { Link, useParams } from "react-router";
import { projects } from "../data/projects";
import "../styles/projectDetailsPage.css";

export default function ProjectDetailsPage() {
  const { slug } = useParams();

  const project = projects.find((item) => {
    if (item.title === "EasyTrip") {
      return slug === "easytrip";
    }

    if (item.title === "QuickNote") {
      return slug === "quicknote";
    }

    if (item.title === "Pokémon Memory Card Game") {
      return slug === "pokemon-memory";
    }

    return false;
  });

  /* -----------------------------------------
     PROJECT NOT FOUND
     ----------------------------------------- */

  if (!project) {
    return (
      <main className="pd-not-found">
        <div className="pd-container">
          <span className="pd-label">ERROR 404</span>

          <h1>Project not found.</h1>

          <p>
            The project you are looking for does not exist.
          </p>

          <Link to="/projects" className="pd-back-button">
            <ArrowLeft size={17} />
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pd-page">
      <div className="pd-container">

        {/* =====================================
            BACK TO PROJECTS
           ===================================== */}

        <Link to="/projects" className="pd-back-link">
          <ArrowLeft size={17} />
          <span>Back to projects</span>
        </Link>

        {/* =====================================
            PROJECT HEADER
           ===================================== */}

        <header className="pd-header">

          <span className="pd-label">
            PROJECT
          </span>

          <h1 className="pd-title">
            {project.title}
          </h1>

          <p className="pd-description">
            {project.description}
          </p>

        </header>

        {/* =====================================
            TECHNOLOGIES
           ===================================== */}

        <section className="pd-section">

          <span className="pd-label">
            TECHNOLOGIES
          </span>

          <div className="pd-technologies">
            {project.technologies.map((technology) => (
              <span
                className="pd-technology"
                key={technology}
              >
                {technology}
              </span>
            ))}
          </div>

        </section>

        {/* =====================================
            HIGHLIGHTS
           ===================================== */}

        <section className="pd-section">

          <span className="pd-label">
            HIGHLIGHTS
          </span>

          <ul className="pd-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>
                {highlight}
              </li>
            ))}
          </ul>

        </section>

        {/* =====================================
            PROJECT LINKS
           ===================================== */}

        <section className="pd-links-section">

          <span className="pd-label">
            PROJECT LINKS
          </span>

          <div className="pd-links">

            {/* GitHub */}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pd-link pd-link-github"
              >
                <span className="pd-link-icon">
                  <Code2 size={19} />
                </span>

                <span className="pd-link-content">
                  <strong>GitHub</strong>
                  <small>View source code</small>
                </span>

                <ArrowUpRight
                  size={18}
                  className="pd-link-arrow"
                />
              </a>
            )}

            {/* Live Demo */}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pd-link pd-link-live"
              >
                <span className="pd-link-icon">
                  <ExternalLink size={19} />
                </span>

                <span className="pd-link-content">
                  <strong>Live Demo</strong>
                  <small>View live project</small>
                </span>

                <ArrowUpRight
                  size={18}
                  className="pd-link-arrow"
                />
              </a>
            )}

          </div>

        </section>

      </div>
    </main>
  );
}