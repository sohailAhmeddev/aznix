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
      className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-xl"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-400/30 bg-brand-400/10 text-brand-300 transition group-hover:shadow-lg">
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-6">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-600">{unit.sector}</p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-950">{unit.name}</h3>
        <p className="mt-4 text-base leading-7 text-slate-700">{unit.description}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {unit.services.map((service) => (
          <span
            key={service}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700"
          >
            {service}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

