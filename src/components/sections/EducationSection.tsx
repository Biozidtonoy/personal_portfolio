import SectionHeading from "../ui/SectionHeading";
import "../../styles/educationSection.css";


export default function EducationSection() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <SectionHeading
          eyebrow="EDUCATION"
          title="Academic background."
          description="My academic foundation in computer science and software engineering."
        />

        <div className="education-list">
          <article className="education-item">
            <div className="education-year">
              2022 — PRESENT
            </div>

            <div className="education-content">
              <span className="education-label">
                BACHELOR'S DEGREE
              </span>

              <h3>
                Bachelor of Science in Computer Science and Engineering
              </h3>

              <p className="education-institution">
                Independent University, Bangladesh (IUB)
              </p>

              <p className="education-description">
                Building a strong foundation in computer science, software
                engineering, programming, databases, algorithms, and computer
                systems.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}