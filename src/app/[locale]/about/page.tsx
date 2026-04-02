import { getTranslations, setRequestLocale } from "next-intl/server";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about_page");
  const tCta = await getTranslations("cta");

  return (
    <>
      <PageHero label={t("hero_label")} title={t("hero_title")} description={t("hero_desc")} />

      {/* Company Story */}
      <section className="py-20 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
            <h2 className="text-4xl font-headline font-bold mb-8">{t("story_title")}</h2>
            <p className="text-lg text-on-surface/70 leading-relaxed mb-6">{t("story_p1")}</p>
            <p className="text-lg text-on-surface/70 leading-relaxed">{t("story_p2")}</p>
          </SlideIn>
          <SlideIn direction="right">
            <div className="glass-card p-10 rounded-lg border border-outline-variant/10 hover:border-primary/20">
              <div className="w-20 h-20 bg-primary/20 rounded-lg flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">person</span>
              </div>
              <div className="text-primary font-bold text-xs tracking-widest uppercase mb-2">{t("founder_label")}</div>
              <h3 className="text-3xl font-headline font-bold mb-4">{t("founder_name")}</h3>
              <p className="text-on-surface/60 leading-relaxed">{t("founder_desc")}</p>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-headline font-bold text-center mb-16">{t("process_title")}</h2>
          </FadeIn>
          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
              {[
                { icon: "search", num: "01", title: t("step1_title"), desc: t("step1_desc") },
                { icon: "biotech", num: "02", title: t("step2_title"), desc: t("step2_desc") },
                { icon: "precision_manufacturing", num: "03", title: t("step3_title"), desc: t("step3_desc") },
              ].map((step) => (
                <StaggerItem key={step.num} className="text-center group">
                  <div className="w-24 h-24 bg-surface-container rounded-lg border border-outline-variant/20 flex items-center justify-center mx-auto mb-8 transition-all group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,212,170,0.2)]">
                    <span className="material-symbols-outlined text-4xl text-primary">{step.icon}</span>
                  </div>
                  <div className="text-primary font-bold text-xs tracking-widest uppercase mb-4">Step {step.num}</div>
                  <h3 className="text-2xl font-headline font-bold mb-4">{step.title}</h3>
                  <p className="text-on-surface/60 leading-relaxed max-w-sm mx-auto">{step.desc}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-headline font-bold text-center mb-16">{t("values_title")}</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "account_tree", title: t("value1_title"), desc: t("value1_desc") },
              { icon: "trending_up", title: t("value2_title"), desc: t("value2_desc") },
              { icon: "handshake", title: t("value3_title"), desc: t("value3_desc") },
            ].map((value) => (
              <StaggerItem key={value.icon}>
                <div className="glass-card p-10 rounded-lg border border-outline-variant/10 hover:border-primary/20 transition-all h-full">
                  <span className="material-symbols-outlined text-5xl text-primary mb-6 block">{value.icon}</span>
                  <h3 className="text-2xl font-headline font-bold mb-4">{value.title}</h3>
                  <p className="text-on-surface/60 leading-relaxed">{value.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection title={tCta("title")} description={tCta("description")} buttonText={tCta("primary")} />
    </>
  );
}
