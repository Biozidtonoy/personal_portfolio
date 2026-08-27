import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "Start with requirements, users, constraints, and the actual problem being solved.",
  },
  {
    number: "02",
    title: "Design",
    text: "Choose a simple architecture that is appropriate for the project's scope.",
  },
  {
    number: "03",
    title: "Build",
    text: "Implement clean, maintainable code while keeping responsibilities separated.",
  },
  {
    number: "04",
    title: "Ship",
    text: "Test, review, version with Git, and deploy using a repeatable workflow.",
  },
];

export default function ApproachSection() {
  return (
    <section className="section section-muted">
      <div className="container">
        <SectionHeading
          eyebrow="ENGINEERING APPROACH"
          title="How I approach software."
          description="A practical workflow from idea to deployment."
        />

        <div className="approach-grid">
          {steps.map((step) => (
            <div className="approach-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}