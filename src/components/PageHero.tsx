import { FadeIn } from "@/components/animations";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
}

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 px-8 grid-overlay animated-gradient overflow-hidden">
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#071325] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
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
