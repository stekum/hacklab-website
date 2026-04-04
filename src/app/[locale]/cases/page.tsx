import { getTranslations, setRequestLocale } from "next-intl/server";
import { CTASection } from "@/components/CTASection";
import { TrustLogos } from "@/components/CompanyLogos";
import { PageHero } from "@/components/PageHero";
import { AnimatedCounter, FadeIn, ScaleIn, SlideIn, StaggerContainer } from "@/components/animations";

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

      {/* Featured: Schaeffler — dominant with large image */}
      <section className="py-24 px-8 bg-surface-container-low relative">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <SlideIn direction="left" className="lg:col-span-7">
              <div className="glass-card p-1 rounded-2xl border border-outline-variant/10 hover:border-primary/30 overflow-hidden group transition-all">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full aspect-video object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  alt="Automotive factory production line"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB97lkn2nAdekVVTHkIkNtINSJMjDpdIsJKY_gqYVLVpiH_nHBKO5TPjNGYc35_hByYfqhoYaxSc7WTyEHzSGbgrecTdkJbFGGv6fsHDT7-ZFglTXe7LevHx7mi2L23pf1U8vMfLn4f6Qxqr2RCeSc9CSUDscJO2THQPWz6sA5Tl6GEE3piGUZA_0S0c3JLfo0ykiv4KRv1UtoIFMG-CDOjogwTExjtBl2MXTX4drRb6jj08Bh0mNX5nG7NACqpKjMi4x6jU_cKJ8Cu"
                />
              </div>
            </SlideIn>
            <SlideIn direction="right" className="lg:col-span-5">
              <div className="space-y-8">
                <div>
                  <div className="text-primary font-bold text-sm tracking-widest uppercase mb-2">{t("featured_label")}</div>
                  <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 tracking-tighter leading-[0.9]">{t("schaeffler_title")}</h2>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-surface-container rounded-lg border-l-4 border-primary">
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-primary">{t("challenge_label")}</h4>
                    <p className="text-[#d7e3fc]/60">{t("challenge_text")}</p>
                  </div>
                  <div className="p-6 bg-surface-container rounded-lg border-l-4 border-secondary">
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-secondary">{t("approach_label")}</h4>
                    <p className="text-[#d7e3fc]/60">{t("approach_text")}</p>
                  </div>
                  <div className="p-6 bg-surface-container rounded-lg border-l-4 border-on-surface-variant">
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-on-surface-variant">{t("result_label")}</h4>
                    <p className="text-[#d7e3fc]/60">{t("result_text")}</p>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Additional Cases — timeline layout */}
      <section className="py-24 px-8 relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-headline font-bold mb-16 tracking-tighter text-center">{t("more_cases_title")}</h2>
          </FadeIn>
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00D4AA]/30 via-[#00D4AA]/20 to-transparent hidden md:block" />

            {[
              { title: t("case2_title"), industry: t("case2_industry"), desc: t("case2_desc"), result: t("case2_result"), icon: "analytics", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzq_9l5G3XEnGRhbzfJ5yTB4sTxyiwXas84uQ_L7lETYmmsCShYVyjlmPEw1J6y9nWn3y9byW30dNwK2YU87vPGRhezD7sfdTP48OceNeXAjavoXTBP5ZrTyZ4-oq9LX6CCAR44V9CvuKcuPS7Mss8YnDIZMT9K8ZAlR6KSuka2Sj8UW1yY3GiidjCw0pd_y9EOwuEw9XijvwFYyJhQ937WrbPJ7xDTO5mPW5RlDZeEYCXTkcLPbNd318NytL4TXAL9MMLsersLe8H", imageAlt: "Analytics dashboard with data insights" },
              { title: t("case3_title"), industry: t("case3_industry"), desc: t("case3_desc"), result: t("case3_result"), icon: "smart_toy", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJV7XSG2naM3lDnXVUb2087QI8CJZT670uu-0Lf3QH0WxJaZX0KYWxLXkMFg02iCXUQLJorgzxb0Kp1pxotgUT01LsTuC-XR8T5eRmV616W5i2AY17MZs0NzSZajobJ7VJafpX4-m5bN0wVxpA10_WAXX1io6IbS5k4-xphFrmVPlQeoljmNnOxc6U6Oiz-Taa0cN1_qgOCFJZ2QBJD7r4TxhMy6BTqHukQTKVRNT8Nb3yipwbAPdTi34ZzlR-A7UYkDCDqOwqGJ1r", imageAlt: "Neural network AI visualization" },
            ].map((cs, index) => (
              <SlideIn key={cs.icon} direction={index % 2 === 0 ? "left" : "right"}>
                <div className={`relative mb-16 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  {/* Timeline dot */}
                  <div className={`hidden md:block absolute top-8 ${index % 2 === 0 ? '-right-[1.3rem]' : '-left-[1.3rem]'} w-4 h-4 rounded-full bg-primary border-4 border-[#071325] z-10`} />

                  <div className="glass-card rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all group overflow-hidden">
                    {/* Card image header */}
                    <div className="relative h-40 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="absolute inset-0 w-full h-full object-cover opacity-30 transition-opacity duration-500 group-hover:opacity-40"
                        alt={cs.imageAlt}
                        src={cs.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c1a2e]" />
                      <div className="absolute bottom-4 left-6 flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-xl">{cs.icon}</span>
                        </div>
                        <span className="px-3 py-1 bg-surface-container-highest/80 backdrop-blur rounded text-xs text-primary font-bold uppercase tracking-wider">{cs.industry}</span>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-xl font-headline font-bold mb-3 tracking-tight">{cs.title}</h3>
                      <p className="text-[#d7e3fc]/50 leading-relaxed mb-6 text-sm">{cs.desc}</p>
                      <div className="p-4 bg-surface-container rounded-lg border-l-4 border-primary">
                        <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{t("result_label_short")}</div>
                        <p className="text-[#d7e3fc]/70 text-sm font-medium">{cs.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics — with AnimatedCounter */}
      <section className="py-24 px-8 bg-surface-container-lowest relative">
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12 tracking-tighter">{t("metrics_title")}</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { target: 50, suffix: "+", label: tMetrics("projects") },
              { target: 15, suffix: "+", label: tMetrics("years") },
              { target: 3, suffix: "", label: tMetrics("continents") },
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
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <TrustLogos />
          </FadeIn>
        </div>
      </section>

      <CTASection title={t("cta_title")} description={t("cta_desc")} buttonText={t("cta_button")} />
    </>
  );
}
