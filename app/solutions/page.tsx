import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { CTASection } from '@/components/cta-section';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { solutions } from '@/app/data/site';
import { iconMap } from '@/lib/icons';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Solutions',
  description:
    'Aznix Holding develops enterprise solutions across CRM, payments, blockchain, automation, and AI business tools.',
  path: '/solutions',
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Technology systems engineered around business-critical problems"
        description="Aznix solutions are designed to turn operational complexity into scalable infrastructure, intelligent automation, and lasting enterprise advantage."
      />

      <AnimatedSection className="px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Solution Areas"
            title="From bottlenecks to infrastructure advantage"
            description="Each solution area is designed around a simple framework: identify the operational problem, build the right system layer, and create measurable business impact."
          />
          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {solutions.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-400/10 text-brand-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-slate-950">{item.title}</h2>
                      <p className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-600">Problem</p>
                      <p className="mt-2 text-base leading-7 text-slate-700">{item.problem}</p>
                    </div>
                  </div>
                  <div className="mt-7 grid gap-5 md:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                      <p className="text-sm uppercase tracking-[0.25em] text-brand-300">Solution</p>
                      <p className="mt-3 text-base leading-7 text-slate-700">{item.solution}</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                      <p className="text-sm uppercase tracking-[0.25em] text-brand-300">Impact</p>
                      <p className="mt-3 text-base leading-7 text-slate-700">{item.impact}</p>
                    </div>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/solutions/${item.slug}`}
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:border-brand-400/40 hover:bg-white"
                  >
                    Explore Service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        eyebrow="Infrastructure Strategy"
        title="Build around systems that create long-term operating leverage"
        description="Aznix focuses on high-trust, high-complexity software layers that create durable enterprise value."
        buttonLabel="Discuss a Partnership"
        buttonHref="/partnerships"
      />
    </>
  );
}

