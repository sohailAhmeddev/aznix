import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 180 180"
        width="180"
        height="180"
      >
        <rect width="180" height="180" rx="44" fill="#081226" />
        <path
          d="M39 72C39 45.5 60.5 24 87 24C113.5 24 135 45.5 135 72"
          fill="none"
          stroke="#F5B321"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle cx="87" cy="24" r="7.5" fill="#F5B321" />
        <circle cx="39" cy="72" r="7.5" fill="#F5B321" />
        <circle cx="135" cy="72" r="7.5" fill="#F5B321" />
        <path d="M87 44L39 132H59L87 83L115 132H135L87 44Z" fill="#FFFFFF" />
        <path d="M87 101L67 132H107L87 101Z" fill="#F5B321" />
      </svg>
    ),
    size,
  );
}
