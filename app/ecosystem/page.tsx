import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChartColumnBig, Orbit, Rocket, ShieldCheck } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { HeroSection } from '@/components/hero-section';
import { ecosystemUnits } from '@/app/data/site';
import { iconMap } from '@/lib/icons';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Ecosystem',
  description:
    'Explore the Aznix Holding ecosystem of ventures across SaaS, CRM, billing, fintech, blockchain, and R&D.',
  path: '/ecosystem',
});

const ecosystemHeroActions = [
  { label: 'Explore Subsidiaries', href: '#subsidiaries', variant: 'primary' as const },
  { label: 'See Innovation Focus', href: '/innovation', variant: 'secondary' as const },
];

const growthPillars = [
  {
    title: 'Shared Infrastructure',
    description: 'One platform foundation powering every venture layer.',
    icon: ShieldCheck,
  },
  {
    title: 'Unified Data Layer',
    description: 'Connected systems for stronger coordination and intelligence.',
    icon: Orbit,
  },
  {
    title: 'Limitless Potential',
    description: 'Built to compound across software, finance, and automation.',
    icon: Rocket,
  },
  {
    title: 'Scale Visibility',
    description: 'Operational growth measured through repeatable venture momentum.',
    icon: ChartColumnBig,
  },
];

export default function EcosystemPage() {
  return (
    <>
      <HeroSection
        eyebrow="Ecosystem"
        title="A connected venture portfolio built around critical digital systems."
        subtitle="Each Aznix subsidiary is designed to solve a distinct infrastructure challenge while contributing to a shared technology platform."
        actions={ecosystemHeroActions}
        badgeText="Shared infrastructure. Unified data. Scalable impact."
        backgroundImage="/assests/about/1.png"
      >
        <div className="grid max-w-[38rem] gap-3 rounded-[1.75rem] border border-white/70 bg-white/78 p-4 shadow-[0_18px_44px_rgba(15,23,42,0.1)] backdrop-blur sm:grid-cols-3 sm:p-5">
          <div className="flex min-w-0 items-start gap-3 rounded-2xl px-2 py-2">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-brand-400">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium leading-6 text-slate-700">Shared infrastructure</p>
              <p className="mt-1 text-xs leading-6 text-slate-500">One platform, many ventures.</p>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-3 rounded-2xl px-2 py-2">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-brand-400">
              <Orbit className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium leading-6 text-slate-700">Unified data</p>
              <p className="mt-1 text-xs leading-6 text-slate-500">Connected intelligence layers.</p>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-3 rounded-2xl px-2 py-2">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-brand-400">
              <Rocket className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium leading-6 text-slate-700">Compounding growth</p>
              <p className="mt-1 text-xs leading-6 text-slate-500">Built to scale across categories.</p>
            </div>
          </div>
        </div>
      </HeroSection>

      <AnimatedSection className="px-6 py-8 sm:px-8 lg:px-10" id="subsidiaries">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-400">
            Subsidiaries
          </p>
          <h2 className="mt-4 max-w-4xl font-serif text-4xl font-semibold italic leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Specialized ventures with shared infrastructure DNA.
          </h2>

          <div className="mt-10 grid gap-5">
            {ecosystemUnits.map((unit) => {
              const Icon = iconMap[unit.icon];

              return (
                <article
                  key={unit.name}
                  className="group grid gap-6 rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,247,255,0.92))] p-6 shadow-[0_18px_50px_rgba(148,163,184,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(148,163,184,0.16)] lg:grid-cols-[0.72fr_1fr_0.82fr] lg:items-center lg:p-7"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.6rem] border border-indigo-100 bg-white text-indigo-400 shadow-[0_16px_30px_rgba(129,140,248,0.14)]">
                      <Icon className="h-9 w-9" />
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.36em] text-slate-500 sm:text-xs">
                        {unit.sector}
                      </p>
                      <h3 className="mt-3 font-serif text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.1rem]">
                        {unit.name}
                      </h3>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {unit.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {unit.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-indigo-100 bg-white/90 px-3 py-1 text-[0.68rem] font-medium text-slate-500 shadow-[0_8px_20px_rgba(148,163,184,0.08)] sm:text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.6rem] border border-white/80 bg-[linear-gradient(180deg,rgba(245,247,255,0.92),rgba(255,255,255,0.96))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_16px_30px_rgba(148,163,184,0.08)]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-400">
                          Future Roadmap
                        </p>
                        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                          {unit.roadmap}
                        </p>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-indigo-400 transition duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-6 overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,245,255,0.92))] p-8 shadow-[0_28px_80px_rgba(148,163,184,0.16)] sm:p-10 lg:grid-cols-[0.46fr_1.54fr] lg:gap-10">
          <div className="relative">
            <div className="absolute inset-12 rounded-full bg-brand-100/35 blur-3xl" />
            <Image
              src="/assests/about/2.png"
              alt="Aznix ecosystem growth illustration"
              width={1200}
              height={1000}
              className="relative z-10 mx-auto h-auto w-full max-w-[17rem] object-contain sm:max-w-[19rem] lg:max-w-[20rem]"
            />
          </div>

          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-400">
              Ecosystem Growth
            </p>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 xl:text-[3.4rem]">
              Built to scale. Designed to compound.
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-[1.4rem] border border-slate-200/70 bg-white/92 p-5 shadow-[0_16px_35px_rgba(148,163,184,0.1)] xl:min-h-[13.5rem]">
                <p className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">
                  {ecosystemUnits.length}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-700">Ventures</p>
              </div>

              {growthPillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.title}
                    className="rounded-[1.4rem] border border-slate-200/70 bg-white/92 p-5 shadow-[0_16px_35px_rgba(148,163,184,0.08)] xl:min-h-[13.5rem]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-slate-900">{pillar.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{pillar.description}</p>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
              Our holding model is designed to create repeatable venture momentum across software infrastructure, financial systems, and intelligent automation.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 pb-20 pt-4 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,243,255,0.92))] p-8 shadow-[0_28px_80px_rgba(148,163,184,0.16)] sm:p-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-[3.2rem]">
              Explore where the Aznix ecosystem is heading next.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Discover upcoming initiatives, innovation pipelines, and the future of our connected ventures.
            </p>
            <Link
              href="/innovation"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-300"
            >
              See Innovation Focus
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-8 rounded-full bg-indigo-200/30 blur-3xl" />
            <Image
              src="/assests/about/5.png"
              alt="Aznix innovation and global ecosystem illustration"
              width={1600}
              height={1200}
              className="relative z-10 h-auto w-full object-contain"
            />
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
