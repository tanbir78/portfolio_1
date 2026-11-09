
"use client";

import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useState } from "react";

import { getSocials } from "@/components/social-links";
import { profile } from "@/content/profile";

function getDisplayLink(key: string) {
  const displayLinks: Record<string, string> = {
    github: "github.com/tanbir",
    linkedin: "linkedin.com/tanbir",
    x: "x.com/tanbir",
    email: "thjewel800@gmail.com",
  };

  return displayLinks[key] ?? "";
}

function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be blocked.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : "Copy email address"}
      title={copied ? "Copied!" : "Copy email"}
      className="absolute right-4 bottom-4 grid size-8 place-items-center rounded-full border border-line/70 bg-bg/70 text-muted backdrop-blur transition-colors hover:text-fg"
    >
      {copied ? (
        <Check className="size-4 text-signal" aria-hidden="true" />
      ) : (
        <Copy className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}

export function Contact() {
  const tiles = getSocials().filter((s) => s.href);

  const tones: Record<string, string> = {
    github: "contact-card-green",
    linkedin: "contact-card-blue",
    x: "contact-card-peach",
    email: "contact-card-mint",
  };

  return (
    <div>
      <ul className="grid max-w-3xl gap-4 sm:grid-cols-2">
        {tiles.map(({ key, label, href, Icon }) => (
          <li
            key={key}
            className={`contact-card ${
              tones[key] ?? "contact-card-green"
            } relative overflow-hidden rounded-2xl`}
          >
            <a
              href={href ?? undefined}
              {...(
                key === "email"
                  ? {}
                  : { target: "_blank", rel: "me noreferrer" }
              )}
              className="group flex min-h-[112px] items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="contact-icon grid size-12 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                <Icon className="size-5" />
              </span>

              <span className="min-w-0">
                <span className="block font-serif text-xl">
                  {label}
                </span>

                <span className="block truncate text-sm text-muted">
                  {getDisplayLink(key)}
                </span>
              </span>

              {key !== "email" && (
                <ArrowUpRight
                  className="ml-auto size-4 shrink-0 text-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
                  aria-hidden="true"
                />
              )}
            </a>

            {key === "email" && profile.contact.email && (
              <CopyEmail email={profile.contact.email} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
