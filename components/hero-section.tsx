'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { HeroAction } from '@/types/site';
import { cn } from '@/lib/utils';

type HeroSectionProps = {
  title: string;
  subtitle: string;
  actions: HeroAction[];
};

export function HeroSection({ title, subtitle, actions }: HeroSectionProps) {
  return (
    <section className="overflow-hidden pt-28 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 1, 0.35, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
            <span className="h-2 w-2 rounded-full bg-brand-400 shadow-lg" />
            Technology ecosystem. Venture builder. Digital infrastructure group.
          </div>
          <h1 className="italic font-serif mt-8 text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={cn(
                  'inline-flex min-w-48 items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition duration-300',
                  action.variant === 'secondary'
                    ? 'border border-slate-200 bg-slate-50 text-slate-950 hover:border-brand-400/50 hover:bg-slate-100'
                    : 'bg-brand-400 text-slate-950 shadow-lg hover:bg-brand-300',
                )}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-16 grid gap-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 lg:grid-cols-[1.4fr_0.9fr]"
        >
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-brand-400">Holding Thesis</p>
            <p className="mt-5 max-w-2xl text-2xl leading-10 text-slate-950">
              We build the systems powering businesses, combining capital, product execution, and digital infrastructure into one operating model.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ['Infrastructure-first', 'SaaS, fintech, blockchain, and enterprise systems'],
              ['Operator mindset', 'Built to own and scale ventures over the long term'],
            ].map(([label, body]) => (
              <div key={label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-600">{label}</p>
                <p className="mt-4 text-base leading-7 text-slate-700">{body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

