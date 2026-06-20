'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Stat } from '@/types/site';

type StatsCounterProps = {
  stat: Stat;
  illustration: string;
};

export function StatsCounter({ stat, illustration }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.45 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400;
    const startedAt = performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - startedAt) / duration, 1);
      setCount(Math.round(progress * stat.value));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.21, 1, 0.35, 1] }}
      className="rounded-[1.8rem] border border-slate-200/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,0.84))] p-6 shadow-[0_18px_45px_rgba(148,163,184,0.14)] transition duration-300 hover:-translate-y-1 hover:border-brand-200/70 hover:shadow-[0_26px_65px_rgba(148,163,184,0.2)]"
    >
      <div className="flex items-center gap-5">
        <div className="relative shrink-0">
          <div className="absolute inset-2 rounded-full bg-brand-100/35 blur-2xl" />
          <div
            className="relative"
            style={{
              maskImage:
                'radial-gradient(circle at center, black 62%, rgba(0,0,0,0.82) 80%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(circle at center, black 62%, rgba(0,0,0,0.82) 80%, transparent 100%)',
            }}
          >
            <Image
              src={illustration}
              alt=""
              width={1254}
              height={1254}
              className="h-20 w-20 object-contain opacity-[0.96]"
            />
          </div>
        </div>
        <div>
          <p className="text-5xl font-semibold tracking-[-0.05em] text-slate-950">
            {stat.prefix}
            {count}
            {stat.suffix}
          </p>
          <p className="type-label mt-3">{stat.label}</p>
        </div>
      </div>
    </motion.div>
  );
}
