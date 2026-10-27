import { skills } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <Reveal className="section-head">
          <p className="eyebrow">About me</p>
          <h2>Turning complex problems into simple, elegant products.</h2>
        </Reveal>

        <Reveal className="about-body" delay={100}>
          <p>
            I&apos;m Sujan, a full-stack developer. For the past three years
            I&apos;ve helped startups and product teams design, build and scale
            web applications — from first prototype to production.
          </p>
          <p>
            I care about clean architecture, thoughtful interfaces and the small details
            that make software feel effortless. When I&apos;m not coding, I&apos;m
            mentoring junior developers or writing about frontend performance.
          </p>
          <ul className="skills" aria-label="Core skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
