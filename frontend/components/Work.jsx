import Image from "next/image";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "./Icons";
import Counter from "./Counter";
import Reveal from "./Reveal";

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal className="section-head section-head-row">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>A few things I&apos;ve built.</h2>
          </div>
          <p className="section-note">
            <Counter target={48} /> projects delivered since 2020
          </p>
        </Reveal>

        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal
              className="project-item"
              key={project.title}
              delay={(index % 3) * 70}
            >
              <article className="project-card">
                <div
                  className={`project-thumb ${
                    project.image ? "has-image" : project.thumb
                  }`}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="thumb-img"
                    />
                  ) : (
                    <span className="thumb-mark">{project.mark}</span>
                  )}
                  <span className="thumb-tag">{project.category}</span>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  {project.demoUrl && (
                    <div className="project-actions">
                      <a
                        href={project.demoUrl}
                        className="project-link project-demo"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live demo
                        <ArrowUpRight />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
