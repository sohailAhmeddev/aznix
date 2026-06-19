import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChartColumnBig,
  Cpu,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { solutions } from "@/app/data/site";
import { iconMap } from "@/lib/icons";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Solutions",
  description:
    "Aznix Holding develops enterprise solutions across CRM, payments, blockchain, automation, and AI business tools.",
  path: "/solutions",
});

const heroPills = [
  { label: "Scalable Systems", icon: ShieldCheck },
  { label: "Intelligent Automation", icon: Sparkles },
  { label: "Measurable Impact", icon: ChartColumnBig },
  { label: "Enterprise Ready", icon: Cpu },
];

const solutionImages: Record<string, string> = {
  "enterprise-solutions": "/assests/solutions/3.png",
  "crm-infrastructure": "/assests/solutions/4.png",
  "payment-systems": "/assests/solutions/5.png",
  "blockchain-systems": "/assests/solutions/6.png",
  "automation-systems": "/assests/solutions/7.png",
  "ai-business-tools": "/assests/solutions/8.png",
};

export default function SolutionsPage() {
  return (
    <>
      <AnimatedSection className="px-6 pb-8 pt-28 sm:px-8 sm:pt-32 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-white/80 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.99),rgba(241,245,255,0.94)_44%,rgba(255,255,255,0.96)_100%)] p-8 shadow-[0_25px_80px_rgba(148,163,184,0.18)] sm:p-10 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-brand-400">
                Solutions
              </p>
              <h1 className="mt-4 max-w-[46rem] font-serif text-[2.7rem] font-semibold italic leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-[3.2rem]">
                Technology systems engineered around business-critical problems
              </h1>
              <p className="mt-6 max-w-[30rem] text-[1.02rem] leading-8 text-slate-600">
                Aznix solutions are designed to turn operational complexity into
                scalable infrastructure, intelligent automation, and lasting
                enterprise advantage.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {heroPills.map((pill) => {
                  const Icon = pill.icon;

                  return (
                    <span
                      key={pill.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/88 px-3 py-2 text-[0.72rem] font-medium text-slate-600 shadow-[0_10px_24px_rgba(148,163,184,0.08)]"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-indigo-400">
                        <Icon className="h-3 w-3" />
                      </span>
                      {pill.label}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-x-10 inset-y-12 rounded-full bg-indigo-200/30 blur-3xl" />
              <Image
                src="/assests/solutions/1.png"
                alt="Aznix technology systems infrastructure illustration"
                width={1600}
                height={1280}
                className="relative z-10 ml-auto h-auto w-full max-w-[43rem] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-3 lg:grid-cols-[1fr_0.43fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-400">
                Solution Areas
              </p>
              <h2 className="mt-4 max-w-[46rem] font-serif text-[2.7rem] font-semibold italic leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-[3.2rem]">
                From bottlenecks to infrastructure advantage
              </h2>
              <p className="mt-4 max-w-[44rem] text-[1.02rem] leading-8 text-slate-600">
                Each solution area is designed around a simple framework:
                identify the operational problem, build the right system layer,
                and create measurable business impact.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(244,247,255,0.92))] p-5 shadow-[0_18px_45px_rgba(148,163,184,0.12)]">
              <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto]">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-400">
                    <ChartColumnBig className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-base font-semibold tracking-[-0.03em] text-slate-950">
                    Built for impact.
                  </p>
                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    Each solution connects people, data, and systems for
                    stronger results.
                  </p>
                </div>
                <Image
                  src="/assests/solutions/2.png"
                  alt="Solution impact growth illustration"
                  width={700}
                  height={700}
                  className="mx-auto h-auto w-full max-w-[8.75rem] object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 2xl:gap-6 xl:grid-cols-3">
            {solutions.map((item) => {
              const Icon = iconMap[item.icon];
              const image = solutionImages[item.slug];

              return (
                <article
                  key={item.title}
                  className="group rounded-[2rem] border border-slate-200/80 bg-white p-5 shadow-[0_18px_50px_rgba(148,163,184,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(148,163,184,0.16)] sm:p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-brand-400 shadow-[0_10px_25px_rgba(251,191,36,0.18)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[1rem] font-semibold tracking-[-0.03em] text-slate-950">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-2 grid gap-4 md:grid-cols-[0.95fr_1.05fr] md:items-start">
                    <div className="min-w-0">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-brand-400">
                        Problem
                      </p>
                      <p className="mt-3 text-xs leading-6 text-slate-600">
                        {item.problem}
                      </p>
                    </div>
                    <div className="overflow-hidden rounded-[1.4rem] border border-white/85 bg-white/72 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                      <Image
                        src={image}
                        alt={`${item.title} illustration`}
                        width={1200}
                        height={1000}
                        className="h-auto w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <div className="mt-3 grid gap-4 md:grid-cols-2 relative">
                    <div className="mr-1">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-indigo-400">
                        Solution
                      </p>
                      <p className="mt-3 text-xs leading-6 text-slate-600">
                        {item.solution}
                      </p>
                    </div>
                    <div
                      aria-hidden="true"
                      className="hidden md:block absolute left-1/2 top-5 bottom-1 w-px -translate-x-1/2 bg-slate-300 h-28"
                    />
                    <div className="ml-1">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-brand-400">
                        Impact
                      </p>
                      <p className="mt-3 text-xs leading-6 text-slate-600">
                        {item.impact}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="rounded-full border border-indigo-100 bg-white/88 px-3 py-1 text-[0.66rem] font-medium text-slate-500 shadow-[0_8px_20px_rgba(148,163,184,0.06)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,247,255,0.92))] "
                      >
                        {capability}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/solutions/${item.slug}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/92 px-5 py-3 text-xs font-semibold text-slate-950 transition hover:border-brand-300/40 hover:bg-white"
                  >
                    Explore Service
                    <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 pb-20 pt-6 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,243,255,0.92))] p-8 shadow-[0_28px_80px_rgba(148,163,184,0.16)] sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-400">
              Infrastructure Strategy
            </p>
            <h2 className="mt-4 max-w-[33rem] text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-[3.2rem]">
              Build around systems that create long-term operating leverage
            </h2>
            <p className="mt-5 max-w-[28rem] text-base leading-8 text-slate-600">
              Aznix focuses on high-trust, high-complexity software layers that
              create durable enterprise value.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-8 rounded-full bg-indigo-200/30 blur-3xl" />
            <Image
              src="/assests/solutions/9.png"
              alt="Layered infrastructure strategy illustration"
              width={1600}
              height={1200}
              className="relative z-10 h-auto w-full object-contain"
            />
            <Link
              href="/partnerships"
              className="absolute bottom-6 right-4 z-20 inline-flex items-center gap-2 rounded-full bg-brand-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-300 sm:right-8 lg:bottom-8"
            >
              Discuss a Partnership
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
