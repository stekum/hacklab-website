"use client";

import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    const lang = navigator.language.startsWith("en") ? "en" : "de";
    window.location.replace(`/${lang}`);
  }, []);

  return null;
}
