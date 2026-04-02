import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("datenschutz_page");

  const sections = [
    { title: t("responsible_title"), text: t("responsible_text") },
    { title: t("collection_title"), text: t("collection_text") },
    { title: t("contact_title"), text: t("contact_text") },
    { title: t("rights_title"), text: t("rights_text") },
    { title: t("cookies_title"), text: t("cookies_text") },
    { title: t("hosting_title"), text: t("hosting_text") },
  ];

  return (
    <section className="pt-40 pb-20 px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-headline font-extrabold tracking-tighter mb-8">{t("title")}</h1>
        <p className="text-on-surface/70 leading-relaxed mb-12">{t("intro")}</p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-headline font-bold text-on-surface mb-4">{section.title}</h2>
              <p className="text-on-surface/70 leading-relaxed whitespace-pre-line">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
