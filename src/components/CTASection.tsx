import { Link } from "@/i18n/navigation";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
}

export function CTASection({
  title,
  description,
  buttonText,
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-32 px-8">
      <div className="max-w-[1400px] mx-auto rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high to-surface-container-lowest" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full" />
        <div className="relative z-10 px-12 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8 leading-tight">
            {title}
          </h2>
          <p className="text-on-surface/60 text-xl max-w-2xl mx-auto mb-12">
            {description}
          </p>
          <Link
            href={buttonHref as "/contact"}
            className="inline-block gradient-cta text-on-primary-fixed px-12 py-5 rounded-lg font-bold text-lg hover:brightness-110 transition-all"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
