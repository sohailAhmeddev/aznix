'use client';

import { motion } from 'framer-motion';
import { iconMap } from '@/lib/icons';
import type { PartnerType } from '@/types/site';

type PartnerCardProps = {
  partner: PartnerType;
};

export function PartnerCard({ partner }: PartnerCardProps) {
  const Icon = iconMap[partner.icon];

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 text-brand-300">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-white">{partner.title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-300">{partner.description}</p>
      <ul className="mt-6 space-y-3 text-sm text-slate-300">
        {partner.highlights.map((highlight) => (
          <li key={highlight} className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
            {highlight}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
