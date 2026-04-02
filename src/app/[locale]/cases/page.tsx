import { getTranslations, setRequestLocale } from "next-intl/server";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";

export default async function CasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("cases_page");
  const tMetrics = await getTranslations("metrics");

  return (
    <>
      <PageHero label={t("hero_label")} title={t("hero_title")} description={t("hero_desc")} />

      {/* Featured: Schaeffler */}
      <section className="py-20 px-8 bg-surface-container-low">
        <div className="max-w-[2560px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="glass-card p-1 rounded-2xl border border-outline-variant/10 overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full aspect-video object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  alt="Industrial engineering setting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuACH2d3zERucNo95670gPE7MgbJhQF5-xSvyqTTc1Z-_5emFUuSS41CgrPhBPzlFf3lCdh34gCbZiZsD7wsN6jYAopUpHN5sB8F6lGNGaSZ_lIcgT2ar5FIxCFUgfpqG0-K8tG1ncJDzkbemouK_Io1de6L0NZQmdY861AQI-1rRZQx6_zU6LHRPwaG7l6SNRxMQrVykNSen1LyQ7bO4rLwfL2V4dP88ea3PCIoYiH4PnHphkajYwRyixQOupTYp86d_-rc6beUxZNj"
                />
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="text-primary font-bold text-sm tracking-widest uppercase mb-2">{t("featured_label")}</div>
                <h2 className="text-4xl font-headline font-bold mb-4">{t("schaeffler_title")}</h2>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-surface-container rounded-lg border-l-4 border-primary">
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-primary">{t("challenge_label")}</h4>
                  <p className="text-on-surface/70">{t("challenge_text")}</p>
                </div>
                <div className="p-6 bg-surface-container rounded-lg border-l-4 border-secondary">
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-secondary">{t("approach_label")}</h4>
                  <p className="text-on-surface/70">{t("approach_text")}</p>
                </div>
                <div className="p-6 bg-surface-container rounded-lg border-l-4 border-on-surface-variant">
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-on-surface-variant">{t("result_label")}</h4>
                  <p className="text-on-surface/70">{t("result_text")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Cases */}
      <section className="py-20 px-8">
        <div className="max-w-[2560px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: t("case2_title"), industry: t("case2_industry"), desc: t("case2_desc"), result: t("case2_result"), icon: "analytics" },
            { title: t("case3_title"), industry: t("case3_industry"), desc: t("case3_desc"), result: t("case3_result"), icon: "smart_toy" },
          ].map((cs) => (
            <div key={cs.icon} className="glass-card p-10 rounded-lg border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">{cs.icon}</span>
                <span className="px-3 py-1 bg-surface-container-highest rounded text-xs text-primary font-bold uppercase tracking-wider">{cs.industry}</span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">{cs.title}</h3>
              <p className="text-on-surface/60 leading-relaxed mb-6">{cs.desc}</p>
              <div className="p-4 bg-surface-container rounded-lg border-l-4 border-primary">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{t("result_label_short")}</div>
                <p className="text-on-surface/80 text-sm font-medium">{cs.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 px-8 bg-surface-container-lowest">
        <div className="max-w-[2560px] mx-auto">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">{t("metrics_title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { value: "50+", label: tMetrics("projects") },
              { value: "15+", label: tMetrics("years") },
              { value: "3", label: tMetrics("continents") },
            ].map((metric) => (
              <div key={metric.label} className="p-12 glass-card rounded-lg border border-outline-variant/5">
                <div className="text-6xl font-headline font-black gradient-text mb-2">{metric.value}</div>
                <div className="text-on-surface/40 uppercase tracking-widest text-xs font-bold">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t("cta_title")} description={t("cta_desc")} buttonText={t("cta_button")} />
    </>
  );
}
