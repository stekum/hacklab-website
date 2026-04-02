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
    <nav className="fixed top-0 w-full z-[100] bg-surface/60 backdrop-blur-xl border-b border-outline-variant/15 shadow-[0_40px_60px_-5px_rgba(215,227,252,0.04)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-[2560px] mx-auto">
        <Link href="/" className="text-xl font-black tracking-tighter text-on-surface font-headline">
          HackLab
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-headline tracking-tight text-sm uppercase font-bold text-on-surface/70 hover:text-secondary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={pathname}
            locale={otherLocale}
            className="font-headline tracking-tight text-sm uppercase font-bold text-on-surface/50 hover:text-secondary transition-colors duration-300"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <Link
            href="/contact"
            className="gradient-cta text-on-primary-fixed px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all"
          >
            {t("cta")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
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
      {mobileOpen && (
        <div className="md:hidden bg-surface-container/95 backdrop-blur-xl border-t border-outline-variant/15 px-8 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-headline tracking-tight text-sm uppercase font-bold text-on-surface/70 hover:text-secondary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/15">
            <Link
              href={pathname}
              locale={otherLocale}
              className="font-headline tracking-tight text-sm uppercase font-bold text-on-surface/50 hover:text-secondary transition-colors duration-300"
            >
              {otherLocale.toUpperCase()}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="gradient-cta text-on-primary-fixed px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
