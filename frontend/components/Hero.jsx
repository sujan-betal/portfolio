import { ArrowRight, CheckCircle, Star } from "./Icons";
import Reveal from "./Reveal";
import Stats from "./Stats";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-a" aria-hidden="true" />
      <div className="hero-glow hero-glow-b" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal as="p" className="eyebrow hero-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Full Stack Developer <span className="eyebrow-divider">/</span> 2023 — 2026
          </Reveal>

          <Reveal as="h1" className="hero-name" delay={60}>
            <span className="hero-name-line">SUJAN</span>
            <span className="hero-name-line hero-name-accent">BETAL<span className="hero-name-period">.</span></span>
          </Reveal>

          <Reveal as="p" className="hero-text" delay={120}>
            I design and build thoughtful web and mobile products, from polished
            interfaces to reliable backend systems.
          </Reveal>

          <Reveal className="hero-actions" delay={180}>
            <a href="#work" className="btn btn-primary">
              View my work
              <ArrowRight />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let&apos;s talk
            </a>
          </Reveal>

          <Reveal className="hero-meta" delay={240}>
            <span className="hero-meta-label">I build</span>
            <div className="hero-specialties">
              <span>Web apps</span>
              <span>Mobile</span>
              <span>APIs</span>
            </div>
          </Reveal>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <Reveal className="code-card" delay={150}>
            <div className="code-top">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="code-file">developer.ts</span>
            </div>
            <pre className="code-body">
              <code>
                <span className="tk-key">const</span>{" "}
                <span className="tk-var">developer</span> = {"{"}
                {"\n  "}name: <span className="tk-str">&apos;Sujan Betal&apos;</span>,
                {"\n  "}role: <span className="tk-str">&apos;Full Stack Developer&apos;</span>,
                {"\n  "}period: <span className="tk-str">&apos;2023 — 2026&apos;</span>,
                {"\n  "}stack: [<span className="tk-str">&apos;Next.js&apos;</span>,{" "}
                <span className="tk-str">&apos;FastAPI&apos;</span>,{" "}
                <span className="tk-str">&apos;Flutter&apos;</span>],
                {"\n  "}available: <span className="tk-bool">true</span>
                {"\n"}
                {"}"};
              </code>
            </pre>
          </Reveal>

          <div className="float-card float-a">
            <span className="float-icon">
              <CheckCircle />
            </span>
            <div>
                <strong>Web + mobile</strong>
                <span>one connected experience</span>
            </div>
          </div>

          <div className="float-card float-b">
            <span className="float-icon icon-amber">
              <Star />
            </span>
            <div>
                <strong>Full stack</strong>
                <span>from interface to API</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Stats />
      </div>
    </section>
  );
}
