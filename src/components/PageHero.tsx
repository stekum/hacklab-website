import { FadeIn } from "@/components/animations";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
}

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 px-8 grid-overlay animated-gradient">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
            {label}
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter leading-none mb-8">
            {title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-on-surface/70 font-body leading-relaxed max-w-2xl">
            {description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
