
import { profile } from "@/content/profile";
import { BriefcaseBusiness, Users, MapPin } from "lucide-react";

const GROUPS = [
  {
    kind: "Work",
    title: "Work experience",
    empty: "No work experience listed yet.",
    Icon: BriefcaseBusiness,
  },
  {
    kind: "Volunteering",
    title: "Volunteering",
    empty: "No volunteering experience listed yet.",
    Icon: Users,
  },
] as const;

export function Experience() {
  return (
    <div className="space-y-14">
      {GROUPS.map((group) => {
        const entries = profile.experience
          .filter((item) => item.kind === group.kind)
          .flatMap((item) =>
            item.roles.map((role) => ({
              ...role,
              kind: item.kind,
              organization: item.organization,
              place: item.place,
              key: `${item.organization}-${role.title}`,
            })),
          );

        return (
          <section key={group.kind}>
            {/* Section heading */}
            <h3 className="mb-6 flex items-center gap-4 font-serif text-2xl italic">
              {group.title}
              <span className="h-px flex-1 bg-line" />
            </h3>

            {entries.length > 0 ? (
              <div className="grid grid-cols-1 gap-5">
                {entries.map((item) => {
                  const Icon = group.Icon;

                  return (
                    <article
                      key={item.key}
                      className="group rounded-2xl border border-line bg-bg p-5 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-lg sm:p-7"
                    >
                      {/* Badge and date */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="inline-flex rounded-full bg-signal/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-signal">
                          {item.badge ?? group.kind}
                        </span>

                        <span className="text-sm text-muted tabular-nums">
                          {item.period}
                        </span>
                      </div>

                      {/* Role and organization */}
                      <div className="mt-5 flex items-start gap-3">
                        <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal">
                          <Icon size={21} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="text-lg font-semibold leading-snug text-fg sm:text-xl">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-sm leading-relaxed text-muted">
                            {item.organization}
                          </p>
                        </div>
                      </div>

                      {/* Location */}
                      {item.place && (
                        <div className="mt-3 flex items-center gap-2 text-xs text-muted">
                          <MapPin size={14} />
                          {item.place}
                        </div>
                      )}

                      {/* Project or event name */}
                      {item.project && (
                        <>
                          <div className="my-5 h-px bg-line" />

                          <h5 className="text-base font-semibold leading-relaxed text-fg sm:text-lg">
                            {item.project}
                          </h5>
                        </>
                      )}

                      {/* Description */}
                      {item.summary && (
                        <p className="mt-3 text-sm leading-7 text-muted text-pretty">
                          {item.summary}
                        </p>
                      )}

                      {/* Skills and tags */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-fg/[0.06] px-3 py-1.5 text-xs font-medium text-fg/80 transition-colors hover:bg-signal/15 hover:text-signal"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Bottom status */}
                      {item.kind === "Work" && (
                        <p className="mt-5 text-xs font-semibold text-signal">
                          Reached the Final Round · AI Project Competition 2026
                        </p>
                      )}
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-line px-5 py-7 text-sm text-muted">
                {group.empty}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
