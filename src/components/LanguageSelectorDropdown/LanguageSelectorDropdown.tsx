import React from "react";
import { SelectChangeEvent } from "@mui/material";

import {
  SLanguageSelectorContainer,
  SFormControl,
  SLanguageLabel,
  SLanguageItem,
  SLanguageDropdown,
} from "./styles";

import { useTranslation } from "react-i18next";

export const LanguageSelectorDropdown: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent): void => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <SLanguageSelectorContainer>
      <SFormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <SLanguageLabel id="language-label">{t("language")}</SLanguageLabel>
        <SLanguageDropdown
          labelId="language-label"
          id="language-dropdown"
          value={i18n.resolvedLanguage}
          label={t("language")}
          onChange={handleChange}
        >
          {/* TODO: List languages from i18n resources definition */}
          <SLanguageItem value={"en"}>{t("english")}</SLanguageItem>
          <SLanguageItem value={"pt"}>{t("portuguese")}</SLanguageItem>
        </SLanguageDropdown>
      </SFormControl>
    </SLanguageSelectorContainer>
  );
};
