// components/AznixLogo.tsx

import type { SVGProps } from "react";

type LogoVariant = "icon" | "primary" | "horizontal" | "reversed";

type AznixLogoProps = SVGProps<SVGSVGElement> & {
  variant?: LogoVariant;
  width?: number | string;
};

const GOLD = "#F5B321";
const BLACK = "#000000";
const MUTED = "#536078";
const WHITE = "#FFFFFF";

function LogoIcon({
  color = BLACK,
  showDivider = false,
}: {
  color?: string;
  showDivider?: boolean;
}) {
  return (
    <>
      <g transform="translate(20 18)">
        <path
          d="M35 90C35 49.7 67.7 17 108 17C148.3 17 181 49.7 181 90"
          stroke={GOLD}
          strokeWidth="5"
          strokeLinecap="round"
        />

        <circle cx="108" cy="17" r="8" fill={GOLD} />
        <circle cx="35" cy="90" r="8" fill={GOLD} />
        <circle cx="181" cy="90" r="8" fill={GOLD} />

        <path
          d="M108 35L34 157H62L108 82L154 157H182L108 35Z"
          fill={color}
        />

        <path d="M108 108L76 157H140L108 108Z" fill={GOLD} />
      </g>

      {showDivider && (
        <line
          x1="226"
          y1="39"
          x2="226"
          y2="184"
          stroke={color === WHITE ? "rgba(255,255,255,0.45)" : "#D7DCE5"}
          strokeWidth="1.5"
        />
      )}
    </>
  );
}

export default function AznixLogo({
  variant = "primary",
  width,
  className,
  ...props
}: AznixLogoProps) {
  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 216 190"
        width={width ?? 120}
        className={className}
        role="img"
        aria-label="Aznix Holding icon"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        fill={WHITE}
      >
        <LogoIcon />
      </svg>
    );
  }

  if (variant === "horizontal") {
    return (
      <svg
        viewBox="0 0 650 210"
        width={width ?? 420}
        className={className}
        role="img"
        aria-label="Aznix Holding"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        fill={WHITE}
      >
        <LogoIcon showDivider />

        <text
          x="270"
          y="126"
          fill={BLACK}
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="54"
          fontWeight="700"
          letterSpacing="-2"
        >
          Aznix Holding
        </text>
      </svg>
    );
  }

  if (variant === "reversed") {
    return (
      <svg
        viewBox="0 0 650 210"
        width={width ?? 420}
        className={className}
        role="img"
        aria-label="Aznix Holding"
        xmlns="http://www.w3.org/2000/svg"
        fill={WHITE}
        {...props}
      >
        <rect width="650" height="210" rx="28" fill={BLACK} />

        <g transform="translate(12 0)">
          <LogoIcon color={WHITE} showDivider />
        </g>

        <text
          x="282"
          y="126"
          fill={WHITE}
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="20"
          fontWeight="700"
          letterSpacing="-2"
        >
          Aznix Holding
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 920 250"
      width={width ?? 620}
      className={className}
      role="img"
      aria-label="Aznix Holding. Infrastructure, Innovation, Impact."
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="#FFFFFF"
    >
      <g transform="translate(8 15)">
        <LogoIcon showDivider color="#000"/>
      </g>

      <text
        x="285"
        y="126"
        fill={BLACK}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="72"
        fontWeight="700"
        letterSpacing="-3"
      >
        Aznix Holding
      </text>

      <g
        fill={MUTED}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="18"
        fontWeight="500"
        letterSpacing="5"
      >
        <text x="288" y="174">
          INFRASTRUCTURE
        </text>

        <circle cx="542" cy="168" r="4" fill={GOLD} />

        <text x="563" y="174">
          INNOVATION
        </text>

        <circle cx="736" cy="168" r="4" fill={GOLD} />

        <text x="757" y="174">
          IMPACT
        </text>
      </g>
    </svg>
  );
}