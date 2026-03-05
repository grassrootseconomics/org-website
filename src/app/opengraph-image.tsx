import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const runtime = "edge";

export const alt = SITE_NAME;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a1a0a 0%, #0d2818 40%, #0a1a2a 100%)",
          padding: "60px 80px",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {/* Stylized GE icon */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle cx="35" cy="50" r="30" stroke="#00c853" strokeWidth="8" fill="none" />
            <circle cx="65" cy="50" r="30" stroke="#1565c0" strokeWidth="8" fill="none" />
          </svg>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              Grassroots
            </span>
            <span
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              Economics
            </span>
          </div>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 24,
            color: "#b0bec5",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.5,
          }}
        >
          {SITE_DESCRIPTION}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: 20,
            color: "#4caf50",
            fontWeight: 600,
          }}
        >
          grassecon.org
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
