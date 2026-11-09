import { profile } from "@/content/profile";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-portfolio.vercel.app"
).replace(/\/$/, "");

export const siteTitle = `${profile.name} — ${profile.role} in Bangladesh`;

export const siteDescription =
  "Tanbir Hasan Jewel is a Computer Science & Engineering student and aspiring MERN stack developer from Bangladesh.";

export const sections = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "stack", label: "Tech stack" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievement", label: "Achievements" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
