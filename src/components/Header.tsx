"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const otherLocale = locale === "de" ? "en" : "de";

  const navLinks = [
    { href: "/services" as const, label: t("services") },
    { href: "/cases" as const, label: t("cases") },
    { href: "/about" as const, label: t("about") },
    { href: "/contact" as const, label: t("contact") },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#071325]/60 backdrop-blur-xl border-b border-[#3b4a44]/15 shadow-[0_40px_60px_-5px_rgba(215,227,252,0.04)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2.5">
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
          <span className="text-xl font-black tracking-tighter text-[#d7e3fc] font-headline">HackLab</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-headline tracking-tight text-sm uppercase font-bold text-[#d7e3fc]/70 hover:text-[#41eec2] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={pathname}
            locale={otherLocale}
            className="font-headline tracking-tight text-sm uppercase font-bold text-[#d7e3fc]/50 hover:text-[#41eec2] transition-colors duration-300"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <Link
            href="/contact"
            className="bg-[#00D4AA] text-[#002118] px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all scale-95 active:scale-90"
          >
            {t("cta")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-on-surface"
          aria-label="Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-[#142032]/95 backdrop-blur-xl border-t border-[#3b4a44]/15 px-8 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-headline tracking-tight text-sm uppercase font-bold text-[#d7e3fc]/70 hover:text-[#41eec2] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-[#3b4a44]/15">
            <Link
              href={pathname}
              locale={otherLocale}
              className="font-headline tracking-tight text-sm uppercase font-bold text-[#d7e3fc]/50 hover:text-[#41eec2] transition-colors duration-300"
            >
              {otherLocale.toUpperCase()}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-[#00D4AA] text-[#002118] px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
