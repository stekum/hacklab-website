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
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hacklab-website/hacklab-logo.png" alt="HackLab" className="h-8" />
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
