import React, { useState } from "react";
import {
  SGlobalConfigsContainer,
  SIconButton,
  SSettingsIcon,
  SSlide,
  SConfigGroupContainer,
} from "./styles";
import { ThemeSelectorButton } from "../ThemeSelectorButton/ThemeSelectorButton";

export const GlobalConfigsSlider: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (): void => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  return (
    <SGlobalConfigsContainer>
      <SIconButton onClick={toggleDrawer}>
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
    </SGlobalConfigsContainer>
  );
};
