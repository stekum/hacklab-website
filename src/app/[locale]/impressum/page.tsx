import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("impressum_page");

  return (
    <section className="pt-40 pb-20 px-8 grid-overlay animated-gradient">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-headline font-extrabold tracking-tighter mb-12">{t("title")}</h1>

        <div className="glass-card p-10 rounded-lg border border-outline-variant/10 space-y-8 text-on-surface/70 leading-relaxed">
          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-2">{t("company")}</h2>
            <p>{t("represented_by")}: {t("name")}</p>
          </div>

          <div>
            <h3 className="text-lg font-headline font-bold text-on-surface mb-2">{t("address_label")}</h3>
            <p className="whitespace-pre-line">{t("address")}</p>
          </div>

          <div>
            <h3 className="text-lg font-headline font-bold text-on-surface mb-2">{t("contact_label")}</h3>
            <p>{t("email")}</p>
          </div>

          <div>
            <h3 className="text-lg font-headline font-bold text-on-surface mb-2">{t("register_label")}</h3>
            <p>{t("register")}</p>
          </div>

          <div>
            <h3 className="text-lg font-headline font-bold text-on-surface mb-2">{t("vat_label")}</h3>
            <p>{t("vat")}</p>
          </div>

          <hr className="border-outline-variant/20" />

          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-4">{t("liability_title")}</h2>
            <p>{t("liability_text")}</p>
          </div>

          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface mb-4">{t("links_title")}</h2>
            <p>{t("links_text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
