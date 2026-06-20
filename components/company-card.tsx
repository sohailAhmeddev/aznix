"use client";

import { motion } from "framer-motion";
import { iconMap } from "@/lib/icons";
import type { EcosystemUnit } from "@/types/site";

type CompanyCardProps = {
  unit: EcosystemUnit;
};

export function CompanyCard({ unit }: CompanyCardProps) {
  const Icon = iconMap[unit.icon];

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="group flex h-full flex-col rounded-[1rem] border border-slate-200 bg-white p-4 shadow-xl"
    >
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-400/30 bg-brand-400/10 text-brand-300 transition group-hover:shadow-lg">
          <Icon className="h-3.5 w-3.5" />
        </div>
        <div className="">
          <h3 className="type-card-title mt-2">
            {unit.name}
          </h3>
          <p className="type-label">
            {unit.sector}
          </p>
        </div>
      </div>
      <div className="mt-2 flex-1">
        {/* <p className="text-xs uppercase tracking-[0.25em] text-slate-600">{unit.sector}</p>
        <h3 className="mt-2 text-xl font-semibold text-slate-950">{unit.name}</h3> */}
        <p className="type-body mt-1">
          {unit.description}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {unit.services.map((service) => (
          <span
            key={service}
            className="type-chip rounded-full border border-slate-200 bg-white px-2 py-1 text-slate-700"
          >
            {service}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
