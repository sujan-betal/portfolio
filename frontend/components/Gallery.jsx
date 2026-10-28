"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gallery } from "@/lib/data";
import Reveal from "./Reveal";

export default function Gallery() {
  const [active, setActive] = useState(null);
  const closeButtonRef = useRef(null);
  const returnFocusRef = useRef(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback((direction) => {
    setActive((current) => {
      if (current === null) return current;
      return (current + direction + gallery.length) % gallery.length;
    });
  }, []);

  useEffect(() => {
    if (active === null) {
      returnFocusRef.current?.focus();
      returnFocusRef.current = null;
      return;
    }

    closeButtonRef.current?.focus();

    const onKey = (event) => {
      if (event.key === "Escape") {
        close();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      } else if (event.key === "Tab") {
        const buttons = document.querySelectorAll(
          ".lightbox button:not(:disabled)",
        );
        const first = buttons[0];
        const last = buttons[buttons.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  const current = active === null ? null : gallery[active];

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Project gallery</p>
          <h2>Screens from the products I&apos;ve built.</h2>
          <p className="section-note">
            One screen from each featured project. Select any screen to view it
            full size.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <Reveal
              className="gallery-item"
              key={`${item.title}-${item.page}`}
              delay={(index % 3) * 70}
            >
              <button
                type="button"
                className="gallery-card"
                onClick={(event) => {
                  returnFocusRef.current = event.currentTarget;
                  setActive(index);
                }}
                aria-label={`View ${item.title} ${item.page} screenshot`}
              >
                <span className="gallery-media">
                  <Image
                    src={item.image}
                    alt={`${item.title} ${item.page}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="gallery-img"
                  />
                  <span className="gallery-zoom">View</span>
                </span>
                <span className="gallery-caption">
                  <span className="gallery-title">{item.title}</span>
                  <span className="gallery-page">{item.page}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} screenshot`}
          onClick={close}
        >
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <div className="lightbox-bar">
              <div>
                <p className="lightbox-title">{current.title}</p>
                <p className="lightbox-page">{current.page}</p>
              </div>
              <button
                type="button"
                className="lightbox-close"
                ref={closeButtonRef}
                onClick={close}
                aria-label="Close gallery viewer"
              >
                Close
              </button>
            </div>
            <div className="lightbox-media">
              <Image
                src={current.image}
                alt={`${current.title} ${current.page}`}
                fill
                sizes="100vw"
                className="lightbox-img"
              />
            </div>
            <div className="lightbox-nav">
              <button type="button" onClick={() => step(-1)} aria-label="Previous screenshot">
                Previous
              </button>
              <span>
                {active + 1} / {gallery.length}
              </span>
              <button type="button" onClick={() => step(1)} aria-label="Next screenshot">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
