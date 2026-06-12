import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.32em] text-brand-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif mt-4 text-3xl font-semibold italic tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

