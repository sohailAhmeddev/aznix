import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { AnimatedSection } from '@/components/animated-section';
import { CTASection } from '@/components/cta-section';
import { SectionHeading } from '@/components/section-heading';
import { getSolutionBySlug, solutions } from '@/app/data/site';
import { iconMap } from '@/lib/icons';
import { createMetadata } from '@/lib/metadata';

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return createMetadata({
      title: 'Service Not Found',
      description: 'The requested service page could not be found.',
      path: '/solutions',
    });
  }

  return createMetadata({
    title: solution.title,
    description: solution.description,
    path: `/solutions/${solution.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const Icon = iconMap[solution.icon];
  const relatedSolutions = solutions.filter((item) => item.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <AnimatedSection className="px-6 pb-12 pt-28 sm:px-8 sm:pt-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Solutions
          </Link>

          <div className="mt-6 grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8  lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-brand-300">Service Detail</p>
              <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
                {solution.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{solution.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {solution.useCases.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-400/10 text-brand-300">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-6 text-sm uppercase tracking-[0.25em] text-slate-600">Business impact</p>
              <p className="mt-3 text-2xl font-semibold text-slate-950">{solution.impact}</p>
              <p className="mt-6 text-sm uppercase tracking-[0.25em] text-brand-300">Core problem</p>
              <p className="mt-3 text-base leading-7 text-slate-700">{solution.problem}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
            <SectionHeading
              eyebrow="Architecture"
              title="How Aznix structures this service"
              description={solution.solution}
            />
            <div className="mt-8 grid gap-4">
              {solution.capabilities.map((capability) => (
                <div
                  key={capability}
                  className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-700"
                >
                  {capability}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
            <SectionHeading
              eyebrow="Outcomes"
              title="What this enables for operators"
              description="Every Aznix service is designed to create operational leverage, system clarity, and long-term strategic resilience."
            />
            <div className="mt-8 grid gap-4">
              {solution.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-700"
                >
                  {outcome}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Related Services"
            title="Explore adjacent infrastructure layers"
            description="Aznix solutions are designed as connected operating systems, not isolated products."
          />
          <div className="mt-10 grid gap-5 xl:grid-cols-3">
            {relatedSolutions.map((item) => {
              const RelatedIcon = iconMap[item.icon];

              return (
                <article key={item.slug} className="rounded-[1.75rem] border border-slate-200 bg-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400/10 text-brand-300">
                    <RelatedIcon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-slate-950">{item.title}</h2>
                  <p className="mt-4 text-base leading-7 text-slate-700">{item.description}</p>
                  <Link
                    href={`/solutions/${item.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition hover:text-slate-950"
                  >
                    View Service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        eyebrow="Engage Aznix"
        title={`Start a conversation around ${solution.title.toLowerCase()}`}
        description="We build infrastructure systems for organizations that need more than surface-level software. Let’s talk about the layer you want to strengthen."
        buttonLabel="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
