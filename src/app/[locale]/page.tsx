import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { HeroSVG } from "@/components/HeroSVG";
import { FadeIn, StaggerContainer, StaggerItem, SlideIn, ScaleIn } from "@/components/animations";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-8 min-h-screen flex items-center overflow-hidden grid-overlay animated-gradient">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-variant/30 rounded text-primary text-xs font-bold tracking-[0.2em] uppercase mb-8">
                <span className="w-2 h-2 rounded-full bg-primary glow-pulse" />
                {t("hero.badge")}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-none mb-8">
                {t("hero.title_1")}{" "}
                <span className="gradient-text">{t("hero.title_2")}</span>{" "}
                {t("hero.title_3")}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-on-surface/70 font-body leading-relaxed max-w-2xl mb-12">
                {t("hero.description")}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-6">
                <Link
                  href="/contact"
                  className="gradient-cta text-on-primary-fixed px-10 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-[0_20px_40px_-10px_rgba(0,212,170,0.3)]"
                >
                  {t("hero.cta_primary")}
                </Link>
                <Link
                  href="/cases"
                  className="border border-outline-variant hover:bg-surface-variant/20 text-on-surface px-10 py-4 rounded-lg font-bold text-lg transition-all"
                >
                  {t("hero.cta_secondary")}
                </Link>
              </div>
            </FadeIn>
          </div>
          <HeroSVG />
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-surface-container-lowest py-24 px-8 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <FadeIn className="md:w-1/3">
            <h2 className="text-3xl font-headline font-bold leading-tight">
              {t("problem.title")}
            </h2>
            <div className="w-20 h-1 bg-primary mt-6" />
          </FadeIn>
          <FadeIn delay={0.2} className="md:w-2/3">
            <p className="text-2xl text-on-surface/60 font-body leading-relaxed">
              {t("problem.description")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "bolt", title: t("pillars.ai_title"), desc: t("pillars.ai_desc") },
              { icon: "layers", title: t("pillars.fabric_title"), desc: t("pillars.fabric_desc") },
              { icon: "query_stats", title: t("pillars.analytics_title"), desc: t("pillars.analytics_desc") },
            ].map((pillar) => (
              <StaggerItem key={pillar.icon}>
                <div
                  className="glass-card p-12 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all group h-full"
                >
                  <span className="material-symbols-outlined text-5xl text-primary mb-8 block">
                    {pillar.icon}
                  </span>
                  <h3 className="text-2xl font-headline font-bold mb-4">{pillar.title}</h3>
                  <p className="text-on-surface/60 leading-relaxed">{pillar.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
                {t("services_section.label")}
              </span>
              <h2 className="text-5xl font-headline font-bold leading-none">
                {t("services_section.title_1")}{" "}
                <span className="text-on-surface/40">{t("services_section.title_2")}</span>
              </h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Hero Service Card */}
            <StaggerItem className="md:col-span-8">
              <div className="glass-card p-12 rounded-lg border border-outline-variant/10 hover:border-primary/30 flex flex-col justify-between min-h-[500px] overflow-hidden relative transition-all">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-12">
                    <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                  </div>
                  <h3 className="text-4xl font-headline font-bold mb-6">
                    {t("services_section.ai_title")}
                  </h3>
                  <p className="text-xl text-on-surface/60 max-w-xl leading-relaxed">
                    {t("services_section.ai_desc")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 z-10 mt-12">
                  {[t("services_section.ai_pill_1"), t("services_section.ai_pill_2"), t("services_section.ai_pill_3")].map((pill) => (
                    <span key={pill} className="px-4 py-2 bg-surface-container-highest rounded text-sm text-primary font-medium">
                      {pill}
                    </span>
                  ))}
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute right-0 bottom-0 w-2/3 h-full object-cover mix-blend-overlay opacity-30"
                  style={{ maskImage: "linear-gradient(to left, black, transparent)" }}
                  alt="Abstract neural network visualization"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJEuPGaD74Mol-c-eeF42jwJw50fAEBEoKlnYNOM04YItCCukr38PfGASZv20ZB9pUj-ijuDMG3AcIDyVjnvQejhKPURZTQQrudpyC5ytUX6DLvCC7KDGDcEkiO9ydvP6ZZ67qnsndNVaJpoEYNSk_1DoDZZF1D0oj0qIL22bGY5cXusg7PTR16xWYfHRzDEf9YSFu40YXG_0xG89AkcqDhPdP-rPN47k7H4gX66rc244y4lMGruWBcUdPMM5mLcAuB2dPvW8xXv4g"
                />
              </div>
            </StaggerItem>

            <StaggerItem className="md:col-span-4">
              <div className="glass-card p-10 rounded-lg border border-outline-variant/10 hover:border-primary/30 h-full transition-all">
                <span className="material-symbols-outlined text-primary text-3xl mb-8 block">architecture</span>
                <h3 className="text-2xl font-headline font-bold mb-4">{t("services_section.platform_title")}</h3>
                <p className="text-on-surface/60 mb-8">{t("services_section.platform_desc")}</p>
                <ul className="space-y-3 text-sm font-medium">
                  {[t("services_section.platform_item_1"), t("services_section.platform_item_2"), t("services_section.platform_item_3")].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem className="md:col-span-4">
              <div className="glass-card p-10 rounded-lg border border-outline-variant/10 hover:border-primary/30 h-full transition-all">
                <span className="material-symbols-outlined text-primary text-3xl mb-8 block">settings_input_component</span>
                <h3 className="text-2xl font-headline font-bold mb-4">{t("services_section.integration_title")}</h3>
                <p className="text-on-surface/60 mb-8">{t("services_section.integration_desc")}</p>
                <ul className="space-y-3 text-sm font-medium text-on-surface/80">
                  <li className="flex items-center gap-2">{t("services_section.integration_item_1")}</li>
                  <li className="flex items-center gap-2">{t("services_section.integration_item_2")}</li>
                  <li className="flex items-center gap-2">{t("services_section.integration_item_3")}</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem className="md:col-span-4">
              <div className="glass-card p-10 rounded-lg border border-outline-variant/10 hover:border-primary/30 h-full transition-all">
                <span className="material-symbols-outlined text-primary text-3xl mb-8 block">eco</span>
                <h3 className="text-2xl font-headline font-bold mb-4">{t("services_section.sustainability_title")}</h3>
                <p className="text-on-surface/60 mb-8">{t("services_section.sustainability_desc")}</p>
                <ul className="space-y-3 text-sm font-medium text-on-surface/80">
                  <li className="flex items-center gap-2">{t("services_section.sustainability_item_1")}</li>
                  <li className="flex items-center gap-2">{t("services_section.sustainability_item_2")}</li>
                  <li className="flex items-center gap-2">{t("services_section.sustainability_item_3")}</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem className="md:col-span-4">
              <div className="glass-card p-10 rounded-lg border border-outline-variant/10 hover:border-primary/30 h-full transition-all">
                <span className="material-symbols-outlined text-primary text-3xl mb-8 block">monitoring</span>
                <h3 className="text-2xl font-headline font-bold mb-4">{t("services_section.ae_title")}</h3>
                <p className="text-on-surface/60 mb-8">{t("services_section.ae_desc")}</p>
                <ul className="space-y-3 text-sm font-medium text-on-surface/80">
                  <li className="flex items-center gap-2">{t("services_section.ae_item_1")}</li>
                  <li className="flex items-center gap-2">{t("services_section.ae_item_2")}</li>
                  <li className="flex items-center gap-2">{t("services_section.ae_item_3")}</li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl font-headline font-bold mb-20">{t("cases_section.title")}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
            <SlideIn direction="left" className="lg:col-span-7">
              <div className="glass-card p-1 rounded-2xl border border-outline-variant/10 hover:border-primary/30 overflow-hidden group transition-all">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full aspect-video object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  alt="Industrial engineering setting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuACH2d3zERucNo95670gPE7MgbJhQF5-xSvyqTTc1Z-_5emFUuSS41CgrPhBPzlFf3lCdh34gCbZiZsD7wsN6jYAopUpHN5sB8F6lGNGaSZ_lIcgT2ar5FIxCFUgfpqG0-K8tG1ncJDzkbemouK_Io1de6L0NZQmdY861AQI-1rRZQx6_zU6LHRPwaG7l6SNRxMQrVykNSen1LyQ7bO4rLwfL2V4dP88ea3PCIoYiH4PnHphkajYwRyixQOupTYp86d_-rc6beUxZNj"
                />
              </div>
            </SlideIn>
            <SlideIn direction="right" className="lg:col-span-5">
              <div className="space-y-8">
                <div>
                  <div className="text-primary font-bold text-sm tracking-widest uppercase mb-2">
                    {t("cases_section.featured_label")}
                  </div>
                  <h3 className="text-4xl font-headline font-bold mb-4">
                    {t("cases_section.schaeffler_title")}
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-surface-container rounded-lg border-l-4 border-primary">
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-primary">
                      {t("cases_section.challenge_label")}
                    </h4>
                    <p className="text-on-surface/70">{t("cases_section.challenge_text")}</p>
                  </div>
                  <div className="p-6 bg-surface-container rounded-lg border-l-4 border-secondary">
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-secondary">
                      {t("cases_section.approach_label")}
                    </h4>
                    <p className="text-on-surface/70">{t("cases_section.approach_text")}</p>
                  </div>
                  <div className="p-6 bg-surface-container rounded-lg border-l-4 border-on-surface-variant">
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-on-surface-variant">
                      {t("cases_section.result_label")}
                    </h4>
                    <p className="text-on-surface/70">{t("cases_section.result_text")}</p>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>

          {/* Metrics */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 text-center">
            {[
              { value: "50+", label: t("metrics.projects") },
              { value: "15+", label: t("metrics.years") },
              { value: "3", label: t("metrics.continents") },
            ].map((metric) => (
              <ScaleIn key={metric.label}>
                <div className="p-12 glass-card rounded-lg border border-outline-variant/5 hover:border-primary/30 transition-all">
                  <div className="text-6xl font-headline font-black gradient-text mb-2">{metric.value}</div>
                  <div className="text-on-surface/40 uppercase tracking-widest text-xs font-bold">{metric.label}</div>
                </div>
              </ScaleIn>
            ))}
          </StaggerContainer>

          {/* Trust Logos */}
          <FadeIn>
            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 grayscale opacity-40">
              <div className="text-3xl font-black font-headline tracking-tighter">SCHAEFFLER</div>
              <div className="text-3xl font-black font-headline tracking-tighter italic">EY</div>
              <div className="text-3xl font-black font-headline tracking-tighter">Microsoft</div>
              <div className="text-3xl font-black font-headline tracking-tighter">Salesforce</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-24">
            <h2 className="text-5xl font-headline font-bold mb-6">{t("how_we_work.title")}</h2>
            <p className="text-on-surface/60 max-w-2xl mx-auto text-lg">{t("how_we_work.subtitle")}</p>
          </FadeIn>
          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
              {[
                { icon: "search", label: t("how_we_work.step1_label"), title: t("how_we_work.step1_title"), desc: t("how_we_work.step1_desc") },
                { icon: "biotech", label: t("how_we_work.step2_label"), title: t("how_we_work.step2_title"), desc: t("how_we_work.step2_desc") },
                { icon: "precision_manufacturing", label: t("how_we_work.step3_label"), title: t("how_we_work.step3_title"), desc: t("how_we_work.step3_desc") },
              ].map((step) => (
                <StaggerItem key={step.icon} className="text-center group">
                  <div className="w-24 h-24 bg-surface-container rounded-lg border border-outline-variant/20 flex items-center justify-center mx-auto mb-8 transition-all group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,212,170,0.2)]">
                    <span className="material-symbols-outlined text-4xl text-primary">{step.icon}</span>
                  </div>
                  <div className="text-primary font-bold text-xs tracking-widest uppercase mb-4">{step.label}</div>
                  <h3 className="text-2xl font-headline font-bold mb-4">{step.title}</h3>
                  <p className="text-on-surface/60 leading-relaxed max-w-sm mx-auto">{step.desc}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <FadeIn>
          <div className="max-w-[1400px] mx-auto rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high to-surface-container-lowest" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full" />
            <div className="relative z-10 px-12 py-24 text-center">
              <h2 className="text-5xl md:text-6xl font-headline font-bold mb-8 leading-tight">{t("cta.title")}</h2>
              <p className="text-on-surface/60 text-xl max-w-2xl mx-auto mb-12">{t("cta.description")}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="gradient-cta text-on-primary-fixed px-12 py-5 rounded-lg font-bold text-lg hover:brightness-110 transition-all">
                  {t("cta.primary")}
                </Link>
                <Link href="/contact" className="border border-outline-variant hover:bg-surface-variant/20 text-on-surface px-12 py-5 rounded-lg font-bold text-lg transition-all">
                  {t("cta.secondary")}
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
