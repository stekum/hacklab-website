import { getTranslations, setRequestLocale } from "next-intl/server";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

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
      <section className="py-24 px-8 bg-surface-container-low relative">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="glass-card p-12 md:p-16 rounded-lg border border-outline-variant/10 hover:border-primary/30 flex flex-col lg:flex-row gap-12 overflow-hidden relative transition-all group">
              <div className="relative z-10 lg:w-2/3">
                <div className="w-20 h-20 bg-primary/20 rounded-xl flex items-center justify-center mb-8 transition-colors group-hover:bg-primary/30">
                  <span className="material-symbols-outlined text-primary text-4xl group-hover:text-[#41EEC2] transition-colors">directions_car</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tighter">{t("auto_title")}</h2>
                <p className="text-xl text-[#d7e3fc]/50 leading-relaxed mb-8">{t("auto_desc")}</p>
                <div className="flex flex-wrap gap-3">
                  {[t("auto_item_1"), t("auto_item_2"), t("auto_item_3"), t("auto_item_4")].map((item) => (
                    <span key={item} className="px-4 py-2 bg-surface-container-highest rounded-lg text-sm text-primary font-medium border border-[#00D4AA]/10">{item}</span>
                  ))}
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute right-0 top-0 w-1/2 h-full object-cover mix-blend-overlay opacity-30 hidden lg:block"
                style={{ maskImage: "linear-gradient(to left, black, transparent)" }}
                alt="ESG sustainability factory with green technology"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQxnccQDNBx0PFxnKQkP1ebsdveJ2ngWPJevXA2ZAfKYmqTv1HLtX80P7Q2LtzgbnqbNDsTDM6mlhtoUW1TUvjQwvPu_M5tWhahCBNk2TFQK6G_nq0H23Dzr--cIhPO-Z5F2TFyEpoowBG55Fz0GqM0_QhCbm81mQHyWVSrzme6FPfJDF9QmGRq3n_cNg4-AXDfpyXOWNwPJC9eJpZAzn-U6mI0IyPf_4oL74PkfRGDSOS0rAml7OeWDfg5yslqk-4NbprE0N7BTSv"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Secondary Industries — visual grid with images */}
      <section className="py-24 px-8 relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
        <StaggerContainer className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Manufacturing — large card */}
          <StaggerItem className="md:col-span-7">
            <div className="glass-card rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all h-full group overflow-hidden relative min-h-[400px] flex flex-col justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-30"
                alt="Analytics dashboard with data visualizations"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzq_9l5G3XEnGRhbzfJ5yTB4sTxyiwXas84uQ_L7lETYmmsCShYVyjlmPEw1J6y9nWn3y9byW30dNwK2YU87vPGRhezD7sfdTP48OceNeXAjavoXTBP5ZrTyZ4-oq9LX6CCAR44V9CvuKcuPS7Mss8YnDIZMT9K8ZAlR6KSuka2Sj8UW1yY3GiidjCw0pd_y9EOwuEw9XijvwFYyJhQ937WrbPJ7xDTO5mPW5RlDZeEYCXTkcLPbNd318NytL4TXAL9MMLsersLe8H"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071325] via-[#071325]/60 to-transparent" />
              <div className="relative z-10 p-10">
                <div className="w-16 h-16 bg-primary/15 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/25">
                  <span className="material-symbols-outlined text-primary text-3xl group-hover:text-[#41EEC2] transition-colors">factory</span>
                </div>
                <h3 className="text-3xl font-headline font-bold mb-4 tracking-tight">{t("manufacturing_title")}</h3>
                <p className="text-[#d7e3fc]/60 leading-relaxed max-w-lg">{t("manufacturing_desc")}</p>
              </div>
            </div>
          </StaggerItem>

          {/* Financial Services — medium card with trading floor image */}
          <StaggerItem className="md:col-span-5">
            <div className="glass-card rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all h-full group overflow-hidden relative min-h-[400px] flex flex-col justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-30"
                alt="Financial trading floor with data screens"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEj3_O-z_rPqMpBhDRacBgqizNV9iiwYJvZjD4kBJqbpB3TxLPcEG_6lMyw_2afaouEbecCOkw1fDnpFA-ZKx9k4NS0NyNzRjAyfWbPOXMvF1lPi4Yo-0iqYcjEzWwHhdEMAEGhsANhict_dEICMvb8lZ9xPMvwa7orZCx8dtJ_0n_fXN9qf1fuVImOiufakO0v6Dlbcgp7CBKTPMiwaA3XO54zXOaUk7UviyP2kbzjSK0gjhgoEp7wS4MJ_XK-mh3lh3SpXQzbGPP"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071325] via-[#071325]/60 to-transparent" />
              <div className="relative z-10 p-10">
                <div className="w-16 h-16 bg-primary/15 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/25">
                  <span className="material-symbols-outlined text-primary text-3xl group-hover:text-[#41EEC2] transition-colors">account_balance</span>
                </div>
                <h3 className="text-3xl font-headline font-bold mb-4 tracking-tight">{t("finance_title")}</h3>
                <p className="text-[#d7e3fc]/60 leading-relaxed">{t("finance_desc")}</p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Cross-Industry */}
      <section className="py-24 px-8 bg-surface-container-lowest relative">
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00D4AA]/10 border border-[#00D4AA]/20 rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-primary glow-pulse" />
                Cross-Industry
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">{t("cross_title")}</h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "eco", title: t("sustainability_title"), desc: t("sustainability_desc"), color: "bg-[#00D4AA]/15" },
              { icon: "cloud_sync", title: t("digital_title"), desc: t("digital_desc"), color: "bg-[#41EEC2]/15" },
              { icon: "smart_toy", title: t("ai_readiness_title"), desc: t("ai_readiness_desc"), color: "bg-[#ffcea6]/15" },
            ].map((item) => (
              <StaggerItem key={item.icon}>
                <div className="glass-card p-10 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all h-full text-center group">
                  <div className={`w-20 h-20 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-8 transition-all group-hover:scale-110`}>
                    <span className="material-symbols-outlined text-primary text-4xl group-hover:text-[#41EEC2] transition-colors">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-[#d7e3fc]/50 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection title={t("cta_title")} description={t("cta_desc")} buttonText={t("cta_button")} />
    </>
  );
}
