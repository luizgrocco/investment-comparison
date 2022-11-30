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
import { availableLanguages } from "../../i18n";

export const LanguageSelectorDropdown: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent<unknown>): void => {
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <SLanguageSelectorContainer>
      <SFormControl sx={{ minWidth: 120 }} size="small">
        <SLanguageLabel id="language-label">{t("language")}</SLanguageLabel>
        <SLanguageDropdown
          labelId="language-label"
          id="language-dropdown"
          value={i18n.resolvedLanguage}
          label={t("language")}
          onChange={handleChange}
        >
          {availableLanguages.map((language) => (
            <SLanguageItem value={language} key={language}>
              {t(`languageNames.${language}`)}
            </SLanguageItem>
          ))}
        </SLanguageDropdown>
      </SFormControl>
    </SLanguageSelectorContainer>
  );
};
