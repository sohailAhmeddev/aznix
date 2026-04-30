import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/animated-section';
import { ContactForm } from '@/components/contact-form';
import { PageHero } from '@/components/page-hero';
import { PartnerCard } from '@/components/partner-card';
import { SectionHeading } from '@/components/section-heading';
import { partnerTypes } from '@/data/site';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Partnerships',
  description:
    'Partner with Aznix Holding across investment, technology, strategic alliances, and enterprise collaboration.',
  path: '/partnerships',
});

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Built for investors, infrastructure partners, and strategic collaborators"
        description="Aznix works with aligned organizations that understand venture building, digital systems, and long-term platform value."
      />

      <AnimatedSection className="px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Collaboration Models"
            title="Multiple ways to build with the Aznix ecosystem"
            description="From strategic capital to enterprise collaboration, our partnership model is designed around alignment, scale, and long-range capability building."
          />
          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {partnerTypes.map((partner) => (
              <PartnerCard key={partner.title} partner={partner} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Inquiry"
              title="Start the conversation"
              description="Share your investment mandate, collaboration objective, or platform opportunity and our team will follow up."
            />
            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-base leading-8 text-slate-300">
              Aznix seeks relationships that strengthen venture velocity, product advantage, and infrastructure depth across the group.
            </div>
          </div>
          <ContactForm />
        </div>
      </AnimatedSection>
    </>
  );
}
