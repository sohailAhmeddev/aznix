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
      className="rounded-[1.75rem] border border-slate-200 bg-white p-7"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-brand-300">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="type-card-title-lg mt-6">{partner.title}</h3>
      <p className="type-body mt-4">{partner.description}</p>
      <ul className="type-body mt-6 space-y-3 text-slate-700">
        {partner.highlights.map((highlight) => (
          <li key={highlight} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            {highlight}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

