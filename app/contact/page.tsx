import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Blocks, Globe, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { contactDetails } from "@/app/data/site";
import { iconMap } from "@/lib/icons";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Aznix Holding for partnership, enterprise infrastructure, and ecosystem collaboration inquiries.",
  path: "/contact",
});

const contactHighlights = [
  {
    title: "Strategic Partnerships",
    description: "Focused on long-term value creation.",
    icon: Blocks,
  },
  {
    title: "Enterprise-Grade Solutions",
    description: "Built for scale, security, and reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Global Infrastructure",
    description: "Distributed systems, global reach.",
    icon: Globe,
  },
  {
    title: "Innovation-Driven",
    description: "Continuously building what's next.",
    icon: Sparkles,
  },
];

export default function ContactPage() {
  return (
    <>
      <AnimatedSection className="px-6 pb-8 pt-28 sm:px-8 sm:pt-32 lg:px-10">
        <div
          className="mx-auto max-w-7xl overflow-hidden border border-white/30 rounded-3xl min-h-screen object-[60%_center] flex items-center px-10"
          style={{
            backgroundImage: `url( "/assests/contact-page-hero-image.png")`,
          }}
        >
          <div className="relative overflow-hidden px-5 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7 rounded-3xl">
            {/* <Image
              src="/assests/contact-page-hero-image.png"
              alt="Aznix global infrastructure contact illustration"
              fill
              className="object-cover object-[68%_center]"
              priority
            /> */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,12,28,0.9)_0%,rgba(7,18,42,0.7)_44%,rgba(8,17,39,0.34)_65%,rgba(8,15,36,0.08)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.12),transparent_40%)]" />

            <div className="relative z-10 flex min-h-[20rem] items-center">
              <div className="max-w-[30rem] rounded-[1.9rem] px-6 py-4 sm:px-8 sm:py-4 lg:px-10 lg:py-5">
                <p className="type-overline text-brand-300/95">Contact</p>
                <h1 className="mt-4 max-w-[32rem] text-[2.35rem] font-semibold leading-[1.03] tracking-[-0.055em] text-white sm:text-[3rem] lg:text-[3.55rem] italic font-serif">
                  Speak with the <span className="text-brand-400">Aznix</span>{" "}
                  team
                </h1>
                <p className="mt-5 max-w-[20rem] text-[0.92rem] leading-8 text-slate-200 lg:text-xs lg:leading-7 3xl:text-sm 3xl:leading-8">
                  For venture partnerships, strategic collaboration, or
                  enterprise infrastructure discussions, connect with us here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

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
                  <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/92 p-6 shadow-[0_16px_40px_rgba(148,163,184,0.08)] transition hover:border-brand-400/30 flex gap-3 items-center bg-white">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400/10 text-brand-300 shadow-[0_10px_24px_rgba(251,191,36,0.16)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="type-label">{item.label}</p>
                      <p className="type-card-title italic font-serif mt-1 leading-4">
                        {item.value}
                      </p>
                    </div>
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
          <ContactForm className="border-slate-200/80 bg-white/95 shadow-[0_22px_55px_rgba(148,163,184,0.12)]" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 pb-20 pt-2 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 rounded-[2.2rem] border border-white/70 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(243,246,255,0.94)_45%,rgba(255,255,255,0.94)_100%)] p-7 shadow-[0_24px_70px_rgba(148,163,184,0.14)] sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {contactHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[1.5rem] px-2 py-3 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(233,238,255,0.92))] text-indigo-400 shadow-[0_14px_28px_rgba(148,163,184,0.16)]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="type-card-title mt-5">{item.title}</p>
                <p className="type-body-muted mt-3">{item.description}</p>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </>
  );
}
