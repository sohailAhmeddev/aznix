import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CompanyCard } from "@/components/company-card";
import { HeroSection } from "@/components/hero-section";
import { IndustryCard } from "@/components/industry-card";
import { SectionHeading } from "@/components/section-heading";
import { StatsCounter } from "@/components/stats-counter";
import {
  ecosystemUnits,
  heroActions,
  industries,
  siteConfig,
  stats,
} from "@/app/data/site";
import { createMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import {
  ChartNoAxesCombined,
  Cog,
  DatabaseZapIcon,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Building the Future of Digital Infrastructure",
  description:
    "Aznix Holding builds and operates technology ventures across SaaS, fintech, blockchain, and enterprise systems.",
  path: "/",
});

export default function HomePage() {
  const statIllustrations = [
    "/assests/26.png",
    "/assests/27.png",
    "/assests/28.png",
    "/assests/31.png",
  ];

  return (
    <>
      <HeroSection
        title="Building the Future of Digital Infrastructure"
        subtitle="Aznix Holding builds and operates technology ventures across SaaS, fintech, blockchain, and enterprise systems."
        actions={heroActions}
      />

      <AnimatedSection className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Ecosystem"
            title="A portfolio of specialized ventures under one technology group"
            description="Each Aznix company is built around a distinct infrastructure layer, while benefiting from shared product thinking, operational expertise, and a common innovation platform."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-10">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="overflow-hidden rounded-[1rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(241,245,249,0.78))] p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-0">
                <Image
                  alt="ecosystem"
                  width={600}
                  height={600}
                  src={"/assests/ecosystem.png"}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
            <div className="grid gap-4 lg:auto-rows-fr lg:grid-cols-2">
              {ecosystemUnits.map((unit) => (
                <CompanyCard key={unit.name} unit={unit} />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10">
              <SectionHeading
                eyebrow="Vision"
                title="Building scalable digital ecosystems for the next generation of business"
                description="Aznix is designed to combine innovation, ownership, scalability, and digital infrastructure into one enterprise-grade operating model. We do not deliver client work as an agency. We create and compound technology assets."
              />
              <Image
                className="mt-5 w-full rounded-lg"
                height={500}
                width={500}
                src={"/assests/11.png"}
                alt="vison"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start gap-5">
            {[
              {
                title: "Innovation",
                body: "New systems, new markets, and repeatable venture creation.",
                icon: <Lightbulb />,
              },
              {
                title: "Ownership",
                body: "Long-term value through products we build, operate, and evolve.",
                icon: <Cog />,
              },
              {
                title: "Scalability",
                body: "Infrastructure that expands across industries, teams, and regions.",
                icon: <ChartNoAxesCombined />,
              },
              {
                title: "Digital Infrastructure",
                body: "Core platforms powering modern business operations.",
                icon: <DatabaseZapIcon />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 h-fit"
              >
                <div>
                  <p className="text-lg font-semibold text-slate-950">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {item.body}
                  </p>
                </div>
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Industries"
            title="Infrastructure designed for complex, high-value sectors"
            description="Our ventures target sectors where digital systems are critical to speed, governance, intelligence, and resilience."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard key={industry.name} industry={industry} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.34em] text-brand-300">
                Scale
              </p>
              <h2 className="mt-5 font-serif text-4xl font-semibold italic leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-[4rem]">
                The operating momentum behind the Aznix ecosystem
              </h2>
              <p className="mt-7 text-lg leading-9 text-slate-700">
                Aznix combines venture velocity with product discipline,
                creating multiple opportunities for compounding value across
                the group.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-x-8 bottom-6 top-16 rounded-full bg-brand-100/35 blur-3xl" />
              <div
                className="relative"
                style={{
                  maskImage:
                    "radial-gradient(circle at center, black 58%, rgba(0,0,0,0.82) 74%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, black 58%, rgba(0,0,0,0.82) 74%, transparent 100%)",
                }}
              >
                <Image
                  src="/assests/25.png"
                  alt="Illustration representing the operating momentum of the Aznix ecosystem"
                  width={1448}
                  height={1086}
                  className="h-auto w-full object-contain opacity-[0.97]"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <StatsCounter
                key={stat.label}
                stat={stat}
                illustration={statIllustrations[index]}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 pb-20 pt-6 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[2rem] border border-white/70 bg-white/92 p-8 shadow-[0_30px_80px_rgba(148,163,184,0.22)] sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-brand-300">
              Partnerships
            </p>
            <h2 className="mt-5 font-serif text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Build With Aznix
            </h2>
            <p className="mt-6 text-lg leading-9 text-slate-700">
              {siteConfig.name} partners with investors, operators, and
              technology leaders to accelerate the next era of business
              infrastructure.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-brand-300"
            >
              Contact Us
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-x-10 bottom-6 top-10 rounded-full bg-brand-100/50 blur-3xl" />
            <Image
              src="/assests/30.png"
              alt="Illustration representing technology partnerships and business infrastructure collaboration"
              width={1448}
              height={1086}
              className="relative z-10 h-auto w-full object-contain"
            />
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
