import React from "react";
import { SIconButton, SLightModeIcon, SDarkModeIcon } from "./styles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectThemeMode, setThemeMode } from "../../redux/reducers";

export const ThemeSelectorButton: React.FC = () => {
  const selectedTheme = useAppSelector(selectThemeMode);
  const dispatch = useAppDispatch();

  const handleSelectTheme = (): void => {
    dispatch(setThemeMode(selectedTheme === "dark" ? "light" : "dark"));
  };

  return (
    <SIconButton onClick={handleSelectTheme}>
      {selectedTheme === "dark" ? <SDarkModeIcon /> : <SLightModeIcon />}
    </SIconButton>
  );
};
