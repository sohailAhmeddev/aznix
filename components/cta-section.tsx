import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';

type CTASectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CTASection({
  eyebrow,
  title,
  description,
  buttonLabel,
  buttonHref,
}: CTASectionProps) {
  return (
    <AnimatedSection className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.12),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 shadow-[0_25px_100px_rgba(2,6,23,0.45)] sm:p-12">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-300">{eyebrow}</p>
        <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
          </div>
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-2 self-start rounded-full bg-brand-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-300"
          >
            {buttonLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
