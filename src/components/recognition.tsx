"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { AchievementRail, AchievementRailControls, AchievementRailTrack } from "@/components/achievements";
import { Certificates } from "@/components/certificates";

type Tab = "achievement" | "certificates";
const TABS: Array<{ id: Tab; label: string }> = [
  { id: "achievement", label: "Achievements" },
  { id: "certificates", label: "Certificates" },
];

/** Achievements and Certificates share one tabbed section; both have separate sidebar links. */
export function Recognition() {
  const [tab, setTab] = useState<Tab>("achievement");
  const listRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (id === "achievement" || id === "certificates") setTab(id);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  useEffect(() => {
    if (tab === "achievement") {
      window.dispatchEvent(new Event("resize"));
    }
  }, [tab]);

  useLayoutEffect(() => {
    const btn = listRef.current?.querySelector<HTMLElement>(`[data-tab="${tab}"]`);
    const bar = barRef.current;
    if (!btn || !bar) return;
    bar.style.width = `${btn.offsetWidth}px`;
    bar.style.transform = `translateX(${btn.offsetLeft}px)`;
  }, [tab]);

  const selectTab = (next: Tab) => {
    setTab(next);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.hash = next;
      window.history.replaceState(null, "", url);
      window.dispatchEvent(new Event("hashchange"));
    }
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const next = tab === "achievement" ? "certificates" : "achievement";
    selectTab(next);
    listRef.current?.querySelector<HTMLElement>(`[data-tab="${next}"]`)?.focus();
  };

  return (
    <AchievementRail>
      <div
        ref={listRef}
        role="tablist"
        aria-label="Achievements and certificates"
        onKeyDown={onKeyDown}
        className="relative mb-12 flex flex-wrap items-baseline gap-x-3 gap-y-2 pb-3 sm:gap-x-5"
      >
        {TABS.map((item, index) => (
          <span key={item.id} className="flex items-baseline gap-3 sm:gap-5">
            {index > 0 ? <span aria-hidden="true" className="font-serif text-2xl text-faint sm:text-4xl">/</span> : null}
            <button
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              data-tab={item.id}
              aria-selected={tab === item.id}
              aria-controls={`panel-${item.id}`}
              tabIndex={tab === item.id ? 0 : -1}
              onClick={() => selectTab(item.id)}
              className={cn(
                "font-serif text-2xl font-medium tracking-[0.02em] uppercase transition-colors duration-300 sm:text-5xl sm:tracking-[0.06em]",
                tab === item.id ? "text-fg" : "text-faint hover:text-muted",
              )}
            >
              {item.label}
            </button>
          </span>
        ))}
        <span ref={barRef} aria-hidden="true" className="absolute bottom-0 left-0 h-[2px] rounded-full bg-signal transition-[transform,width] duration-500 ease-out-soft" />
      </div>

      <div id="panel-achievement" role="tabpanel" aria-labelledby="tab-achievement" hidden={tab !== "achievement"}>
        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="text-[15px] leading-relaxed text-muted">Milestones from my competitive programming and academic journey.</p>
          <AchievementRailControls />
        </div>
        <AchievementRailTrack />
      </div>

      <div id="panel-certificates" role="tabpanel" aria-labelledby="tab-certificates" hidden={tab !== "certificates"}>
        <Certificates />
      </div>
    </AchievementRail>
  );
}
