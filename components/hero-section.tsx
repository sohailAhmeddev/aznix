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
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="hero-orb absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 1, 0.35, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
            Technology ecosystem. Venture builder. Digital infrastructure group.
          </div>
          <h1 className="mt-8 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
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
                    ? 'border border-white/15 bg-white/5 text-white hover:border-brand-400/50 hover:bg-white/10'
                    : 'bg-brand-400 text-slate-950 shadow-[0_0_40px_rgba(251,191,36,0.18)] hover:bg-brand-300',
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
          className="mt-16 grid gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:grid-cols-[1.4fr_0.9fr]"
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/8 via-white/[0.03] to-transparent p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-brand-300">Holding Thesis</p>
            <p className="mt-5 max-w-2xl text-2xl leading-10 text-white">
              We build the systems powering businesses, combining capital, product execution, and digital infrastructure into one operating model.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ['Infrastructure-first', 'SaaS, fintech, blockchain, and enterprise systems'],
              ['Operator mindset', 'Built to own and scale ventures over the long term'],
            ].map(([label, body]) => (
              <div key={label} className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">{label}</p>
                <p className="mt-4 text-base leading-7 text-slate-200">{body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
