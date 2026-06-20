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
      className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-300">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="type-card-title-lg">{industry.name}</h3>
      </div>
      <p className="type-body mt-4">{industry.description}</p>
    </motion.article>
  );
}

