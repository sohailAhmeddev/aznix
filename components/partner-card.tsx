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
      className="rounded-[1.9rem] border border-slate-200/80 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.99),rgba(247,249,255,0.94)_100%)] p-7 shadow-[0_18px_45px_rgba(148,163,184,0.1)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-100 bg-brand-50/70 text-brand-300 shadow-[0_10px_24px_rgba(251,191,36,0.14)]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="type-card-title-lg mt-6">{partner.title}</h3>
      <p className="type-body-muted mt-4">{partner.description}</p>
      <ul className="mt-6 space-y-3">
        {partner.highlights.map((highlight) => (
          <li key={highlight} className="type-body flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white/78 px-4 py-3 text-slate-700">
            <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-400" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

