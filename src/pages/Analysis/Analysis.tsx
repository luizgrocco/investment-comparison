import React from "react";
import {
  SPageContainer,
  SConfigurationContainer,
  SConfigurationFirstRow,
  STitle,
  SShareButtonsContainer,
  SGlobalConfigsPositioner,
  SConfigurationSecondRow,
  SSubtitle,
  SSearchContainer,
} from "./styles";
import {
  ShareLinkButton,
  ShareQrCodeButton,
  GlobalSettingsSlider,
  SearchBar,
} from "../../components";

export const Analysis: React.FC = () => {
  return (
    <SPageContainer>
      <SConfigurationContainer>
        <SConfigurationFirstRow>
          <STitle>Compare os ativos</STitle>
          <SShareButtonsContainer>
            <ShareQrCodeButton />
            <ShareLinkButton />
            <SGlobalConfigsPositioner>
              <GlobalSettingsSlider />
            </SGlobalConfigsPositioner>
          </SShareButtonsContainer>
        </SConfigurationFirstRow>
        <SConfigurationSecondRow>
          <SSubtitle>
            Acompanhe os ativos que você está monitorando e veja o que está
          </SSubtitle>
        </SConfigurationSecondRow>
      </SConfigurationContainer>
      <SSearchContainer>
        <SearchBar />
      </SSearchContainer>
    </SPageContainer>
  );
};
