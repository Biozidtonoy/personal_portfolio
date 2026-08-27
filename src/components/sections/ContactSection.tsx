import { ArrowUpRight, Mail } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHeading
          eyebrow="CONTACT"
          title="Let's build something useful."
          description="I'm open to internship and entry-level software engineering opportunities."
        />

        <div className="contact-card">

          {/* Email */}
          <div className="contact-item">
            <Mail size={26} />

            <div>
              <span>GET IN TOUCH</span>

              <a href="mailto:biozidbhuiyantonoy10@gmail.com">
                biozidbhuiyantonoy10@gmail.com
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="contact-item">
            <div className="contact-text-icon">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.609.069-.609 1.004.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .269.18.58.688.482A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
              </svg>
            </div>

            <div>
              <span>GITHUB</span>

              <a
                href="https://github.com/Biozidtonoy"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Biozidtonoy
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="contact-item">
            <div className="contact-text-icon linkedin-text-icon">
              in
            </div>

            <div>
              <span>LINKEDIN</span>

              <a
                href="https://www.linkedin.com/in/biozidbhuiyantonoy"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/biozidbhuiyantonoy
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}