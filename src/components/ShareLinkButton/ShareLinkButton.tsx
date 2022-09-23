import React from "react";
import { SButton, SContentCopyIcon, SButtonText } from "./styles";

export const ShareLinkButton: React.FC = () => {
  return (
    <SButton>
      <SContentCopyIcon />
      <SButtonText>Copiar Link</SButtonText>
    </SButton>
  );
};
