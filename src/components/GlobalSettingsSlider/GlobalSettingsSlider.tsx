import React, { useState } from "react";
import {
  SGlobalSettingsContainer,
  SIconButton,
  SSettingsIcon,
  SSlide,
  SConfigGroupContainer,
} from "./styles";
import { ThemeSelectorButton } from "../ThemeSelectorButton/ThemeSelectorButton";

export const GlobalSettingsSlider: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlide = (): void => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  return (
    <SGlobalSettingsContainer>
      <SIconButton onClick={toggleSlide}>
        <SSettingsIcon />
      </SIconButton>
      <SSlide
        direction="left"
        in={isOpen}
        timeout={250}
        mountOnEnter
        unmountOnExit
      >
        <SConfigGroupContainer>
          <ThemeSelectorButton />
          {/* <CurrencySelectorDropdown /> */}
          {/* <LanguageSelectorDropdown /> */}
        </SConfigGroupContainer>
      </SSlide>
    </SGlobalSettingsContainer>
  );
};
