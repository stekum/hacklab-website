import { getTranslations, setRequestLocale } from "next-intl/server";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("industries_page");

  return (
    <>
      <PageHero label={t("hero_label")} title={t("hero_title")} description={t("hero_desc")} />

      {/* Primary Industry */}
      <section className="py-20 px-8 bg-surface-container-low">
        <div className="max-w-[2560px] mx-auto">
          <div className="glass-card p-12 rounded-lg border border-outline-variant/10 flex flex-col lg:flex-row gap-12 overflow-hidden relative">
            <div className="relative z-10 lg:w-2/3">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">directions_car</span>
              </div>
              <h2 className="text-4xl font-headline font-bold mb-6">{t("auto_title")}</h2>
              <p className="text-xl text-on-surface/60 leading-relaxed mb-8">{t("auto_desc")}</p>
              <div className="flex flex-wrap gap-3">
                {[t("auto_item_1"), t("auto_item_2"), t("auto_item_3"), t("auto_item_4")].map((item) => (
                  <span key={item} className="px-4 py-2 bg-surface-container-highest rounded text-sm text-primary font-medium">{item}</span>
                ))}
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="absolute right-0 top-0 w-1/2 h-full object-cover mix-blend-overlay opacity-20 hidden lg:block"
              style={{ maskImage: "linear-gradient(to left, black, transparent)" }}
              alt="Automotive manufacturing"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACH2d3zERucNo95670gPE7MgbJhQF5-xSvyqTTc1Z-_5emFUuSS41CgrPhBPzlFf3lCdh34gCbZiZsD7wsN6jYAopUpHN5sB8F6lGNGaSZ_lIcgT2ar5FIxCFUgfpqG0-K8tG1ncJDzkbemouK_Io1de6L0NZQmdY861AQI-1rRZQx6_zU6LHRPwaG7l6SNRxMQrVykNSen1LyQ7bO4rLwfL2V4dP88ea3PCIoYiH4PnHphkajYwRyixQOupTYp86d_-rc6beUxZNj"
            />
          </div>
        </div>
      </section>

      {/* Secondary Industries */}
      <section className="py-20 px-8">
        <div className="max-w-[2560px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: "factory", title: t("manufacturing_title"), desc: t("manufacturing_desc") },
            { icon: "account_balance", title: t("finance_title"), desc: t("finance_desc") },
          ].map((industry) => (
            <div key={industry.icon} className="glass-card p-10 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">{industry.icon}</span>
              <h3 className="text-2xl font-headline font-bold mb-4">{industry.title}</h3>
              <p className="text-on-surface/60 leading-relaxed">{industry.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-Industry */}
      <section className="py-20 px-8 bg-surface-container-lowest">
        <div className="max-w-[2560px] mx-auto">
          <h2 className="text-3xl font-headline font-bold mb-12">{t("cross_title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "eco", title: t("sustainability_title"), desc: t("sustainability_desc") },
              { icon: "cloud_sync", title: t("digital_title"), desc: t("digital_desc") },
              { icon: "smart_toy", title: t("ai_readiness_title"), desc: t("ai_readiness_desc") },
            ].map((item) => (
              <div key={item.icon} className="glass-card p-10 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block">{item.icon}</span>
                <h3 className="text-xl font-headline font-bold mb-4">{item.title}</h3>
                <p className="text-on-surface/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t("cta_title")} description={t("cta_desc")} buttonText={t("cta_button")} />
    </>
  );
}
