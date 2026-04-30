'use client';

import { motion } from 'framer-motion';
import { iconMap } from '@/lib/icons';
import type { Industry } from '@/types/site';

type IndustryCardProps = {
  industry: Industry;
};

export function IndustryCard({ industry }: IndustryCardProps) {
  const Icon = iconMap[industry.icon];

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-brand-300">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-300">{industry.description}</p>
    </motion.article>
  );
}
