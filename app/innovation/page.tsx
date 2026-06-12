import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/animated-section';
import { CTASection } from '@/components/cta-section';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { initiatives } from '@/data/site';
import { iconMap } from '@/lib/icons';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Innovation',
  description:
    'See Aznix Holding R&D initiatives across AI systems, automation engines, blockchain infrastructure, and financial intelligence.',
  path: '/innovation',
});

export default function InnovationPage() {
  return (
    <>
      <PageHero
        eyebrow="Innovation"
        title="R&D focused on the next wave of enterprise and financial infrastructure"
        description="Aznix Labs explores the technologies that can reshape business systems over the next decade, from AI orchestration to blockchain-based trust layers."
      />

      <AnimatedSection className="px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-2">
          {initiatives.map((initiative) => {
            const Icon = iconMap[initiative.icon];

            return (
              <article key={initiative.title} className="rounded-[2rem] border border-slate-200 bg-white p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-400/10 text-brand-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-slate-950">{initiative.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-700">{initiative.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {initiative.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10">
          <SectionHeading
            eyebrow="R&D Positioning"
            title="Innovation at Aznix is structured, commercial, and infrastructure-led"
            description="We focus on applied research that can be transformed into venture assets, operational tools, or platform capabilities. The goal is not experimentation for its own sake. It is the creation of systems that can define categories."
          />
        </div>
      </AnimatedSection>

      <CTASection
        eyebrow="Labs"
        title="Connect with Aznix on strategic innovation"
        description="We collaborate with investors, enterprises, and ecosystem partners who want to shape the future of intelligent digital infrastructure."
        buttonLabel="Contact Innovation Team"
        buttonHref="/contact"
      />
    </>
  );
}

