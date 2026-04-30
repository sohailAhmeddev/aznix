import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/animated-section';
import { CompanyCard } from '@/components/company-card';
import { CTASection } from '@/components/cta-section';
import { HeroSection } from '@/components/hero-section';
import { IndustryCard } from '@/components/industry-card';
import { SectionHeading } from '@/components/section-heading';
import { StatsCounter } from '@/components/stats-counter';
import { ecosystemUnits, heroActions, industries, siteConfig, stats } from '@/data/site';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Building the Future of Digital Infrastructure',
  description:
    'Aznix Holding builds and operates technology ventures across SaaS, fintech, blockchain, and enterprise systems.',
  path: '/',
});

export default function HomePage() {
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
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {ecosystemUnits.map((unit) => (
              <CompanyCard key={unit.name} unit={unit} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10">
            <SectionHeading
              eyebrow="Vision"
              title="Building scalable digital ecosystems for the next generation of business"
              description="Aznix is designed to combine innovation, ownership, scalability, and digital infrastructure into one enterprise-grade operating model. We do not deliver client work as an agency. We create and compound technology assets."
            />
          </div>
          <div className="grid gap-5">
            {[
              ['Innovation', 'New systems, new markets, and repeatable venture creation.'],
              ['Ownership', 'Long-term value through products we build, operate, and evolve.'],
              ['Scalability', 'Infrastructure that expands across industries, teams, and regions.'],
              ['Digital Infrastructure', 'Core platforms powering modern business operations.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-6">
                <p className="text-lg font-semibold text-white">{title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{body}</p>
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
          <SectionHeading
            eyebrow="Scale"
            title="The operating momentum behind the Aznix ecosystem"
            description="Aznix combines venture velocity with product discipline, creating multiple opportunities for compounding value across the group."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatsCounter key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        eyebrow="Partnerships"
        title="Build With Aznix"
        description={`${siteConfig.name} partners with investors, operators, and technology leaders to accelerate the next era of business infrastructure.`}
        buttonLabel="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
