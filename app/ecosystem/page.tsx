import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/animated-section';
import { CTASection } from '@/components/cta-section';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { ecosystemUnits } from '@/data/site';
import { iconMap } from '@/lib/icons';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Ecosystem',
  description:
    'Explore the Aznix Holding ecosystem of ventures across SaaS, CRM, billing, fintech, blockchain, and R&D.',
  path: '/ecosystem',
});

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem"
        title="A connected venture portfolio built around critical digital systems"
        description="Each Aznix subsidiary is designed to solve a distinct infrastructure challenge while contributing to a shared technology platform."
      />

      <AnimatedSection className="px-6 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Subsidiaries"
            title="Specialized ventures with shared infrastructure DNA"
            description="Aznix creates focused business units that can move with autonomy while benefiting from common product standards, intelligence layers, and operating leverage."
          />
          <div className="mt-12 grid gap-6">
            {ecosystemUnits.map((unit) => {
              const Icon = iconMap[unit.icon];

              return (
                <article
                  key={unit.name}
                  className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 lg:grid-cols-[0.72fr_1fr_0.85fr]"
                >
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-400/25 bg-brand-400/10 text-brand-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-5 text-sm uppercase tracking-[0.3em] text-slate-600">{unit.sector}</p>
                    <h2 className="mt-3 text-3xl font-semibold text-slate-950">{unit.name}</h2>
                  </div>
                  <div>
                    <p className="text-base leading-8 text-slate-700">{unit.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {unit.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                    <p className="text-sm uppercase tracking-[0.28em] text-brand-300">Future roadmap</p>
                    <p className="mt-4 text-base leading-7 text-slate-700">{unit.roadmap}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        eyebrow="Portfolio Growth"
        title="Explore where the Aznix ecosystem is heading next"
        description="Our holding model is designed to create repeatable venture momentum across software infrastructure, financial systems, and intelligent automation."
        buttonLabel="See Innovation Focus"
        buttonHref="/innovation"
      />
    </>
  );
}

