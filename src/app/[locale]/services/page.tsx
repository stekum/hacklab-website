import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { TechStackLogos } from "@/components/CompanyLogos";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

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

      {/* Featured: Agentic AI — MUCH bigger */}
      <section className="py-24 px-8 bg-surface-container-low relative">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="glass-card p-12 md:p-16 rounded-lg border border-outline-variant/10 hover:border-primary/30 flex flex-col lg:flex-row gap-12 overflow-hidden relative min-h-[500px] transition-all group">
              <div className="relative z-10 lg:w-2/3">
                <div className="w-20 h-20 bg-primary/20 rounded-xl flex items-center justify-center mb-8 transition-colors group-hover:bg-primary/30">
                  <span className="material-symbols-outlined text-primary text-4xl group-hover:text-[#41EEC2] transition-colors">psychology</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tight">{t("ai_featured_title")}</h2>
                <p className="text-xl text-[#d7e3fc]/50 leading-relaxed mb-8">{t("ai_featured_desc")}</p>
                <div className="flex flex-wrap gap-3">
                  {[t("ai_pill_1"), t("ai_pill_2"), t("ai_pill_3"), t("ai_pill_4"), t("ai_pill_5")].map((pill) => (
                    <span key={pill} className="px-4 py-2 bg-surface-container-highest rounded-lg text-sm text-primary font-medium border border-[#00D4AA]/10">{pill}</span>
                  ))}
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute right-0 top-0 w-1/2 h-full object-cover mix-blend-overlay opacity-40"
                style={{ maskImage: "linear-gradient(to left, black, transparent)" }}
                alt="Neural network brain visualization"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJV7XSG2naM3lDnXVUb2087QI8CJZT670uu-0Lf3QH0WxJaZX0KYWxLXkMFg02iCXUQLJorgzxb0Kp1pxotgUT01LsTuC-XR8T5eRmV616W5i2AY17MZs0NzSZajobJ7VJafpX4-m5bN0wVxpA10_WAXX1io6IbS5k4-xphFrmVPlQeoljmNnOxc6U6Oiz-Taa0cN1_qgOCFJZ2QBJD7r4TxhMy6BTqHukQTKVRNT8Nb3yipwbAPdTi34ZzlR-A7UYkDCDqOwqGJ1r"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Service Cards — alternating left-right layout */}
      <section className="py-24 px-8 relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-12">
          {[
            { icon: "architecture", title: t("platform_title"), desc: t("platform_desc"), items: ["Databricks & Microsoft Fabric", "Cloud Migration (Azure/AWS)", "Data Governance Frameworks"], image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUdgGoEKdz-8lvx7e7VFHSl0aSGMrS3eAmGgAMBCrcWn6_oOUVi46800kfnHUE6oJEEaCCTbveVqC00z4aBVP8RcQkWAdWjP2uA9QLgHYHh0n45BR79TYcPc4DsnXyAz8Z6RUcOs6yA65f4Q-POhBdDOIG-zHsBXyBUGWY-8vjzjFR6id_YmY4HNxphfJHU-PVLApQOd8-rW8pNmMBN0wnhZCJFeMpZ-61xRHjw2uAFubofUlJQKDWsx-PsVljyQ4q0fKf7TO-dz_3", imageAlt: "Data command center visualization" },
            { icon: "monitoring", title: t("ae_title"), desc: t("ae_desc"), items: ["dbt Core Development", "Data Quality Monitoring", "Semantic Layer Design"], image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzq_9l5G3XEnGRhbzfJ5yTB4sTxyiwXas84uQ_L7lETYmmsCShYVyjlmPEw1J6y9nWn3y9byW30dNwK2YU87vPGRhezD7sfdTP48OceNeXAjavoXTBP5ZrTyZ4-oq9LX6CCAR44V9CvuKcuPS7Mss8YnDIZMT9K8ZAlR6KSuka2Sj8UW1yY3GiidjCw0pd_y9EOwuEw9XijvwFYyJhQ937WrbPJ7xDTO5mPW5RlDZeEYCXTkcLPbNd318NytL4TXAL9MMLsersLe8H", imageAlt: "Analytics dashboard with data insights" },
            { icon: "settings_input_component", title: t("integration_title"), desc: t("integration_desc"), items: ["SAP S/4HANA Extractors", "API-first Middleware", "Real-time CDC Pipelines"], image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMqsAwWtV0mxwLpm2jJVBKYCgH2LCgJrI-PaMNUIwT8uxRz5-AWLsJE2xVT3dyw6dqQ66wNQYM1sJV8YM4DVF0XsDbsXI8Mb8-33twE_6WM2X30aVJgrWhSKeFx7JJqdbacCcabCaAbiS2mObKxBY_ceJfEcJBA5OeMHcgUjI5NZ8LpoZw7xf_Cy9czh3mS0_zlhzCmphHJBbmwkyWtYUzR6KdIz1Ign5s1IH63q93A6tmigmodGM84CtG9SyVaN2hcFOglo1ja9KV", imageAlt: "Modern tech office workspace" },
            { icon: "eco", title: t("sustainability_title"), desc: t("sustainability_desc"), items: ["Carbon Footprint Engine", "Supply Chain Transparency", "EU Taxonomy Compliance"], image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbKQEGU9gdBEh2CwA_tpoKHqfgZo6Xjzs_dYLBZGds2N__fqD5gzlxaEORnZqPuYVdi9kHS4y9dDryRp8wa1ExuRHEPTQHugBZj5VjdzUTKMCHCyy_GRp2ot-MbLkEBmiv1NcNAis_Sd_5Uo5PFqBOQpJl656mCrPJaNPBjkZw6OdKGy5ovl0kHcMTg8TrRQnZapUskG-YFHF9j5kT8Rm50Lym8YNWiB2-e3PN4wa15C1xp5vFPHCmrse0O_siMwf4FXv9Fh8RXTc0", imageAlt: "Sustainable factory with green technology" },
          ].map((service, index) => (
            <FadeIn key={service.icon}>
              <div className={`glass-card rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all group overflow-hidden relative`}>
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[320px]`}>
                  {/* Image side */}
                  <div className="lg:w-2/5 relative min-h-[200px] lg:min-h-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="absolute inset-0 w-full h-full object-cover opacity-30 transition-opacity duration-500 group-hover:opacity-40"
                      alt={service.imageAlt}
                      src={service.image}
                    />
                    <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-transparent to-[#0c1a2e]/80 hidden lg:block`} />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c1a2e]/80 lg:hidden" />
                  </div>
                  {/* Content side */}
                  <div className="lg:w-3/5 p-10 relative z-10">
                    <div className="w-14 h-14 bg-primary/15 rounded-lg flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/25">
                      <span className="material-symbols-outlined text-primary text-3xl group-hover:text-[#41EEC2] transition-colors">{service.icon}</span>
                    </div>
                    <h3 className="text-2xl font-headline font-bold mb-4 tracking-tight">{service.title}</h3>
                    <p className="text-[#d7e3fc]/50 leading-relaxed mb-8">{service.desc}</p>
                    <ul className="space-y-3 text-sm font-medium text-[#d7e3fc]/70">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Tech Stack — logo-sized pills */}
      <section className="py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-12 tracking-tighter">{t("tech_title")}</h2>
          </FadeIn>
          <TechStackLogos />
          <StaggerContainer className="flex flex-wrap justify-center gap-4 mt-12">
            {techStack.map((tech) => (
              <StaggerItem key={tech}>
                <div className="px-6 py-3 glass-card rounded-lg border border-outline-variant/10 hover:border-primary/30 text-[#d7e3fc]/70 font-bold text-sm tracking-tight transition-all hover:text-primary">{tech}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection title={t("cta_title")} description={t("cta_desc")} buttonText={t("cta_button")} />
    </>
  );
}
