import React from "react";
import { useTranslation } from "react-i18next";
import { SButton, SQrCodeIcon, SButtonText } from "./styles";

export const ShareQrCodeButton: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SButton variant="contained">
      <SQrCodeIcon />
      <SButtonText>{t("qrCodeButtonText")}</SButtonText>
    </SButton>
  );
};
