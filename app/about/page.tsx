import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Building2,
  Eye,
  Globe,
  Handshake,
  Lightbulb,
  Lock,
  Orbit,
  Rocket,
  ShieldCheck,
  Target,
  UserRound,
} from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { HeroSection } from '@/components/hero-section';
import { timeline, leadership, siteConfig, valuePillars } from '@/app/data/site';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'About',
  description:
    'Learn how Aznix Holding operates as a venture builder and technology ecosystem across digital infrastructure.',
  path: '/about',
});

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade platform',
  },
  {
    icon: Rocket,
    title: 'Long-range value creation',
  },
  {
    icon: Globe,
    title: 'Global mindset, local execution',
  },
];

const storyCards = [
  {
    title: 'Company story',
    body: 'Aznix was created around a simple thesis: the most valuable technology companies are built on durable infrastructure, not one-off service delivery. Our model is to create and operate ventures that compound over time.',
    icon: Building2,
  },
  {
    title: 'Mission',
    body: 'To build, own, and scale the systems powering the future of business across software, finance, automation, and digital trust.',
    icon: Target,
  },
  {
    title: 'Vision',
    body: 'To become a globally recognized innovation holding company for critical digital infrastructure.',
    icon: Eye,
  },
];

const valueIcons = {
  Innovation: Lightbulb,
  Ownership: Lock,
  Trust: ShieldCheck,
  Scale: Orbit,
  Technology: Blocks,
} as const;

const leadershipIcons = [UserRound, Blocks, Handshake];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="About"
        title="A technology holding company built for long-range digital value creation"
        subtitle="Aznix Holding brings together venture creation, infrastructure product strategy, and operational execution under one enterprise-grade platform."
        badgeText="Holding company. Long-range value creation. Enterprise-grade digital infrastructure."
        backgroundImage="/assests/about-hero-image.png"
      >
        <div className="grid max-w-[40rem] gap-2 rounded-[1.75rem] border border-white/70 bg-white/78 p-2 shadow-[0_18px_44px_rgba(15,23,42,0.1)] backdrop-blur sm:grid-cols-3 sm:p-2">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex min-w-0 items-center gap-2 rounded-2xl px-2 py-2">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-brand-400">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="!text-xs type-body font-normal">{item.title}</p>
              </div>
            );
          })}
        </div>
      </HeroSection>

      <AnimatedSection className="px-6 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {storyCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="bg-white group rounded-[2rem] border border-slate-200/80 bg-white/92 p-7 shadow-[0_18px_50px_rgba(148,163,184,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(148,163,184,0.18)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-brand-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="type-card-title-lg mt-5">
                  {card.title}
                </h2>
                <p className="type-body-lg mt-4 text-slate-600">{card.body}</p>
                <div className="mt-8 flex justify-end text-brand-400 transition duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </article>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="type-overline text-brand-400">
            Core Values
          </p>
          <h2 className="type-section-title mt-4 max-w-4xl">
            Operating principles behind the Aznix ecosystem
          </h2>
          <p className="type-body-lg mt-4 max-w-4xl text-slate-600">
            Our ventures share a common foundation: conviction in infrastructure,
            disciplined execution, and a long-term ownership mindset.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {valuePillars.map((pillar) => {
              const Icon = valueIcons[pillar.title as keyof typeof valueIcons] ?? BadgeCheck;

              return (
                <article
                  key={pillar.title}
                  className="bg-white rounded-[1.8rem] border border-slate-200/80 bg-white/92 p-6 shadow-[0_18px_50px_rgba(148,163,184,0.1)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-brand-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="type-card-title-lg mt-5">
                    {pillar.title}
                  </h3>
                  <p className="type-body-muted mt-3">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-7 shadow-[0_18px_50px_rgba(148,163,184,0.12)] sm:p-8">
            <p className="type-overline text-brand-400">
              Leadership
            </p>
            <h2 className="type-section-title mt-4 max-w-xl">
              Built by operators who think in systems, not short campaigns
            </h2>
            <p className="type-body-lg mt-4 max-w-xl text-slate-600">
              Our leadership structure is designed to align strategy, venture incubation,
              product execution, and ecosystem partnerships.
            </p>

            <div className="mt-8 grid gap-4">
              {leadership.map((member, index) => {
                const Icon = leadershipIcons[index] ?? UserRound;

                return (
                  <article
                    key={member.name}
                    className="group rounded-[1.7rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.94))] p-5 shadow-[0_16px_40px_rgba(148,163,184,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-brand-400">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="type-card-title-lg">
                            {member.name}
                          </h3>
                          <p className="type-body-muted mt-3">
                            {member.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="mt-1 hidden h-5 w-5 shrink-0 text-brand-400 transition duration-300 group-hover:translate-x-1 sm:block" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200/80 bg-white/92 p-7 shadow-[0_18px_50px_rgba(148,163,184,0.12)] sm:p-8">
            <p className="type-overline text-brand-400">
              Timeline
            </p>
            <h2 className="type-section-title mt-4">
              From thesis to ecosystem
            </h2>
            <p className="type-body-lg mt-4 max-w-2xl text-slate-600">
              Aznix continues to evolve as an integrated venture and infrastructure platform.
            </p>

            <div className="relative mt-8 space-y-5 pl-10">
              <div className="absolute bottom-6 left-[0.9rem] top-3 w-px bg-gradient-to-b from-brand-200 via-brand-300 to-brand-100/10" />
              {timeline.map((item) => (
                <article
                  key={`${item.year}-${item.title}`}
                  className="relative rounded-[1.7rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.96))] p-5 shadow-[0_16px_40px_rgba(148,163,184,0.08)] sm:p-6"
                >
                  <div className="absolute -left-10 top-8 flex h-7 w-7 items-center justify-center rounded-full border border-brand-200 bg-white shadow-[0_8px_25px_rgba(148,163,184,0.18)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-300" />
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <span className="type-overline inline-flex w-fit rounded-full border border-brand-200 bg-amber-50 px-3 py-1 text-brand-400">
                      {item.year}
                    </span>
                    <div>
                      <h3 className="type-card-title-lg">
                        {item.title}
                      </h3>
                      <p className="type-body-muted mt-3">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 pb-20 pt-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(238,242,255,0.88))] p-8 shadow-[0_28px_80px_rgba(148,163,184,0.16)] sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <p className="type-overline text-brand-400">
              Next Chapter
            </p>
            <h2 className="type-section-title mt-4">
              Partner with a holding company built to compound technology value
            </h2>
            <p className="type-body-lg mt-5 text-slate-600">
              Whether you are exploring strategic collaboration, venture alignment, or digital
              infrastructure opportunities, {siteConfig.shortName} is built to move at the system
              level.
            </p>
            <Link
              href="/contact"
              className="type-button mt-7 inline-flex items-center gap-2 rounded-full bg-brand-400 px-6 py-3 text-slate-950 transition hover:bg-brand-300"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-x-10 bottom-6 top-10 rounded-full bg-brand-100/45 blur-3xl" />
            <Image
              src="/assests/about-2.png"
              alt="Illustration representing partnership and ecosystem growth"
              width={1200}
              height={800}
              className="relative z-10 h-auto w-full object-contain"
            />
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
