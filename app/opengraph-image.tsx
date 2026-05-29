import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #ecfeff 0%, #ffffff 45%, #f0fdf4 100%)",
          color: "#0f172a",
          padding: "64px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#0f766e",
          }}
        >
          SEOAutopilotHub
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            AI SEO Automation for Small Businesses and Agencies
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "#334155" }}>
            Practical guides, honest reviews, and content workflows for lean
            teams.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
