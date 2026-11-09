"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Award, CalendarDays, Eye, X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { getAchievements } from "@/lib/achievements";

const items = getAchievements();

type AchievementRailState = {
  trackRef: React.RefObject<HTMLDivElement | null>;
  current: number;
  edges: { start: boolean; end: boolean };
  go: (dir: 1 | -1) => void;
};

const AchievementRailContext = createContext<AchievementRailState | null>(null);

function useAchievementRail() {
  const context = useContext(AchievementRailContext);
  if (!context) {
    throw new Error(
      "Achievement rail controls and track must be inside <AchievementRail>.",
    );
  }
  return context;
}

export function AchievementRail({
  children,
}: {
  children: React.ReactNode;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [edges, setEdges] = useState({
    start: true,
    end: items.length <= 1,
  });

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(
      track.querySelectorAll<HTMLElement>("[data-card]"),
    );
    const trackLeft = track.getBoundingClientRect().left;
    let nearest = 0;
    let bestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.getBoundingClientRect().left - trackLeft);
      if (distance < bestDistance) {
        bestDistance = distance;
        nearest = index;
      }
    });

    setCurrent(nearest);
    setEdges({
      start: track.scrollLeft <= 4,
      end:
        track.scrollLeft + track.clientWidth >= track.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const go = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>("[data-card]");
    if (!track || !card) return;

    const styles = getComputedStyle(card.parentElement ?? track);
    const gap = parseFloat(styles.columnGap) || 0;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    track.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, []);

  return (
    <AchievementRailContext.Provider
      value={{ trackRef, current, edges, go }}
    >
      {children}
    </AchievementRailContext.Provider>
  );
}

export function AchievementRailControls() {
  const { current, edges, go } = useAchievementRail();

  const buttonClass =
    "grid size-10 place-items-center rounded-full border border-line transition-colors hover:border-fg/30 hover:bg-surface disabled:pointer-events-none disabled:opacity-30";

  return (
    <div className="flex items-center gap-2">
      <span className="sr-only" aria-live="polite">
        Achievement {current + 1} of {items.length}
      </span>
      <button
        type="button"
        onClick={() => go(-1)}
        disabled={edges.start}
        aria-label="Previous achievement"
        className={buttonClass}
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        disabled={edges.end}
        aria-label="Next achievement"
        className={buttonClass}
      >
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}

function AchievementCard({
  item,
}: {
  item: (typeof items)[number];
}) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    if (!detailsOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDetailsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [detailsOpen]);

  return (
    <li
      data-card
      className="group w-[80vw] max-w-[400px] shrink-0 snap-start sm:w-[360px] xl:w-[400px]"
    >
      <article
        aria-labelledby={`achievement-${item.id}`}
        className="project-card h-full overflow-hidden p-3 sm:p-4"
      >
<div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white">
  <Image
    src={item.image}
    alt={item.title}
    fill
    sizes="(min-width: 1024px) 400px, 85vw"
    className="object-contain"
  />
</div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <h3
            id={`achievement-${item.id}`}
            className="font-serif text-2xl"
          >
            {item.title}
          </h3>
        </div>

        <p className="mt-2 text-[15px] leading-relaxed text-muted text-pretty">
          {item.description}
        </p>

        {item.date ? (
          <div className="mt-4 flex items-center gap-2 text-sm text-muted">
            <CalendarDays className="size-4" aria-hidden="true" />
            <span>{item.date}</span>
          </div>
        ) : null}

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Achievement tags">
          {item.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        {item.detailImage ? (
          <button
            type="button"
            onClick={() => setDetailsOpen(true)}
            aria-haspopup="dialog"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-signal hover:bg-signal/10 hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          >
            <Award className="h-4 w-4" />
            <span>View Award</span>
          </button>
        ) : null}
      </article>

      {detailsOpen && item.detailImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-8"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setDetailsOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`details-title-${item.id}`}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white bg-background p-3 shadow-2xl sm:p-5"
          >
            <div className="mb-3 flex items-center justify-between gap-4 px-1">
              <div>
                <h4 id={`details-title-${item.id}`} className="font-serif text-xl text-white">
                  {item.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setDetailsOpen(false)}
                aria-label="Close achievement details"
                className="grid size-10 shrink-0 place-items-center rounded-full border border-line text-white transition-colors hover:border-signal hover:text-signal"
              >
                <X className="size-5 " aria-hidden="true" />
              </button>
            </div>

            <div className="relative mx-auto max-h-[60vh] max-w-[650px] overflow-auto rounded-xl bg-surface">
              <Image
                src={item.detailImage}
                alt={`${item.title} award or trophy`}
                width={1000}
                height={750}
                sizes="(min-width: 1024px) 650px, 85vw"
                className="mx-auto h-auto max-h-[60vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </li>
  );
}

export function AchievementRailTrack() {
  const { trackRef } = useAchievementRail();

  return (
    <div
      ref={trackRef}
      role="region"
      aria-label="Achievements, scroll horizontally"
      tabIndex={0}
      className="no-scrollbar -mr-4 snap-x snap-mandatory overflow-x-auto scroll-smooth pr-4 pb-4 outline-offset-4 sm:-mr-6 sm:pr-6 lg:-mr-[max(2rem,calc((100vw-76rem)/2+2rem))] lg:pr-[max(2rem,calc((100vw-76rem)/2+2rem))]"
    >
      <ul className="flex w-max gap-6 pt-1 sm:gap-8">
        {items.map((item) => (
          <AchievementCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
