import styled from "styled-components";
import { Grid, Typography } from "@mui/material";

export const SPageContainer = styled(Grid)`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const SConfigurationContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  padding: 0 2%;
  padding-right: 0;
`;

export const SConfigurationFirstRow = styled(Grid)`
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

export const SGlobalConfigsPositioner = styled(Grid)`
  right: 0;
`;

export const SConfigurationSecondRow = styled(Grid)`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const SSubtitle = styled(Typography)`
  font-size: 16px;
`;

export const SSearchContainer = styled(Grid)`
  display: flex;
  margin-top: 2vh;
  padding: 0 2%;
`;

export const SChartConfigurationContainer = styled(Grid)`
  display: flex;
  padding: 0 2%;
`;
