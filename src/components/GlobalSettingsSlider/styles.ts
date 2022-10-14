import styled from "styled-components";
import { Slide, Grid, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

export const SGlobalSettingsContainer = styled(Grid)`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 8px 0 0 8px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding-left: 14px;
`;

export const SIconButton = styled(IconButton)`
  color: inherit;
`;

export const SSettingsIcon = styled(SettingsIcon)``;

export const SSlide = styled(Slide)``;

export const SConfigGroupContainer = styled(Grid)`
  display: flex;
`;
