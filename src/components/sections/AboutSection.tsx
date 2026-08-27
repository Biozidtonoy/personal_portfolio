import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const paragraphs = [
  `I am a Software Engineer focused on building practical, reliable, and maintainable software. I enjoy working across the frontend and backend, turning requirements into clean, functional solutions that solve real problems.`,

  `My experience includes building full-stack applications with modern web technologies, designing REST APIs, working with databases, implementing authentication, and deploying applications. Through projects like EasyTrip and QuickNote, I have developed a strong interest in software architecture, clean code, and building products from idea to implementation.`,

  `I am currently looking for internship and entry-level Software Engineering opportunities where I can contribute to real-world projects, work with experienced engineers, and continue developing my technical and problem-solving skills. I value continuous learning, good engineering practices, and building software that creates meaningful value.`,
];

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">

        <SectionHeading
          eyebrow="ABOUT"
          title="Building software with purpose."
          description="An engineer focused on learning, building, and solving real-world problems."
        />

        <div className="about-grid">

          {/* Left Side */}
          <motion.div
            className="about-large"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3>Software Engineer</h3>
          </motion.div>

          {/* Right Side */}
          <div className="about-text">

            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.25,
                  ease: "easeOut",
                }}
              >
                {paragraph}
              </motion.p>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}