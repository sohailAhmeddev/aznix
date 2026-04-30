import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/animated-section';
import { CTASection } from '@/components/cta-section';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { Timeline } from '@/components/timeline';
import { leadership, timeline, valuePillars } from '@/data/site';
import { iconMap } from '@/lib/icons';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'About',
  description:
    'Learn how Aznix Holding operates as a venture builder and technology ecosystem across digital infrastructure.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A technology holding company built for long-range digital value creation"
        description="Aznix Holding brings together venture creation, infrastructure product strategy, and operational execution under one enterprise-grade platform."
      />

      <AnimatedSection className="px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            [
              'Company story',
              'Aznix was created around a simple thesis: the most valuable technology companies are built on durable infrastructure, not one-off service delivery. Our model is to create and operate ventures that compound over time.',
            ],
            [
              'Mission',
              'To build, own, and scale the systems powering the future of business across software, finance, automation, and digital trust.',
            ],
            [
              'Vision',
              'To become a globally recognized innovation holding company for critical digital infrastructure.',
            ],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{body}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core Values"
            title="Operating principles behind the Aznix ecosystem"
            description="Our ventures share a common foundation: conviction in infrastructure, disciplined execution, and a long-term ownership mindset."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {valuePillars.map((pillar) => {
              const Icon = iconMap[pillar.icon];

              return (
                <article key={pillar.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-brand-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Leadership"
              title="Built by operators who think in systems, not short campaigns"
              description="Our leadership structure is designed to align strategy, venture incubation, product execution, and ecosystem partnerships."
            />
            <div className="mt-10 grid gap-5">
              {leadership.map((member) => (
                <article key={member.name} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-brand-300">{member.title}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{member.name}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">{member.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <SectionHeading
              eyebrow="Timeline"
              title="From thesis to ecosystem"
              description="Aznix continues to evolve as an integrated venture and infrastructure platform."
            />
            <div className="mt-10">
              <Timeline items={timeline} />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        eyebrow="Next Chapter"
        title="Partner with a holding company built to compound technology value"
        description="Whether you are exploring strategic collaboration, venture alignment, or digital infrastructure opportunities, Aznix is built to move at the system level."
        buttonLabel="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
