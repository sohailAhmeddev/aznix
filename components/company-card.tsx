'use client';

import { motion } from 'framer-motion';
import { iconMap } from '@/lib/icons';
import type { EcosystemUnit } from '@/types/site';

type CompanyCardProps = {
  unit: EcosystemUnit;
};

export function CompanyCard({ unit }: CompanyCardProps) {
  const Icon = iconMap[unit.icon];

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.03] p-7 shadow-[0_20px_80px_rgba(15,23,42,0.35)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-400/30 bg-brand-400/10 text-brand-300 transition group-hover:shadow-[0_0_35px_rgba(251,191,36,0.18)]">
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-6">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{unit.sector}</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">{unit.name}</h3>
        <p className="mt-4 text-base leading-7 text-slate-300">{unit.description}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {unit.services.map((service) => (
          <span
            key={service}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
          >
            {service}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
