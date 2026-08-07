import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Ethan Smith — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0f",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(0, 212, 255, 0.12), transparent 45%)",
        }}
      >
        <div
          style={{
            color: "#00d4ff",
            fontSize: 32,
            marginBottom: 24,
          }}
        >
          $ whoami
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Ethan Smith
        </div>
        <div
          style={{
            color: "#d1d5db",
            fontSize: 38,
            marginTop: 24,
          }}
        >
          Full-Stack Software Engineer · AI Platform Engineering
        </div>
        <div
          style={{
            color: "#6b7280",
            fontSize: 28,
            marginTop: 48,
          }}
        >
          ethanasm.me
        </div>
      </div>
    ),
    { ...size }
  );
}
