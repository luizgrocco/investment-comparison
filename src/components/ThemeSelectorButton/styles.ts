import styled from "styled-components";
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export const SIconButton = styled(IconButton)`
  color: inherit;
`;

export const SDarkModeIcon = styled(DarkModeIcon)`
  color: grey; // TODO: Themefy this color
`;

export const SLightModeIcon = styled(LightModeIcon)`
  color: gold; // TODO: Themefy this color
`;
