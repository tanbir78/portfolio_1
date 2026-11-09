import { ImageResponse } from "next/og";

import { profile } from "@/content/profile";
import { siteDescription } from "@/lib/site";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: 72, background: "#FBFAF8", color: "#24232B" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 24, color: "#777481" }}>{profile.role} · Bangladesh</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, color: "#777481", fontStyle: "italic" }}>Hi, I’m</div>
            <div style={{ fontSize: 78, letterSpacing: -2, marginTop: 8, maxWidth: 760 }}>{profile.name}</div>
            <div style={{ fontSize: 28, color: "#52525b", marginTop: 18, maxWidth: 700 }}>{siteDescription}</div>
          </div>
          <div style={{ display: "flex", width: 64, height: 5, background: "#16834A", borderRadius: 8 }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 300, height: 300, marginLeft: 40, borderRadius: 150, background: "#24232B", color: "#FBFAF8", fontSize: 72, fontFamily: "Georgia" }}>THJ</div>
      </div>
    ),
    size,
  );
}
