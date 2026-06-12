'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { TimelineEntry } from '@/types/site';

type TimelineProps = {
  items: TimelineEntry[];
};

export function Timeline({ items }: TimelineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative">
      <div className="absolute bottom-6 left-4 top-6 w-px bg-gradient-to-b from-brand-200 via-brand-300/70 to-transparent sm:left-5" />
      <div className="space-y-5">
        {items.map((item, index) => (
          <motion.article
            key={`${item.year}-${item.title}`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.65,
              delay: prefersReducedMotion ? 0 : index * 0.1,
              ease: [0.21, 1, 0.35, 1],
            }}
            whileHover={prefersReducedMotion ? {} : { y: -4 }}
            className="group relative pl-12"
          >
            <div className="absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-brand-200 bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur">
              <span className="h-3 w-3 rounded-full bg-brand-300 shadow-[0_0_18px_rgba(251,191,36,0.65)] transition-transform duration-300 group-hover:scale-125" />
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.94))] p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition duration-300 group-hover:border-brand-200/80 group-hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)] sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <span className="inline-flex w-fit rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-brand-400">
                  {item.year}
                </span>
                <span className="h-px w-full bg-gradient-to-r from-brand-100 via-slate-200 to-transparent sm:mt-4 sm:max-w-[8rem]" />
              </div>

              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-[1.35rem]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
