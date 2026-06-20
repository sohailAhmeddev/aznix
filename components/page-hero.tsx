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
        <div className="max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8  sm:p-10">
          <p className="type-overline text-brand-300">{eyebrow}</p>
          <h1 className="type-page-title mt-5">
            {title}
          </h1>
          <p className="type-body-lg mt-6 max-w-3xl">{description}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

