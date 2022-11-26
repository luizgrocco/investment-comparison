import React from "react";
import { useTranslation } from "react-i18next";
import { SButton, SContentCopyIcon, SButtonText } from "./styles";

export const ShareLinkButton: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SButton variant="contained">
      <SContentCopyIcon />
      <SButtonText>{t("copyLinkButtonText")}</SButtonText>
    </SButton>
  );
};
