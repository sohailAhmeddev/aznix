import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';
import { ContactForm } from '@/components/contact-form';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { contactDetails } from '@/data/site';
import { iconMap } from '@/lib/icons';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Contact',
  description:
    'Contact Aznix Holding for partnership, enterprise infrastructure, and ecosystem collaboration inquiries.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with the Aznix team"
        description="For venture partnerships, strategic collaboration, or enterprise infrastructure discussions, connect with us here."
      />

      <AnimatedSection className="px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Reach Us"
              title="Business contact channels"
              description="We work with organizations looking for meaningful infrastructure partnerships and long-range technology collaboration."
            />
            <div className="mt-8 grid gap-5">
              {contactDetails.map((item) => {
                const Icon = iconMap[item.icon];
                const content = (
                  <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 transition hover:border-brand-400/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400/10 text-brand-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-sm uppercase tracking-[0.25em] text-slate-600">{item.label}</p>
                    <p className="mt-3 text-lg text-slate-950">{item.value}</p>
                  </div>
                );

                return item.href ? (
                  <Link key={item.label} href={item.href}>
                    {content}
                  </Link>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>
          <ContactForm />
        </div>
      </AnimatedSection>
    </>
  );
}

