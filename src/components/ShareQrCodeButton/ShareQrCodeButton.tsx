import React from "react";
import { SButton, SQrCodeIcon, SButtonText } from "./styles";

export const ShareQrCodeButton: React.FC = () => {
  return (
    <SButton>
      <SQrCodeIcon />
      <SButtonText>Gerar QR Code</SButtonText>
    </SButton>
  );
};
