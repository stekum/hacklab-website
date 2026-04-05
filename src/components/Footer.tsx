import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full py-20 px-8 border-t border-[#3b4a44]/15 bg-[#030e20]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2.5">
            <svg className="h-7 w-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 1L29.86 9v14L16 31 2.14 23V9L16 1z" stroke="#00D4AA" strokeWidth="1.5" fill="none"/>
              <circle cx="16" cy="10" r="2" fill="#00D4AA"/>
              <circle cx="10" cy="18" r="2" fill="#00D4AA"/>
              <circle cx="22" cy="18" r="2" fill="#00D4AA"/>
              <circle cx="16" cy="24" r="1.5" fill="#41EEC2" opacity="0.6"/>
              <line x1="16" y1="10" x2="10" y2="18" stroke="#00D4AA" strokeWidth="0.8" opacity="0.5"/>
              <line x1="16" y1="10" x2="22" y2="18" stroke="#00D4AA" strokeWidth="0.8" opacity="0.5"/>
              <line x1="10" y1="18" x2="22" y2="18" stroke="#00D4AA" strokeWidth="0.8" opacity="0.5"/>
              <line x1="10" y1="18" x2="16" y2="24" stroke="#41EEC2" strokeWidth="0.6" opacity="0.3"/>
              <line x1="22" y1="18" x2="16" y2="24" stroke="#41EEC2" strokeWidth="0.6" opacity="0.3"/>
            </svg>
            <span className="text-lg font-bold text-[#d7e3fc] font-headline">HackLab</span>
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
