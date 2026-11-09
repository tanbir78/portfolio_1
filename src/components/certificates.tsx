
"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CalendarDays,
  ExternalLink,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { getCertifications } from "@/lib/certifications";

const items = getCertifications();

export function Certificates() {
  const trackRef = useRef<HTMLDivElement>(null);

  const [edges, setEdges] = useState({
    start: true,
    end: false,
  });

  // Check whether the carousel can scroll left or right.
  const updateEdges = useCallback(() => {
    const track = trackRef.current;

    if (!track) return;

    const maxScroll = Math.max(
      0,
      track.scrollWidth - track.clientWidth
    );

    const currentScroll = track.scrollLeft;

    setEdges({
      start: currentScroll <= 4,
      end:
        maxScroll <= 4 ||
        currentScroll >= maxScroll - 4,
    });
  }, []);

  // Observe scrolling, resizing and image loading.
  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let frame = 0;

    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateEdges);
    };

    const resizeObserver = new ResizeObserver(scheduleUpdate);

    resizeObserver.observe(track);

    if (track.firstElementChild) {
      resizeObserver.observe(track.firstElementChild);
    }

    const images = track.querySelectorAll("img");

    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", scheduleUpdate);
        img.addEventListener("error", scheduleUpdate);
      }
    });

    track.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });

    window.addEventListener("resize", scheduleUpdate);

    scheduleUpdate();

    const timer = window.setTimeout(scheduleUpdate, 500);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);

      resizeObserver.disconnect();

      track.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      images.forEach((img) => {
        img.removeEventListener("load", scheduleUpdate);
        img.removeEventListener("error", scheduleUpdate);
      });
    };
  }, [updateEdges]);

  // Move one card at a time.
  const move = useCallback(
    (direction: -1 | 1) => {
      const track = trackRef.current;

      if (!track) return;

      const cards =
        track.querySelectorAll<HTMLElement>(
          "[data-certificate-card]"
        );

      if (!cards.length) return;

      const currentLeft = track.scrollLeft;

      const tolerance = 8;

      let targetLeft: number;

      if (direction === 1) {
        const nextCard = Array.from(cards).find(
          (card) => card.offsetLeft > currentLeft + tolerance
        );

        targetLeft = nextCard
          ? nextCard.offsetLeft
          : track.scrollWidth;
      } else {
        const previousCards = Array.from(cards).filter(
          (card) => card.offsetLeft < currentLeft - tolerance
        );

        targetLeft = previousCards.length
          ? previousCards[previousCards.length - 1].offsetLeft
          : 0;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      track.scrollTo({
        left: targetLeft,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    },
    []
  );

  const buttonClass =
    "grid size-10 shrink-0 place-items-center rounded-full border border-line bg-transparent text-muted transition-all duration-200 hover:border-signal hover:bg-signal/10 hover:text-signal disabled:pointer-events-none disabled:opacity-30 disabled:hover:border-line disabled:hover:bg-transparent disabled:hover:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal";

  // Empty state.
  if (items.length === 0) {
    return (
      <div className="content-card rounded-[22px] px-6 py-8 sm:px-8">
        <div className="flex items-start gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-signal/10 text-signal">
            <Award className="size-6" aria-hidden="true" />
          </span>

          <div>
            <h3 className="font-serif text-2xl">
              Courses &amp; certificates
            </h3>

            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
              Add your certificate images to{" "}
              <code className="rounded bg-surface-2 px-1.5 py-0.5 text-sm">
                public/certificates/
              </code>
              , then add each course to{" "}
              <code className="rounded bg-surface-2 px-1.5 py-0.5 text-sm">
                src/lib/certifications.ts
              </code>
              . Your certificates will appear here as cards.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Section description and navigation buttons */}
      <div className="mb-8 flex items-center justify-between gap-4">
        <p className="text-[15px] leading-relaxed text-muted">
          Courses, training, and certificates that support my development journey.
        </p>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            disabled={edges.start}
            aria-label="Previous certificate"
            className={buttonClass}
          >
            <ArrowLeft
              className="size-4"
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            onClick={() => move(1)}
            disabled={edges.end}
            aria-label="Next certificate"
            className={buttonClass}
          >
            <ArrowRight
              className="size-4"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* Horizontal certificate carousel */}
      <div
        ref={trackRef}
        role="region"
        aria-label="Certificates, scroll horizontally"
        tabIndex={0}
        onScroll={updateEdges}
        className="no-scrollbar -mr-4 snap-x snap-mandatory overflow-x-auto scroll-smooth pr-4 pb-4 outline-offset-4 sm:-mr-6 sm:pr-6 lg:-mr-[max(2rem,calc((100vw-76rem)/2+2rem))] lg:pr-[max(2rem,calc((100vw-76rem)/2+2rem))]"
      >
        <ul className="flex w-max gap-6 pt-1 sm:gap-8">
          {items.map((item) => (
            <li
              key={item.id}
              data-certificate-card
              className="group w-[80vw] max-w-[400px] shrink-0 snap-start sm:w-[360px] xl:w-[400px]"
            >
              <article className="project-card flex h-full flex-col overflow-hidden p-3 sm:p-4">
                {/* Certificate image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white ring-1 ring-line">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.title} certificate`}
                      fill
                      sizes="(min-width: 1280px) 400px, (min-width: 640px) 360px, 80vw"
                      className="object-contain p-2 transition-transform duration-700 ease-out-soft group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="grid h-full place-items-center text-signal">
                      <Award
                        className="size-12"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>

                {/* Certificate title and provider */}
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl text-fg">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-muted">
                      {item.provider}
                    </p>
                  </div>

                  {item.credentialUrl ? (
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${item.title} certificate`}
                      className="grid size-9 shrink-0 place-items-center rounded-full border border-line transition-colors hover:border-signal hover:text-signal"
                    >
                      <ExternalLink
                        className="size-4"
                        aria-hidden="true"
                      />
                    </a>
                  ) : null}
                </div>

                {/* Completion date */}
                {item.completedAt ? (
                  <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                    <CalendarDays
                      className="size-4 shrink-0"
                      aria-hidden="true"
                    />
                    {item.completedAt}
                  </p>
                ) : null}

                {/* Description */}
                {item.description ? (
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                ) : null}

                {/* Skills */}
                {item.skills.length > 0 ? (
                  <ul
                    className="mt-4 flex flex-wrap gap-1.5"
                    aria-label="Certificate skills"
                  >
                    {item.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
