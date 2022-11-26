import styled from "styled-components";
import { Grid, Typography } from "@mui/material";

export const SGeneralConfigurationSectionContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SFirstRow = styled(Grid)`
  display: flex;
  flex: 1;
  margin-top: 2.5vh;
  justify-content: space-between;
  align-items: center;
`;

export const STitle = styled(Typography)`
  font-weight: 600;
  font-style: normal;
  font-size: 23px;
`;

export const SShareButtonsContainer = styled(Grid)`
  display: flex;
  gap: 20px;
`;

export const SGlobalSettingsPositioner = styled(Grid)`
  right: 0;
`;

export const SSecondRow = styled(Grid)`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const SSubtitle = styled(Typography)`
  font-size: 16px;
`;
