import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { HeroSection } from '@/components/hero-section';
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
    description:
      'NVMe-backed virtual servers, dedicated resource allocation, and low-latency deployment for critical workloads.',
    image: '/assests/14.png',
  },
  {
    title: 'Managed Reliability',
    description:
      'Coordinated monitoring, patching, backup routines, and responsive support for teams that need uptime without operational drag.',
    image: '/assests/20.png',
  },
  {
    title: 'Flexible Scaling',
    description:
      'Provision environments for app hosting, business systems, development stacks, and regional expansion as demand grows.',
    image: '/assests/24.png',
  },
];

const workloads = [
  {
    title: 'Business websites and portals',
    icon: '/assests/21.png',
    align: 'left',
  },
  {
    title: 'ERP and CRM deployment hosting',
    icon: '/assests/23.png',
    align: 'right',
  },
  {
    title: 'Private compute and internal tools',
    icon: '/assests/22.png',
    align: 'left',
  },
  {
    title: 'Development and staging environments',
    icon: '/assests/24.png',
    align: 'right',
  },
];

const plans = [
  {
    name: 'Starter VPS',
    image: '/assests/17.png',
    specs: ['1 vCPU minimum', '2 GB RAM', '40 GB NVMe storage'],
  },
  {
    name: 'Business VPS',
    image: '/assests/18.png',
    specs: ['2 to 4 vCPUs', '4 to 8 GB RAM', '80 to 160 GB NVMe'],
    featured: true,
  },
  {
    name: 'Enterprise VPS',
    image: '/assests/19.png',
    specs: ['Custom compute sizing', 'Managed hardening', 'Private networking options'],
  },
];

