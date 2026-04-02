import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services_page");

  const techStack = [
    "Microsoft Fabric", "Azure", "Databricks", "dbt", "Power BI",
    "Python", "Copilot Studio", "OpenAI", "SAP", "Snowflake",
  ];

  return (
    <>
      <PageHero label={t("hero_label")} title={t("hero_title")} description={t("hero_desc")} />

      {/* Featured: Agentic AI */}
      <section className="py-20 px-8 bg-surface-container-low">
        <div className="max-w-[2560px] mx-auto">
          <div className="glass-card p-12 rounded-lg border border-outline-variant/10 flex flex-col lg:flex-row gap-12 overflow-hidden relative min-h-[400px]">
            <div className="relative z-10 lg:w-2/3">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
              </div>
              <h2 className="text-4xl font-headline font-bold mb-6">{t("ai_featured_title")}</h2>
              <p className="text-xl text-on-surface/60 leading-relaxed mb-8">{t("ai_featured_desc")}</p>
              <div className="flex flex-wrap gap-3">
                {[t("ai_pill_1"), t("ai_pill_2"), t("ai_pill_3"), t("ai_pill_4"), t("ai_pill_5")].map((pill) => (
                  <span key={pill} className="px-4 py-2 bg-surface-container-highest rounded text-sm text-primary font-medium">{pill}</span>
                ))}
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="absolute right-0 top-0 w-1/2 h-full object-cover mix-blend-overlay opacity-20 hidden lg:block"
              style={{ maskImage: "linear-gradient(to left, black, transparent)" }}
              alt="AI visualization"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJEuPGaD74Mol-c-eeF42jwJw50fAEBEoKlnYNOM04YItCCukr38PfGASZv20ZB9pUj-ijuDMG3AcIDyVjnvQejhKPURZTQQrudpyC5ytUX6DLvCC7KDGDcEkiO9ydvP6ZZ67qnsndNVaJpoEYNSk_1DoDZZF1D0oj0qIL22bGY5cXusg7PTR16xWYfHRzDEf9YSFu40YXG_0xG89AkcqDhPdP-rPN47k7H4gX66rc244y4lMGruWBcUdPMM5mLcAuB2dPvW8xXv4g"
            />
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-20 px-8">
        <div className="max-w-[2560px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: "architecture", title: t("platform_title"), desc: t("platform_desc") },
            { icon: "monitoring", title: t("ae_title"), desc: t("ae_desc") },
            { icon: "settings_input_component", title: t("integration_title"), desc: t("integration_desc") },
            { icon: "eco", title: t("sustainability_title"), desc: t("sustainability_desc") },
          ].map((service) => (
            <div key={service.icon} className="glass-card p-10 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">{service.icon}</span>
              <h3 className="text-2xl font-headline font-bold mb-4">{service.title}</h3>
              <p className="text-on-surface/60 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-8 bg-surface-container-lowest">
        <div className="max-w-[2560px] mx-auto text-center">
          <h2 className="text-3xl font-headline font-bold mb-12">{t("tech_title")}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech) => (
              <div key={tech} className="px-6 py-3 glass-card rounded-lg border border-outline-variant/10 text-on-surface/70 font-medium text-sm">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t("cta_title")} description={t("cta_desc")} buttonText={t("cta_button")} />
    </>
  );
}
