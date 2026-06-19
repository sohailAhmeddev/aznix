'use client';

import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = HTMLMotionProps<'section'> & {
  children: ReactNode;
  delay?: number;
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.21, 1, 0.35, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
