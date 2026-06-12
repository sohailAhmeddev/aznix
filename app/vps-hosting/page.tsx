import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { CTASection } from '@/components/cta-section';
import { PageHero } from '@/components/page-hero';
import { SectionHeading } from '@/components/section-heading';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'VPS Hosting',
  description:
    'Aznix VPS Hosting delivers scalable virtual servers, managed infrastructure, and quote-based plans for growing businesses.',
  path: '/vps-hosting',
});

const hostingFeatures = [
  {
    title: 'Performance Infrastructure',
    description: 'NVMe-backed virtual servers, dedicated resource allocation, and low-latency deployment for critical workloads.',
  },
  {
    title: 'Managed Reliability',
    description: 'Optional monitoring, patching, backup coordination, and operating support for teams that need uptime without extra overhead.',
  },
  {
    title: 'Flexible Scaling',
    description: 'Provision environments for app hosting, business systems, development stacks, and regional expansion as demand grows.',
  },
];

const useCases = [
  'Business websites and portals',
  'ERP and CRM deployments',
  'SaaS application hosting',
  'Development and staging environments',
  'Private databases and internal tools',
  'Reseller and multi-client infrastructure',
];

const plans = [
  {
    name: 'Starter VPS',
    idealFor: 'Small business sites and lightweight application hosting.',
    specs: ['1 vCPU+', '2 GB+ RAM', '40 GB+ NVMe storage', '1 TB+ bandwidth'],
  },
  {
    name: 'Business VPS',
    idealFor: 'Growing platforms, CRM systems, and multi-service workloads.',
    specs: ['2-4 vCPU', '4-8 GB RAM', '80-160 GB NVMe storage', 'Priority support options'],
  },
  {
    name: 'Enterprise VPS',
    idealFor: 'High-availability environments with custom security and scaling requirements.',
    specs: ['Custom compute sizing', 'Advanced backup strategy', 'Managed hardening', 'Private networking options'],
  },
];

export default function VPSHostingPage() {
  return (
    <>
      <PageHero
        eyebrow="VPS Hosting"
        title="Secure, scalable virtual servers built for modern business workloads"
        description="Aznix VPS Hosting gives teams dependable infrastructure for websites, applications, internal systems, and client environments with room to scale as operations grow."
      />

      <AnimatedSection className="px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Infrastructure"
            title="Hosting built around speed, control, and operational confidence"
            description="We combine flexible virtual server resources with business-ready support so teams can launch faster and run with more confidence."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {hostingFeatures.map((feature) => (
              <article key={feature.title} className="rounded-[2rem] border border-slate-200 bg-white p-8">
                <h2 className="text-2xl font-semibold text-slate-950">{feature.title}</h2>
                <p className="mt-4 text-base leading-7 text-slate-700">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <SectionHeading
              eyebrow="Use Cases"
              title="Designed for teams that need more than shared hosting"
              description="Whether you are hosting customer-facing products or internal infrastructure, VPS gives you the isolation and flexibility to run serious workloads."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Pricing"
            title="Choose a VPS path and request a tailored quote"
            description="Every deployment can be sized around your traffic, software stack, support level, and security requirements."
            align="center"
          />
          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className="rounded-[2rem] border border-slate-200 bg-white p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-300">{plan.name}</p>
                <p className="mt-4 text-base leading-7 text-slate-700">{plan.idealFor}</p>
                <div className="mt-6 space-y-3">
                  {plan.specs.map((spec) => (
                    <div
                      key={spec}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                    >
                      {spec}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-300"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        eyebrow="Need Custom Hosting?"
        title="Talk with Aznix about the right VPS setup for your workload"
        description="Share your traffic, applications, and support needs, and we will shape a hosting package around the infrastructure you actually need."
        buttonLabel="Get a Quote"
        buttonHref="/contact"
      />
    </>
  );
}

