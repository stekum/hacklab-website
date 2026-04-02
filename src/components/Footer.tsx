import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full py-20 px-8 border-t border-outline-variant/15 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="text-lg font-bold text-on-surface font-headline">
            HackLab
          </div>
          <p className="font-body text-sm leading-relaxed text-on-surface/60 max-w-xs">
            {t("description")}
          </p>
          <div className="text-on-surface/40 text-xs mt-8">
            {t("copyright")}
          </div>
        </div>

        <div>
          <h4 className="font-headline font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">
            {t("services_title")}
          </h4>
          <ul className="space-y-4 font-body text-sm text-on-surface/40">
            <li>
              <Link
                href="/services"
                className="hover:text-primary-container transition-all"
              >
                {t("agentic_ai")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-primary-container transition-all"
              >
                {t("fabric")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-primary-container transition-all"
              >
                {t("analytics")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-primary-container transition-all"
              >
                {t("esg")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-primary-container transition-all"
              >
                {t("enterprise")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">
            {t("company_title")}
          </h4>
          <ul className="space-y-4 font-body text-sm text-on-surface/40">
            <li>
              <Link
                href="/cases"
                className="hover:text-primary-container transition-all"
              >
                {t("cases_link")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-primary-container transition-all"
              >
                {t("about_link")}
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="hover:text-primary-container transition-all"
              >
                {t("industries_link")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">
            {t("contact_title")}
          </h4>
          <ul className="space-y-4 font-body text-sm text-on-surface/40">
            <li>{t("location")}</li>
            <li>{t("email")}</li>
            <li>
              <Link
                href="/impressum"
                className="hover:text-primary-container transition-all"
              >
                {t("impressum")}
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="hover:text-primary-container transition-all"
              >
                {t("datenschutz")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
