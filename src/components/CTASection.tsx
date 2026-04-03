import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/animations";

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
    <section className="py-32 px-8 relative">
      {/* Decorative blob */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
      <FadeIn>
        <div className="max-w-[1400px] mx-auto rounded-3xl overflow-hidden relative border border-[#3b4a44]/20 hover:border-[#00D4AA]/20 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high to-surface-container-lowest" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full" />
          <div className="relative z-10 px-12 py-24 text-center">
            <h2 className="text-5xl md:text-6xl font-headline font-bold mb-8 leading-tight tracking-tighter">
              {title}
            </h2>
            <p className="text-[#d7e3fc]/60 text-xl max-w-2xl mx-auto mb-12">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href={buttonHref as "/contact"}
                className="gradient-cta text-[#002118] px-12 py-5 rounded-lg font-bold text-lg hover:brightness-110 transition-all"
              >
                {buttonText}
              </Link>
              <Link
                href="/contact"
                className="border border-[#3b4a44]/40 hover:border-[#00D4AA]/30 hover:bg-[#00D4AA]/5 text-[#d7e3fc] px-12 py-5 rounded-lg font-bold text-lg transition-all"
              >
                Projekt anfragen
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
