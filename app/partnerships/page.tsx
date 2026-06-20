import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { ContactForm } from '@/components/contact-form';
import { PartnerCard } from '@/components/partner-card';
import { SectionHeading } from '@/components/section-heading';
import { partnerTypes } from '@/app/data/site';
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
      <AnimatedSection className="px-6 pb-8 pt-28 sm:px-8 sm:pt-32 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-white/70 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.99),rgba(244,247,255,0.95)_42%,rgba(255,255,255,0.94)_100%)] shadow-[0_28px_90px_rgba(148,163,184,0.18)]">
          <div className="relative min-h-[36rem] overflow-hidden px-7 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <Image
              src="/assests/patnership-page-hero-image.png"
              alt="Aznix partnership infrastructure illustration"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_26%,rgba(255,255,255,0.7)_44%,rgba(255,255,255,0.18)_66%,rgba(255,255,255,0.08)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.88),transparent_36%)]" />
            <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_22%,transparent_78%,rgba(255,255,255,0.08))]" />

            <div className="relative z-10 flex min-h-[31rem] items-center">
              <div className="max-w-[34rem]">
              <p className="type-overline text-brand-400">Partnerships</p>
              <h1 className="mt-5 max-w-[28rem] text-[2rem] font-semibold leading-[0.96] tracking-[-0.06em] text-slate-950 sm:text-[2rem] lg:text-[3.2rem] italic font-serif">
                Built for investors, infrastructure partners, and strategic{' '}
                <span className="text-brand-400">collaborators</span>
              </h1>
              <p className="mt-7 max-w-[29rem] text-[1rem] leading-8 text-slate-700 lg:text-xs lg:leading-7 3xl:text-sm 3xl:leading-8">
                Aznix works with aligned organizations that understand venture building, digital
                systems, and long-term platform value.
              </p>
              <Link
                href="#collaboration-models"
                className="type-button mt-9 inline-flex items-center gap-2 rounded-full bg-slate-950 pl-6 pr-2 py-2 text-white shadow-[0_16px_32px_rgba(15,23,42,0.18)] transition hover:bg-slate-800"
              >
                Explore Partnership Opportunities
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-400 text-slate-950">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-10 sm:px-8 lg:px-10" id="collaboration-models">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Collaboration Models"
            title="Multiple ways to build with the Aznix ecosystem"
            description="From strategic capital to enterprise collaboration, our partnership model is designed around alignment, scale, and long-range capability building."
            align="center"
          />
          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {partnerTypes.map((partner) => (
              <PartnerCard key={partner.title} partner={partner} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.4rem] border border-white/70 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(244,246,252,0.95)_42%,rgba(255,255,255,0.94)_100%)] p-7 shadow-[0_28px_90px_rgba(148,163,184,0.14)] sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="Inquiry"
              title="Start the conversation"
              description="Share your investment mandate, collaboration objective, or platform opportunity and our team will follow up."
            />
            <div className="mt-8 rounded-[1.8rem] border border-white/80 bg-white/88 p-6 shadow-[0_18px_45px_rgba(148,163,184,0.12)]">
              <p className="type-body text-slate-700">
                Aznix seeks relationships that strengthen venture velocity, product advantage, and
                infrastructure capabilities for the future.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  'Portfolio expansion',
                  'Strategic collaboration objectives',
                  'Platform opportunity and venture fit',
                ].map((item) => (
                  <li key={item} className="type-body flex items-start gap-3 text-slate-600">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-brand-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ContactForm
            className="border-white/80 bg-white/92 shadow-[0_22px_55px_rgba(148,163,184,0.16)]"
            buttonClassName="bg-slate-950 text-white hover:bg-slate-800"
          />
        </div>
      </AnimatedSection>
    </>
  );
}
