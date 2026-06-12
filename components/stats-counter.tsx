'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Stat } from '@/types/site';

type StatsCounterProps = {
  stat: Stat;
};

export function StatsCounter({ stat }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
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
      viewport={{ once: true }}
      className="rounded-[1.75rem] border border-slate-200 bg-white p-7 "
    >
      <p className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        {stat.prefix}
        {count}
        {stat.suffix}
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.28em] text-slate-600">{stat.label}</p>
    </motion.div>
  );
}

