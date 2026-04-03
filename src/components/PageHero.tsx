import { FadeIn } from "@/components/animations";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
}

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-44 pb-28 px-8 animated-gradient overflow-hidden">
      {/* Grid overlay — more visible */}
      <div className="absolute inset-0 grid-overlay opacity-50" />
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#071325] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[#00D4AA]/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#41EEC2]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00D4AA]/10 border border-[#00D4AA]/20 rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-primary glow-pulse" />
            {label}
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold tracking-tighter leading-[0.9] mb-8">
            {title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-[#d7e3fc]/60 font-body leading-relaxed max-w-2xl">
            {description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
