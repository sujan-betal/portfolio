import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <Reveal className="contact-card">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Have a project in mind? Let&apos;s build it together.</h2>
            <p>
              I&apos;m currently available for freelance and contract work. Find me
              on GitHub to get in touch.
            </p>
            <ul className="contact-links">
              <li>
                <a
                  href="https://github.com/sujan-betal"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
