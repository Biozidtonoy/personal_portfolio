import {
  ArrowLeft,
  Download,
} from "lucide-react";

import { Link } from "react-router";

export default function ResumePage() {
  return (
    <section className="resume-page">
      <div className="container">

        <div className="resume-page-header">

          <div className="resume-page-heading">

            <Link
              to="/"
              className="back-link"
            >
              <ArrowLeft size={17} />
              Back to home
            </Link>

            <span className="section-eyebrow">
              RESUME
            </span>

            <h1>
              Biozid Bhuiyan Tonoy
            </h1>

            <p>
              Software Engineer
            </p>

          </div>

          <a
            href="/resume.pdf"
            download="Biozid-Bhuiyan-Tonoy-Resume.pdf"
            className="button button-primary"
          >
            <Download size={17} />
            Download Resume
          </a>

          <p>To access the attach link on resume please download the pdf version</p>

        </div>

        {/* Single-page resume preview */}
        <div className="resume-images">

          <img
            src="/resume-page-1.png"
            alt="Biozid Bhuiyan Tonoy Resume"
            className="resume-page-image"
          />

        </div>

      </div>
    </section>
  );
}