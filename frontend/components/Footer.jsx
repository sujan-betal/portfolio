import { ArrowUp } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href="#top" className="logo" aria-label="Back to top">
          <span className="logo-mark">SB</span>
          <span className="logo-text">
            <span className="logo-first">SUJAN</span>
            <span className="logo-last">BETAL</span>
          </span>
        </a>
        <p>&copy; {new Date().getFullYear()} Sujan Betal. All rights reserved.</p>
        <a href="#top" className="back-top">
          Back to top
          <ArrowUp />
        </a>
      </div>
    </footer>
  );
}
