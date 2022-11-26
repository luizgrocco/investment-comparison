/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { pt, en } from "./translations";

export const resources = {
  pt,
  en,
};

export type AvailableLanguages = keyof typeof resources;

export const defaultNS = "translation";

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // debug: true,
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
  });

export default i18n;
