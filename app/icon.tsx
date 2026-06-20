import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="64"
        height="64"
      >
        <rect width="64" height="64" rx="16" fill="#081226" />
        <path
          d="M14 25C14 15.6 21.6 8 31 8C40.4 8 48 15.6 48 25"
          fill="none"
          stroke="#F5B321"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="31" cy="8" r="3" fill="#F5B321" />
        <circle cx="14" cy="25" r="3" fill="#F5B321" />
        <circle cx="48" cy="25" r="3" fill="#F5B321" />
        <path d="M31 15L14 47H21L31 29L41 47H48L31 15Z" fill="#FFFFFF" />
        <path d="M31 35L24 47H38L31 35Z" fill="#F5B321" />
      </svg>
    ),
    size,
  );
}
