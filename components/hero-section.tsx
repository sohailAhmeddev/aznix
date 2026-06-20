"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { HeroAction } from "@/types/site";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  actions?: HeroAction[];
  badgeText?: string;
  eyebrow?: string;
  backgroundImage?: string;
  children?: ReactNode;
};

export function HeroSection({
  title,
  subtitle,
  actions = [],
  badgeText = "Technology ecosystem. Venture builder. Digital infrastructure group.",
  eyebrow,
  backgroundImage = "/assests/hero-infrastructure-visual.png",
  children,
}: HeroSectionProps) {
  return (
    <section className="overflow-hidden">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.21, 1, 0.35, 1] }}
          className="relative overflow-hidden"
        >
          <div
            className="relative min-h-[540px] bg-cover bg-[center_right] bg-no-repeat sm:min-h-[600px] lg:min-h-[620px]"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.92)_34%,rgba(255,255,255,0.72)_52%,rgba(255,255,255,0.18)_72%,rgba(255,255,255,0.08)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_42%)]" />
            <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_22%,transparent_78%,rgba(255,255,255,0.12))]" />

            <div className="relative z-10 flex min-h-[540px] items-center px-6 pb-10 pt-28 sm:min-h-[600px] sm:px-10 sm:pt-32 lg:min-h-[620px] lg:px-14 lg:pt-36">
              <div className="mx-auto max-w-7xl w-full">
                <div className="w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.05 }}
                    className="type-body inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/80 px-4 py-2 font-medium shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur"
                  >
                    <span className="h-2 w-2 rounded-full bg-brand-400 shadow-[0_0_18px_rgba(251,191,36,0.85)]" />
                    {badgeText}
                  </motion.div>

                  {eyebrow ? (
                    <motion.p
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.65, delay: 0.08 }}
                      className="type-overline mt-7 text-brand-400"
                    >
                      {eyebrow}
                    </motion.p>
                  ) : null}

                  <motion.h1
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.12,
                      ease: [0.21, 1, 0.35, 1],
                    }}
                    className="type-hero-title mt-8 max-w-lg"
                  >
                    {title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.2,
                      ease: [0.21, 1, 0.35, 1],
                    }}
                    className="type-body-lg mt-6 max-w-xl"
                  >
                    {subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.28,
                      ease: [0.21, 1, 0.35, 1],
                    }}
                    className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap"
                  >
                    {actions.map((action) => (
                      <Link
                        key={action.label}
                        href={action.href}
                        className={cn(
                          "type-button inline-flex min-w-[11rem] items-center justify-center rounded-full px-6 py-3.5 transition duration-300",
                          action.variant === "secondary"
                            ? "border border-slate-300 bg-white/80 text-slate-950 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur hover:border-slate-400 hover:bg-white"
                            : "bg-brand-400 text-slate-950 shadow-[0_16px_32px_rgba(251,191,36,0.35)] hover:bg-brand-300",
                        )}
                      >
                        {action.label}
                      </Link>
                    ))}
                  </motion.div>

                  {children ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.75,
                        delay: actions.length > 0 ? 0.34 : 0.26,
                        ease: [0.21, 1, 0.35, 1],
                      }}
                      className={cn(actions.length > 0 ? "mt-8" : "mt-9")}
                    >
                      {children}
                    </motion.div>
                  ) : null}

                  {/* <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.36 }}
                  className="mt-10 grid max-w-md gap-3 sm:grid-cols-2"
                >
                  {[
                    [
                      "Infrastructure-first",
                      "SaaS, fintech, blockchain, and enterprise systems",
                    ],
                    [
                      "Operator mindset",
                      "Built to own and scale ventures over the long term",
                    ],
                  ].map(([label, body]) => (
                    <div
                      key={label}
                      className="rounded-[1.35rem] border border-white/70 bg-white/55 p-4 shadow-[0_14px_28px_rgba(15,23,42,0.07)] backdrop-blur"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {body}
                      </p>
                    </div>
                  ))}
                </motion.div> */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
