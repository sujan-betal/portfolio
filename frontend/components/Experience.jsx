import { experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container experience-grid">
        <Reveal className="section-head">
          <p className="eyebrow">Experience</p>
          <h2>3 years building full-stack products.</h2>
          <p className="section-note">
            Building full-stack web and mobile applications from 2023 to 2026.
          </p>
        </Reveal>

        <ol className="timeline">
          {experience.map((item, index) => (
            <Reveal
              as="li"
              className="timeline-item"
              key={`${item.role}-${item.period}`}
              delay={index * 80}
            >
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-period">{item.period}</div>
              <h3>{item.role}</h3>
              {item.company && (
                <p className="timeline-company">{item.company}</p>
              )}
              <p>{item.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
