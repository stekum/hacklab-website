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
      <section className="py-24 px-8 bg-surface-container-low relative">
        <div className="absolute -top-40 left-0 w-[400px] h-[400px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8 tracking-tighter leading-[0.9]">{t("story_title")}</h2>
            <p className="text-lg text-[#d7e3fc]/60 leading-relaxed mb-6">{t("story_p1")}</p>
            <p className="text-lg text-[#d7e3fc]/60 leading-relaxed mb-8">{t("story_p2")}</p>
            {/* Tech Office image */}
            <div className="rounded-xl overflow-hidden border border-outline-variant/10 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                alt="HackLab modern tech office"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMqsAwWtV0mxwLpm2jJVBKYCgH2LCgJrI-PaMNUIwT8uxRz5-AWLsJE2xVT3dyw6dqQ66wNQYM1sJV8YM4DVF0XsDbsXI8Mb8-33twE_6WM2X30aVJgrWhSKeFx7JJqdbacCcabCaAbiS2mObKxBY_ceJfEcJBA5OeMHcgUjI5NZ8LpoZw7xf_Cy9czh3mS0_zlhzCmphHJBbmwkyWtYUzR6KdIz1Ign5s1IH63q93A6tmigmodGM84CtG9SyVaN2hcFOglo1ja9KV"
              />
            </div>
          </SlideIn>
          <SlideIn direction="right">
            {/* Founder card with gradient border */}
            <div className="glass-card p-10 rounded-lg border border-[#00D4AA]/20 hover:border-[#00D4AA]/40 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D4AA]/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00D4AA] to-[#006b55] flex items-center justify-center mb-8">
                  <span className="text-3xl font-headline font-bold text-white">SK</span>
                </div>
                <div className="text-primary font-bold text-xs tracking-widest uppercase mb-2">{t("founder_label")}</div>
                <h3 className="text-3xl font-headline font-bold mb-4 tracking-tight">{t("founder_name")}</h3>
                <p className="text-[#d7e3fc]/50 leading-relaxed">{t("founder_desc")}</p>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Gradient accent line between sections */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#00D4AA]/20 to-transparent" />

      {/* Process */}
      <section className="py-24 px-8 relative">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-16 tracking-tighter">{t("process_title")}</h2>
          </FadeIn>
          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00D4AA]/20 to-transparent" />
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
              {[
                { icon: "search", num: "01", title: t("step1_title"), desc: t("step1_desc") },
                { icon: "biotech", num: "02", title: t("step2_title"), desc: t("step2_desc") },
                { icon: "precision_manufacturing", num: "03", title: t("step3_title"), desc: t("step3_desc") },
              ].map((step) => (
                <StaggerItem key={step.num} className="text-center group">
                  <div className="w-24 h-24 bg-surface-container rounded-lg border border-outline-variant/20 flex items-center justify-center mx-auto mb-8 transition-all group-hover:border-[#00D4AA]/40 group-hover:shadow-[0_0_30px_rgba(0,212,170,0.2)]">
                    <span className="material-symbols-outlined text-4xl text-primary group-hover:text-[#41EEC2] transition-colors">{step.icon}</span>
                  </div>
                  <div className="text-primary font-bold text-xs tracking-widest uppercase mb-4">Step {step.num}</div>
                  <h3 className="text-2xl font-headline font-bold mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-[#d7e3fc]/50 leading-relaxed max-w-sm mx-auto">{step.desc}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Values — distinct icons with colored backgrounds */}
      <section className="py-24 px-8 bg-surface-container-lowest relative">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-16 tracking-tighter">{t("values_title")}</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "account_tree", title: t("value1_title"), desc: t("value1_desc"), color: "bg-[#00D4AA]/15" },
              { icon: "trending_up", title: t("value2_title"), desc: t("value2_desc"), color: "bg-[#41EEC2]/15" },
              { icon: "handshake", title: t("value3_title"), desc: t("value3_desc"), color: "bg-[#ffcea6]/15" },
            ].map((value) => (
              <StaggerItem key={value.icon}>
                <div className="glass-card p-10 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all h-full group">
                  <div className={`w-16 h-16 ${value.color} rounded-xl flex items-center justify-center mb-6 transition-all group-hover:scale-110`}>
                    <span className="material-symbols-outlined text-4xl text-primary group-hover:text-[#41EEC2] transition-colors">{value.icon}</span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold mb-4 tracking-tight">{value.title}</h3>
                  <p className="text-[#d7e3fc]/50 leading-relaxed">{value.desc}</p>
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
