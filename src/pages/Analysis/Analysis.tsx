import React from "react";
import {
  SPageContainer,
  SConfigurationContainer,
  SConfigurationFirstRow,
  STitle,
  SShareButtonsContainer,
  SConfigurationSecondRow,
  SSubtitle,
} from "./styles";
import { ShareLinkButton, ShareQrCodeButton } from "../../components";

export const Analysis: React.FC = () => {
  return (
    <SPageContainer>
      <SConfigurationContainer>
        <SConfigurationFirstRow>
          <STitle>Compare os ativos</STitle>
          <SShareButtonsContainer>
            <ShareQrCodeButton />
            <ShareLinkButton />
          </SShareButtonsContainer>
        </SConfigurationFirstRow>
        <SConfigurationSecondRow>
          <SSubtitle>
            Acompanhe os ativos que você está monitorando e veja o que está
          </SSubtitle>
        </SConfigurationSecondRow>
      </SConfigurationContainer>
    </SPageContainer>
  );
};
