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

      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <SlideIn direction="left">
            <div className="glass-card p-10 rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all">
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-on-surface/70 mb-2">
                    {t("form_name")}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="w-full bg-surface-container border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface/30 focus:border-primary focus:outline-none focus:shadow-[0_0_0_2px_rgba(0,212,170,0.15)] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-on-surface/70 mb-2">
                    {t("form_email")}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="w-full bg-surface-container border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface/30 focus:border-primary focus:outline-none focus:shadow-[0_0_0_2px_rgba(0,212,170,0.15)] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-sm font-medium text-on-surface/70 mb-2">
                    {t("form_company")}
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    className="w-full bg-surface-container border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface/30 focus:border-primary focus:outline-none focus:shadow-[0_0_0_2px_rgba(0,212,170,0.15)] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-topic" className="block text-sm font-medium text-on-surface/70 mb-2">
                    {t("form_topic")}
                  </label>
                  <select id="contact-topic" className="w-full bg-surface-container border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface focus:border-primary focus:outline-none focus:shadow-[0_0_0_2px_rgba(0,212,170,0.15)] transition-all">
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
                  <label htmlFor="contact-message" className="block text-sm font-medium text-on-surface/70 mb-2">
                    {t("form_message")}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    className="w-full bg-surface-container border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface/30 focus:border-primary focus:outline-none focus:shadow-[0_0_0_2px_rgba(0,212,170,0.15)] transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full gradient-cta text-on-primary-fixed py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-[0_20px_40px_-10px_rgba(0,212,170,0.3)]"
                >
                  {t("form_submit")}
                </button>
              </form>
            </div>
          </SlideIn>

          {/* Direct Contact */}
          <SlideIn direction="right">
            <div className="space-y-6">
              <h2 className="text-3xl font-headline font-bold mb-8">
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
                    <div
                      className="glass-card p-6 rounded-lg border border-outline-variant/10 hover:border-primary/30 flex items-start gap-4 transition-all"
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">
                          {contact.icon}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-on-surface/50 uppercase tracking-wider mb-1">
                          {contact.label}
                        </div>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-on-surface hover:text-[#00D4AA] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-on-surface">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* CTA Banner */}
              <FadeIn delay={0.3}>
                <div className="glass-card p-8 rounded-lg border border-primary/20 hover:border-primary/40 mt-8 transition-all relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 blur-[60px] rounded-full" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-headline font-bold mb-2">
                      {t("cta_title")}
                    </h3>
                    <p className="text-on-surface/60 mb-4">{t("cta_desc")}</p>
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block gradient-cta text-on-primary-fixed px-8 py-3 rounded-lg font-bold hover:brightness-110 transition-all shadow-[0_10px_30px_-10px_rgba(0,212,170,0.3)]"
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