export default function VPSHostingPage() {
  return (
    <div className="overflow-hidden ">
      <HeroSection
        eyebrow="VPS Hosting"
        title="Secure, scalable virtual servers built for modern business workloads"
        subtitle="Aznix VPS Hosting gives teams dependable infrastructure for websites, applications, internal systems, and client environments with room to scale as operations grow."
        badgeText="Managed VPS. Business infrastructure. Scalable virtual servers."
        backgroundImage="/assests/12.png"
        actions={[
          { label: 'Get a Quote', href: '/contact', variant: 'primary' },
          { label: 'Talk to Sales', href: '/contact', variant: 'secondary' },
        ]}
      />

      <AnimatedSection className="px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="type-overline text-brand-300">Infrastructure</p>
            <h2 className="type-section-title mt-4 max-w-2xl text-slate-900">
              Hosting built around speed, control, and operational confidence
            </h2>
            <p className="type-body-lg mt-5 max-w-2xl text-slate-600">
              We combine flexible virtual server resources with business-ready support so teams can
              launch faster and run with more confidence.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {hostingFeatures.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[1.9rem] border border-white/70 bg-white/90 p-6 shadow-[0_20px_55px_rgba(148,163,184,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(148,163,184,0.24)]"
              >
                <Image
                  src={feature.image}
                  alt=""
                  width={1254}
                  height={1254}
                  className="h-16 w-16 object-contain"
                />
                <h3 className="type-card-title-lg mt-5 text-slate-800">
                  {feature.title}
                </h3>
                <p className="type-body-lg mt-4 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="type-overline text-brand-300">Use Cases</p>
            <h2 className="type-section-title mt-5 text-slate-900">
              Designed for teams beyond shared hosting
            </h2>
          </div>

          <div className="relative mt-14">
            {/* <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              viewBox="0 0 1200 520"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="vps-pulse-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(251,191,36,0.14)" />
                  <stop offset="48%" stopColor="rgba(251,191,36,1)" />
                  <stop offset="100%" stopColor="rgba(251,191,36,0.38)" />
                </linearGradient>
                <filter id="vps-pulse-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {[
                'M 440 128 L 405 128 L 388 128 L 372 110 L 348 110',
                'M 440 382 L 405 382 L 388 382 L 372 400 L 348 400',
                'M 760 128 L 795 128 L 812 128 L 828 110 L 852 110',
                'M 760 382 L 795 382 L 812 382 L 828 400 L 852 400',
              ].map((d) => (
                <g key={d}>
                  <path d={d} stroke="rgba(251,191,36,0.14)" strokeWidth="8" strokeLinecap="round" />
                  <path
                    d={d}
                    stroke="url(#vps-pulse-line)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="14 10"
                    filter="url(#vps-pulse-glow)"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="48;0"
                      dur="1.6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              ))}

              {[
                { cx: 348, cy: 110 },
                { cx: 348, cy: 400 },
                { cx: 852, cy: 110 },
                { cx: 852, cy: 400 },
              ].map((dot) => (
                <g key={`${dot.cx}-${dot.cy}`}>
                  <circle cx={dot.cx} cy={dot.cy} r="9" fill="rgba(255,255,255,0.95)" />
                  <circle cx={dot.cx} cy={dot.cy} r="5.5" fill="rgba(251,191,36,0.95)">
                    <animate attributeName="r" values="5.5;7;5.5" dur="1.6s" repeatCount="indefinite" />
                    <animate
                      attributeName="opacity"
                      values="0.7;1;0.7"
                      dur="1.6s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))}
            </svg> */}

            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[0.95fr_1.1fr_0.95fr]">
              <div className="grid gap-5">
                {workloads
                  .filter((item) => item.align === 'left')
                  .map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 rounded-[1.6rem] border border-white/70 bg-white p-5 shadow-[0_18px_45px_rgba(148,163,184,0.16)]"
                    >
                      <Image src={item.icon} alt="" width={1254} height={1254} className="h-12 w-12 object-contain" />
                      <p className="type-card-title max-w-[14rem]">{item.title}</p>
                    </div>
                  ))}
              </div>

              <div className="relative mx-auto w-full max-w-[30rem]">
                <div className="absolute inset-6 rounded-full bg-brand-100/50 blur-3xl" />
                <Image
                  src="/assests/20.png"
                  alt="Central processor illustration representing dedicated hosting architecture"
                  width={1254}
                  height={1254}
                  className="relative z-10 h-auto w-full object-contain"
                />
              </div>

              <div className="grid gap-5">
                {workloads
                  .filter((item) => item.align === 'right')
                  .map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 rounded-[1.6rem] border border-white/70 bg-white p-5 shadow-[0_18px_45px_rgba(148,163,184,0.16)]"
                    >
                      <Image src={item.icon} alt="" width={1254} height={1254} className="h-12 w-12 object-contain" />
                      <p className="type-card-title max-w-[14rem]">{item.title}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="type-overline text-brand-300">Pricing</p>
            <p className="type-body-lg !text-lg font-bold mx-auto mt-4 max-w-2xl italic font-serif">
              Choose a deployment path, then let us tailor the exact sizing, support level, and
              security requirements around your workload.
            </p>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[2rem] border p-7 shadow-[0_20px_55px_rgba(148,163,184,0.18)] transition duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? 'border-brand-200 bg-white '
                    : 'border-white/70 bg-white/92'
                }`}
              >
                <Image src={plan.image} alt="" width={1254} height={1254} className="h-20 w-20 object-contain mx-auto" />
                <h3 className="type-card-title-lg mt-5 text-slate-800">{plan.name}</h3>
                <div className="mt-6 space-y-3">
                  {plan.specs.map((spec) => (
                    <div
                      key={spec}
                      className="type-button rounded-full border border-slate-200/80 bg-white/80 px-4 py-2.5 text-slate-700"
                    >
                      {spec}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="type-button mt-7 inline-flex items-center gap-2 rounded-full bg-brand-400 px-5 py-3 text-slate-950 transition hover:bg-brand-300"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/92 shadow-[0_30px_80px_rgba(148,163,184,0.24)]">
          <div className="grid items-center gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
            <div className="max-w-2xl">
              <p className="type-overline text-brand-300">Need Custom Hosting?</p>
              <h2 className="type-section-title mt-4 max-w-xl not-italic text-slate-900">
                Talk with Aznix about the right VPS setup for your workload
              </h2>
              <p className="type-body-lg mt-5 max-w-xl text-slate-600">
                Share your traffic, applications, compliance needs, and support expectations, and we
                will shape a hosting package around the infrastructure you actually need.
              </p>
              <Link
                href="/contact"
                className="type-button mt-8 inline-flex items-center gap-2 rounded-full bg-brand-400 px-6 py-3 text-slate-950 transition hover:bg-brand-300"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative mx-auto w-full max-w-[28rem]">
              <div className="absolute inset-x-12 bottom-8 top-16 rounded-full bg-brand-100/50 blur-3xl" />
              <Image
                src="/assests/13.png"
                alt="Managed hosting support illustration"
                width={1448}
                height={1086}
                className="relative z-10 h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
