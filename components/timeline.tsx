import type { TimelineEntry } from '@/types/site';

type TimelineProps = {
  items: TimelineEntry[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-8 border-l border-white/10 pl-8">
      {items.map((item) => (
        <div key={item.year} className="relative">
          <span className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full bg-brand-400 shadow-[0_0_16px_rgba(251,191,36,0.7)]" />
          <p className="text-sm uppercase tracking-[0.28em] text-brand-300">{item.year}</p>
          <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-base leading-7 text-slate-300">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
