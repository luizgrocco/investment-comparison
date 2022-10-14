import React from "react";
import { SButton, SQrCodeIcon, SButtonText } from "./styles";

export const ShareQrCodeButton: React.FC = () => {
  return (
    <SButton variant="contained">
      <SQrCodeIcon />
      <SButtonText>Gerar QR Code</SButtonText>
    </SButton>
  );
};
