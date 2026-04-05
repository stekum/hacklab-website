import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { HeroSVG } from "@/components/HeroSVG";
import { TrustLogos } from "@/components/CompanyLogos";
import { AnimatedCounter, FadeIn, ScaleIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations";

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
      {/* Hero Section — full bleed, centered, SVG behind text */}
      <section className="relative pt-32 pb-40 px-8 min-h-screen flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 animated-gradient" />
        {/* Hero background image — cinematic data command center */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt=""
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEj3_O-z_rPqMpBhDRacBgqizNV9iiwYJvZjD4kBJqbpB3TxLPcEG_6lMyw_2afaouEbecCOkw1fDnpFA-ZKx9k4NS0NyNzRjAyfWbPOXMvF1lPi4Yo-0iqYcjEzWwHhdEMAEGhsANhict_dEICMvb8lZ9xPMvwa7orZCx8dtJ_0n_fXN9qf1fuVImOiufakO0v6Dlbcgp7CBKTPMiwaA3XO54zXOaUk7UviyP2kbzjSK0gjhgoEp7wS4MJ_XK-mh3lh3SpXQzbGPP"
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-40" />
        {/* SVG Data Mesh — BEHIND text, covering full width */}
        <div className="absolute inset-0 opacity-60">
          <HeroSVG />
        </div>
        {/* Large gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00D4AA]/8 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#41EEC2]/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[#006b55]/10 blur-[100px] rounded-full" />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#071325] to-transparent" />

        {/* Content — centered, overlaid on top of everything */}
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00D4AA]/10 border border-[#00D4AA]/20 rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-primary glow-pulse" />
              {t("hero.badge")}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-extrabold tracking-tighter leading-[0.9] mb-8">
              {t("hero.title_1")}{" "}
              <span className="gradient-text">{t("hero.title_2")}</span>
              <br />
              {t("hero.title_3")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-[#d7e3fc]/60 font-body leading-relaxed max-w-2xl mx-auto mb-12">
              {t("hero.description")}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/contact"
                className="gradient-cta text-[#002118] px-10 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all"
              >
                {t("hero.cta_primary")}
              </Link>
              <Link
                href="/cases"
                className="border border-[#3b4a44]/40 hover:border-[#00D4AA]/30 hover:bg-[#00D4AA]/5 text-[#d7e3fc] px-10 py-4 rounded-lg font-bold text-lg transition-all"
              >
                {t("hero.cta_secondary")}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem Statement — tight, asymmetric 1/3 + 2/3 */}
      <section className="bg-surface-container-lowest py-20 px-8 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <FadeIn className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-headline font-bold leading-[0.9] tracking-tighter">
              {t("problem.title")}
            </h2>
            <div className="w-20 h-1 bg-primary mt-6" />
          </FadeIn>
          <FadeIn delay={0.2} className="md:w-2/3">
            <p className="text-2xl text-[#d7e3fc]/50 font-body leading-relaxed">
              {t("problem.description")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Value Pillars — cards with proper spacing */}
      <section className="py-32 px-8 relative">
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "bolt", title: t("pillars.ai_title"), desc: t("pillars.ai_desc") },
              { icon: "layers", title: t("pillars.fabric_title"), desc: t("pillars.fabric_desc") },
              { icon: "query_stats", title: t("pillars.analytics_title"), desc: t("pillars.analytics_desc") },
            ].map((pillar) => (
              <StaggerItem key={pillar.icon}>
                <div className="glass-card p-12 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all group h-full">
                  <div className="w-16 h-16 bg-primary/15 rounded-lg flex items-center justify-center mb-8 transition-colors group-hover:bg-primary/25">
                    <span className="material-symbols-outlined text-4xl text-primary group-hover:text-[#41EEC2] transition-colors">
                      {pillar.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold mb-4 tracking-tight">{pillar.title}</h3>
                  <p className="text-[#d7e3fc]/50 leading-relaxed">{pillar.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Overview — 12-column grid with asymmetric card sizes */}
      <section className="py-32 px-8 bg-surface-container-low relative">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4">
                {t("services_section.label")}
              </span>
              <h2 className="text-5xl md:text-6xl font-headline font-bold leading-[0.9] tracking-tighter">
                {t("services_section.title_1")}{" "}
                <span className="text-[#d7e3fc]/30">{t("services_section.title_2")}</span>
              </h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Hero Service Card */}
            <StaggerItem className="md:col-span-8">
              <div className="glass-card p-12 rounded-lg border border-outline-variant/10 hover:border-primary/30 flex flex-col justify-between min-h-[500px] overflow-hidden relative transition-all group">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-12 transition-colors group-hover:bg-primary/30">
                    <span className="material-symbols-outlined text-primary text-3xl group-hover:text-[#41EEC2] transition-colors">psychology</span>
                  </div>
                  <h3 className="text-4xl font-headline font-bold mb-6 tracking-tight">
                    {t("services_section.ai_title")}
                  </h3>
                  <p className="text-xl text-[#d7e3fc]/50 max-w-xl leading-relaxed">
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
                  alt="Neural network brain visualization"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJV7XSG2naM3lDnXVUb2087QI8CJZT670uu-0Lf3QH0WxJaZX0KYWxLXkMFg02iCXUQLJorgzxb0Kp1pxotgUT01LsTuC-XR8T5eRmV616W5i2AY17MZs0NzSZajobJ7VJafpX4-m5bN0wVxpA10_WAXX1io6IbS5k4-xphFrmVPlQeoljmNnOxc6U6Oiz-Taa0cN1_qgOCFJZ2QBJD7r4TxhMy6BTqHukQTKVRNT8Nb3yipwbAPdTi34ZzlR-A7UYkDCDqOwqGJ1r"
                />
              </div>
            </StaggerItem>

            <StaggerItem className="md:col-span-4">
              <div className="glass-card p-10 rounded-lg border border-outline-variant/10 hover:border-primary/30 h-full transition-all group">
                <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center mb-8 transition-colors group-hover:bg-primary/25">
                  <span className="material-symbols-outlined text-primary text-2xl group-hover:text-[#41EEC2] transition-colors">architecture</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 tracking-tight">{t("services_section.platform_title")}</h3>
                <p className="text-[#d7e3fc]/50 mb-8">{t("services_section.platform_desc")}</p>
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
              <div className="glass-card p-10 rounded-lg border border-outline-variant/10 hover:border-primary/30 h-full transition-all group">
                <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center mb-8 transition-colors group-hover:bg-primary/25">
                  <span className="material-symbols-outlined text-primary text-2xl group-hover:text-[#41EEC2] transition-colors">settings_input_component</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 tracking-tight">{t("services_section.integration_title")}</h3>
                <p className="text-[#d7e3fc]/50 mb-8">{t("services_section.integration_desc")}</p>
                <ul className="space-y-3 text-sm font-medium text-[#d7e3fc]/70">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" />{t("services_section.integration_item_1")}</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" />{t("services_section.integration_item_2")}</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" />{t("services_section.integration_item_3")}</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem className="md:col-span-4">
              <div className="glass-card p-10 rounded-lg border border-outline-variant/10 hover:border-primary/30 h-full transition-all group">
                <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center mb-8 transition-colors group-hover:bg-primary/25">
                  <span className="material-symbols-outlined text-primary text-2xl group-hover:text-[#41EEC2] transition-colors">eco</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 tracking-tight">{t("services_section.sustainability_title")}</h3>
                <p className="text-[#d7e3fc]/50 mb-8">{t("services_section.sustainability_desc")}</p>
                <ul className="space-y-3 text-sm font-medium text-[#d7e3fc]/70">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" />{t("services_section.sustainability_item_1")}</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" />{t("services_section.sustainability_item_2")}</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" />{t("services_section.sustainability_item_3")}</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem className="md:col-span-4">
              <div className="glass-card p-10 rounded-lg border border-outline-variant/10 hover:border-primary/30 h-full transition-all group">
                <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center mb-8 transition-colors group-hover:bg-primary/25">
                  <span className="material-symbols-outlined text-primary text-2xl group-hover:text-[#41EEC2] transition-colors">monitoring</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 tracking-tight">{t("services_section.ae_title")}</h3>
                <p className="text-[#d7e3fc]/50 mb-8">{t("services_section.ae_desc")}</p>
                <ul className="space-y-3 text-sm font-medium text-[#d7e3fc]/70">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" />{t("services_section.ae_item_1")}</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" />{t("services_section.ae_item_2")}</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" />{t("services_section.ae_item_3")}</li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Case Studies — full-width image + overlaid text */}
      <section className="py-32 px-8 overflow-hidden relative">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-headline font-bold mb-20 tracking-tighter">{t("cases_section.title")}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
            <SlideIn direction="left" className="lg:col-span-7">
              <div className="glass-card p-1 rounded-2xl border border-outline-variant/10 hover:border-primary/30 overflow-hidden group transition-all">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full aspect-video object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  alt="Automotive factory production line"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQxnccQDNBx0PFxnKQkP1ebsdveJ2ngWPJevXA2ZAfKYmqTv1HLtX80P7Q2LtzgbnqbNDsTDM6mlhtoUW1TUvjQwvPu_M5tWhahCBNk2TFQK6G_nq0H23Dzr--cIhPO-Z5F2TFyEpoowBG55Fz0GqM0_QhCbm81mQHyWVSrzme6FPfJDF9QmGRq3n_cNg4-AXDfpyXOWNwPJC9eJpZAzn-U6mI0IyPf_4oL74PkfRGDSOS0rAml7OeWDfg5yslqk-4NbprE0N7BTSv"
                />
              </div>
            </SlideIn>
            <SlideIn direction="right" className="lg:col-span-5">
              <div className="space-y-8">
                <div>
                  <div className="text-primary font-bold text-sm tracking-widest uppercase mb-2">
                    {t("cases_section.featured_label")}
                  </div>
                  <h3 className="text-4xl font-headline font-bold mb-4 tracking-tight">
                    {t("cases_section.schaeffler_title")}
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-surface-container rounded-lg border-l-4 border-primary">
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-primary">
                      {t("cases_section.challenge_label")}
                    </h4>
                    <p className="text-[#d7e3fc]/60">{t("cases_section.challenge_text")}</p>
                  </div>
                  <div className="p-6 bg-surface-container rounded-lg border-l-4 border-secondary">
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-secondary">
                      {t("cases_section.approach_label")}
                    </h4>
                    <p className="text-[#d7e3fc]/60">{t("cases_section.approach_text")}</p>
                  </div>
                  <div className="p-6 bg-surface-container rounded-lg border-l-4 border-on-surface-variant">
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-on-surface-variant">
                      {t("cases_section.result_label")}
                    </h4>
                    <p className="text-[#d7e3fc]/60">{t("cases_section.result_text")}</p>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>

          {/* Metrics — BIG numbers with AnimatedCounter */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 text-center">
            {[
              { target: 50, suffix: "+", label: t("metrics.projects") },
              { target: 15, suffix: "+", label: t("metrics.years") },
              { target: 3, suffix: "", label: t("metrics.continents") },
            ].map((metric) => (
              <ScaleIn key={metric.label}>
                <div className="p-12 glass-card rounded-lg border border-outline-variant/5 hover:border-primary/30 transition-all">
                  <div className="text-7xl md:text-8xl font-headline font-black gradient-text mb-2">
                    <AnimatedCounter target={metric.target} suffix={metric.suffix} />
                  </div>
                  <div className="text-[#d7e3fc]/40 uppercase tracking-widest text-xs font-bold">{metric.label}</div>
                </div>
              </ScaleIn>
            ))}
          </StaggerContainer>

          {/* Trust Logos */}
          <FadeIn>
            <TrustLogos />
          </FadeIn>
        </div>
      </section>

      {/* Why HackLab — three value props */}
      <section className="py-32 px-8 bg-surface-container-lowest relative">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-headline font-bold mb-6 tracking-tighter">{t("why_hacklab.title")}</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: "engineering", title: t("why_hacklab.prop1_title"), desc: t("why_hacklab.prop1_desc") },
              { icon: "speed", title: t("why_hacklab.prop2_title"), desc: t("why_hacklab.prop2_desc") },
              { icon: "verified", title: t("why_hacklab.prop3_title"), desc: t("why_hacklab.prop3_desc") },
            ].map((prop) => (
              <StaggerItem key={prop.icon} className="group">
                <div className="w-20 h-20 bg-primary/15 rounded-xl flex items-center justify-center mx-auto mb-6 transition-all group-hover:bg-primary/25 group-hover:scale-110">
                  <span className="material-symbols-outlined text-4xl text-primary group-hover:text-[#41EEC2] transition-colors">{prop.icon}</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 tracking-tight">{prop.title}</h3>
                <p className="text-[#d7e3fc]/50 leading-relaxed max-w-sm mx-auto">{prop.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section — contained card with gradient border */}
      <section className="py-32 px-8 relative">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
        <FadeIn>
          <div className="max-w-[1400px] mx-auto rounded-3xl overflow-hidden relative border border-[#3b4a44]/20 hover:border-[#00D4AA]/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high to-surface-container-lowest" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full" />
            <div className="relative z-10 px-12 py-24 text-center">
              <h2 className="text-5xl md:text-6xl font-headline font-bold mb-8 leading-tight tracking-tighter">{t("cta.title")}</h2>
              <p className="text-[#d7e3fc]/50 text-xl max-w-2xl mx-auto mb-12">{t("cta.description")}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="gradient-cta text-[#002118] px-12 py-5 rounded-lg font-bold text-lg hover:brightness-110 transition-all">
                  {t("cta.primary")}
                </Link>
                <Link href="/contact" className="border border-[#3b4a44]/40 hover:border-[#00D4AA]/30 hover:bg-[#00D4AA]/5 text-[#d7e3fc] px-12 py-5 rounded-lg font-bold text-lg transition-all">
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
