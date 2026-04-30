import { AnimatedSection } from '@/components/animated-section';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <AnimatedSection className="px-6 pb-12 pt-28 sm:px-8 sm:pt-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-300">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
