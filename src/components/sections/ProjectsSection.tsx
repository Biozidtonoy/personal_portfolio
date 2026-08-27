import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import "../../styles/homePageProjectSection.css";
export default function ProjectsSection() {
  return (
    <section id="projects" className="section home-projects">
      <div className="container">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Projects I've built."
          description="A selection of projects that demonstrate my engineering experience."
        />

        <div className="home-projects-list">
          {projects.slice(0, 3).map((project, index) => (
            <article className="home-project" key={project.title}>
              {/* Project number */}
              <div className="home-project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Project content */}
              <div className="home-project-content">
                <span className="home-project-label">PROJECT</span>

                <h3>{project.title}</h3>

                <p>{project.shortDescription}</p>

                {/* Technologies */}
                <div className="home-project-technologies">
                  {project.technologies.slice(0, 6).map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="home-project-actions">
                  <Link
                    to={
                      project.title === "EasyTrip"
                        ? "/projects/easytrip"
                        : project.title === "QuickNote"
                          ? "/projects/quicknote"
                          : "#"
                    }
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
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.609.069-.609 1.004.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .269.18.58.688.482A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
                      </svg>
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

        {/* View all projects */}
        <div className="home-projects-more">
          <Link to="/projects">
            View all projects
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
