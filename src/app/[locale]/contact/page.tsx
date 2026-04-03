"use client";

import { useTranslations } from "next-intl";
import { PageHero } from "@/components/PageHero";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations";

export default function ContactPage() {
  const t = useTranslations("contact_page");

  return (
    <>
      <PageHero
        label={t("hero_label")}
        title={t("hero_title")}
        description={t("hero_desc")}
      />

      <section className="py-24 px-8 relative">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#00D4AA]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form — glass-card with gradient border */}
          <SlideIn direction="left">
            <div className="glass-card p-10 rounded-lg border border-[#00D4AA]/15 hover:border-[#00D4AA]/30 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D4AA]/3 to-transparent pointer-events-none" />
              <form
                className="space-y-6 relative z-10"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-[#d7e3fc]/60 mb-2">
                    {t("form_name")}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="w-full bg-surface-container border border-[#3b4a44]/30 rounded-lg px-4 py-3 text-on-surface placeholder:text-[#d7e3fc]/20 focus:border-[#00D4AA] focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-[#d7e3fc]/60 mb-2">
                    {t("form_email")}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="w-full bg-surface-container border border-[#3b4a44]/30 rounded-lg px-4 py-3 text-on-surface placeholder:text-[#d7e3fc]/20 focus:border-[#00D4AA] focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-sm font-medium text-[#d7e3fc]/60 mb-2">
                    {t("form_company")}
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    className="w-full bg-surface-container border border-[#3b4a44]/30 rounded-lg px-4 py-3 text-on-surface placeholder:text-[#d7e3fc]/20 focus:border-[#00D4AA] focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-topic" className="block text-sm font-medium text-[#d7e3fc]/60 mb-2">
                    {t("form_topic")}
                  </label>
                  <select id="contact-topic" className="w-full bg-surface-container border border-[#3b4a44]/30 rounded-lg px-4 py-3 text-on-surface focus:border-[#00D4AA] focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)] transition-all">
                    <option value="">{t("form_topic_placeholder")}</option>
                    <option value="platform">{t("form_topic_platform")}</option>
                    <option value="ai">{t("form_topic_ai")}</option>
                    <option value="analytics">{t("form_topic_analytics")}</option>
                    <option value="integration">
                      {t("form_topic_integration")}
                    </option>
                    <option value="sustainability">
                      {t("form_topic_sustainability")}
                    </option>
                    <option value="other">{t("form_topic_other")}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-[#d7e3fc]/60 mb-2">
                    {t("form_message")}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    className="w-full bg-surface-container border border-[#3b4a44]/30 rounded-lg px-4 py-3 text-on-surface placeholder:text-[#d7e3fc]/20 focus:border-[#00D4AA] focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)] transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full gradient-cta text-[#002118] py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all"
                >
                  {t("form_submit")}
                </button>
              </form>
            </div>
          </SlideIn>

          {/* Direct Contact */}
          <SlideIn direction="right">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-8 tracking-tighter">
                {t("direct_title")}
              </h2>
              <StaggerContainer className="space-y-6">
                {[
                  {
                    icon: "mail",
                    label: t("direct_email"),
                    value: "hello@hacklab.de",
                    href: "mailto:hello@hacklab.de",
                  },
                  {
                    icon: "group",
                    label: t("direct_linkedin"),
                    value: "HackLab GmbH",
                    href: "https://linkedin.com",
                  },
                  {
                    icon: "calendar_month",
                    label: t("direct_calendly"),
                    value: "calendly.com/hacklab",
                    href: "https://calendly.com",
                  },
                  {
                    icon: "location_on",
                    label: t("direct_location"),
                    value: t("direct_location_value"),
                    href: undefined,
                  },
                ].map((contact) => (
                  <StaggerItem key={contact.icon}>
                    <div className="glass-card p-6 rounded-lg border border-outline-variant/10 hover:border-primary/30 flex items-start gap-4 transition-all group">
                      <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/25">
                        <span className="material-symbols-outlined text-primary group-hover:text-[#41EEC2] transition-colors">
                          {contact.icon}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#d7e3fc]/40 uppercase tracking-wider mb-1">
                          {contact.label}
                        </div>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-[#d7e3fc] hover:text-[#00D4AA] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-[#d7e3fc]">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* CTA Banner */}
              <FadeIn delay={0.3}>
                <div className="glass-card p-8 rounded-lg border border-[#00D4AA]/20 hover:border-[#00D4AA]/40 mt-8 transition-all relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 blur-[60px] rounded-full" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-headline font-bold mb-2 tracking-tight">
                      {t("cta_title")}
                    </h3>
                    <p className="text-[#d7e3fc]/50 mb-4">{t("cta_desc")}</p>
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block gradient-cta text-[#002118] px-8 py-3 rounded-lg font-bold hover:brightness-110 transition-all"
                    >
                      {t("cta_button")}
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </SlideIn>
        </div>
      </section>
    </>
  );
}
