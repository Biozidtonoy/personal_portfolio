import {
  ArrowRight,
  Download,
} from "lucide-react";

export default function ResumeSection() {
  return (
    <section
      className="section resume-section"
      id="resume"
    >
      <div className="container">

        <div className="resume-card">

          <div className="resume-card-content">

            <span className="section-eyebrow">
              RESUME
            </span>

            <h2>
              Want to know more
              <br />
              about my experience?
            </h2>

            <p>
              Explore my resume to see my education,
              technical skills, projects, and professional
              experience.
            </p>

            <div className="resume-card-actions">

              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                View Resume
                <ArrowRight size={17} />
              </a>

              <a
                href="/resume.pdf"
                download="Biozid-Bhuiyan-Tonoy-Resume.pdf"
                className="button button-secondary"
              >
                <Download size={17} />
                Download Resume
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}