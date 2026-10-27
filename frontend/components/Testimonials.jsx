import { testimonials } from "@/lib/data";
import { Star } from "./Icons";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="section testimonial-section">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Testimonials</p>
          <h2>What clients say.</h2>
        </Reveal>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <Reveal
              as="figure"
              className="testimonial"
              key={item.name}
              delay={index * 100}
            >
              <div className="stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} />
                ))}
              </div>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <span className={`avatar${item.accent ? " avatar-sky" : ""}`} aria-hidden="true">
                  {item.initials}
                </span>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
