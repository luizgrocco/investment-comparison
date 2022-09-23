import styled from "styled-components";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export const SSpeedDial = styled(SpeedDial)`
  position: fixed;
  bottom: 16px;
  right: 16px;
`;

export const SSpeedDialAction = styled(SpeedDialAction)``;

export const SSpeedDialIcon = styled(SpeedDialIcon)`
  /* color: ${({ theme }) => theme.palette.text.primary}; */
`;

export const SDarkModeIcon = styled(DarkModeIcon)``;

export const SLightModeIcon = styled(LightModeIcon)``;
