export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>Biozid Bhuiyan Tonoy</strong>
          <p>Software Engineer</p>
        </div>

        <p>© {new Date().getFullYear()} Biozid Bhuiyan Tonoy</p>
      </div>
    </footer>
  );
}