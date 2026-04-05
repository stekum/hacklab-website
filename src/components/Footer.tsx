import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full py-20 px-8 border-t border-[#3b4a44]/15 bg-[#030e20]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hacklab-website/hacklab-logo.png" alt="HackLab" className="h-12" />
          </div>
          <p className="font-body text-sm leading-relaxed text-[#d7e3fc]/60 max-w-xs">
            {t("description")}
          </p>
          <div className="text-[#d7e3fc]/40 text-xs mt-8">
            {t("copyright")}
          </div>
        </div>

        <div>
          <h4 className="font-headline font-bold text-[#d7e3fc] mb-6 uppercase tracking-widest text-xs">
            {t("services_title")}
          </h4>
          <ul className="space-y-4 font-body text-sm text-[#d7e3fc]/40">
            <li>
              <Link
                href="/services"
                className="hover:text-[#00D4AA] transition-all"
              >
                {t("agentic_ai")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#00D4AA] transition-all"
              >
                {t("fabric")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#00D4AA] transition-all"
              >
                {t("analytics")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#00D4AA] transition-all"
              >
                {t("esg")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#00D4AA] transition-all"
              >
                {t("enterprise")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold text-[#d7e3fc] mb-6 uppercase tracking-widest text-xs">
            {t("company_title")}
          </h4>
          <ul className="space-y-4 font-body text-sm text-[#d7e3fc]/40">
            <li>
              <Link
                href="/cases"
                className="hover:text-[#00D4AA] transition-all"
              >
                {t("cases_link")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#00D4AA] transition-all"
              >
                {t("about_link")}
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="hover:text-[#00D4AA] transition-all"
              >
                {t("industries_link")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold text-[#d7e3fc] mb-6 uppercase tracking-widest text-xs">
            {t("contact_title")}
          </h4>
          <ul className="space-y-4 font-body text-sm text-[#d7e3fc]/40">
            <li>{t("location")}</li>
            <li>{t("email")}</li>
            <li>
              <Link
                href="/impressum"
                className="hover:text-[#00D4AA] transition-all"
              >
                {t("impressum")}
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="hover:text-[#00D4AA] transition-all"
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
