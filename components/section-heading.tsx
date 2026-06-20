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
        <p className="type-overline font-medium text-brand-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="type-section-title mt-4">
        {title}
      </h2>
      {description ? (
        <p className="type-body-lg mt-5">{description}</p>
      ) : null}
    </div>
  );
}

