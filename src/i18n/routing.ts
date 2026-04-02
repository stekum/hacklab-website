import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
});

export const locales = routing.locales;
export type Locale = (typeof locales)[number];
