import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { skillGroups } from "../../data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="section section-muted">
      <div className="container">

        <SectionHeading
          eyebrow="TECH STACK"
          title="Tools I work with."
          description="Technologies and engineering skills I use to design, build, and ship software."
        />

        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              className="skill-group"
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: groupIndex * 0.08,
                ease: "easeOut",
              }}
            >
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: groupIndex * 0.08 + skillIndex * 0.04,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}