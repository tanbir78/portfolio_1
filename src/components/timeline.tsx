
import { cn } from "@/lib/cn";

export type TimelineItem = {
  key: string;
  kicker: string;
  title: string;
  subtitle: string;
  meta?: string;
  metaBelow?: boolean;
  current?: boolean;
  extra?: React.ReactNode;
};

export function Timeline({
  items,
  headingLevel = "h3",
}: {
  items: TimelineItem[];
  headingLevel?: "h3" | "h4";
}) {
  const Heading = headingLevel;

  return (
    <ol className="relative ml-1.5 border-l border-line">
      {items.map((it) => (
        <li
          key={it.key}
          className="relative pb-12 pl-7 last:pb-0 sm:pl-9"
        >
          {/* Timeline dot */}
          <span
            aria-hidden="true"
            className={cn(
              "absolute top-1.5 -left-[6px] size-[11px] rounded-full ring-4 ring-bg",
              it.current
                ? "bg-signal"
                : "border border-faint bg-bg",
            )}
          />

          {/* Organization and status */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="max-w-2xl text-xs font-medium uppercase tracking-[0.12em] leading-relaxed text-muted">
              {it.kicker}
            </span>

            {it.current ? (
              <span className="rounded-full border border-signal/40 px-2.5 py-1 text-[11px] font-medium text-signal">
                Current
              </span>
            ) : null}
          </div>

          {/* Role title and date */}
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <Heading className="min-w-0 font-serif text-xl leading-snug text-balance sm:text-2xl">
              {it.title}
            </Heading>

            {it.meta && !it.metaBelow ? (
              <p className="shrink-0 text-sm text-muted tabular-nums">
                {it.meta}
              </p>
            ) : null}
          </div>

          {/* Location */}
          {it.subtitle ? (
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {it.subtitle}
            </p>
          ) : null}

          {/* Meta below institution */}
          {it.meta && it.metaBelow ? (
            <p className="mt-1 text-sm text-muted tabular-nums">
              {it.meta}
            </p>
          ) : null}

          {/* Description */}
          {it.extra ? (
            <div className="mt-4">
              {it.extra}
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
