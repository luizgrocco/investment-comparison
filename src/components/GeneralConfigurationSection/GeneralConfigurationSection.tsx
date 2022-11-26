import React from "react";

import {
  SGeneralConfigurationSectionContainer,
  SFirstRow,
  STitle,
  SShareButtonsContainer,
  SGlobalSettingsPositioner,
  SSecondRow,
  SSubtitle,
} from "./styles";
import {
  ShareQrCodeButton,
  ShareLinkButton,
  GlobalSettingsSlider,
} from "./../../components";
import { useTranslation } from "react-i18next";

export const GeneralConfigurationSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SGeneralConfigurationSectionContainer>
      <SFirstRow>
        <STitle>{t("compareAssets")}</STitle>
        <SShareButtonsContainer>
          <ShareQrCodeButton />
          <ShareLinkButton />
          <SGlobalSettingsPositioner>
            <GlobalSettingsSlider />
          </SGlobalSettingsPositioner>
        </SShareButtonsContainer>
      </SFirstRow>
      <SSecondRow>
        <SSubtitle>{t("compareText")}</SSubtitle>
      </SSecondRow>
    </SGeneralConfigurationSectionContainer>
  );
};
