// react-i18next versions higher than 11.11.0
import "i18next";
import { pt } from "./i18n/translations";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof pt;
  }
}
