import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-dot" />
          Biozid Bhuiyan Tonoy
        </Link>

        <nav className={`nav-links ${open ? "nav-open" : ""}`}>
          <a href="/#about" onClick={closeMenu}>
            About
          </a>
          <a href="/#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="/#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="/#contact" onClick={closeMenu}>
            Contact
          </a>

          <Link to="/resume" className="nav-resume" onClick={closeMenu}>
            Resume
          </Link>
        </nav>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
