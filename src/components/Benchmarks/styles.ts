import styled from "styled-components";
import { Button, Grid, LinearProgress, Typography } from "@mui/material";

export const SBenchmkarsContainer = styled(Grid)`
  min-width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SLinearProgress = styled(LinearProgress).attrs(() => ({
  variant: "indeterminate",
}))`
  margin-right: 10px;
`;

export const SLabel = styled(Typography)`
  width: 100%;
  font-weight: bold;
  font-size: 14px;
`;

export const SButtonGroup = styled(Grid)`
  width: 100%;
  display: flex;
  grid-gap: 8px;
`;

export const SButton = styled(Button).attrs(() => ({
  variant: "contained",
}))`
  padding: 6px 12px;
`;
