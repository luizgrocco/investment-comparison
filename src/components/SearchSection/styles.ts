import styled from "styled-components";
import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  OutlinedInput,
  Popper,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

import { AssetCategoryEnum } from "../../api/rest-api";

export const SSearchBarContainer = styled(Grid)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const SSearchInput = styled(OutlinedInput)`
  background-color: ${({ theme }) =>
    theme.palette.mode === "light"
      ? "#dddddd"
      : "#222222"}; /* TODO: add color in theme for this */
  padding-left: 1%;
  padding-right: 1%;

  input {
    padding-top: 12px;
    padding-bottom: 12px;
    margin-left: 1%;
  }
`;

export const SIconButton = styled(IconButton)`
  color: inherit;
`;

export const SClearIcon = styled(ClearIcon)``;

export const SSearchIcon = styled(SearchIcon)``;

export const SCircularProgress = styled(CircularProgress).attrs(() => ({
  size: 20,
}))`
  margin-right: 10px;
`;

export const SSearchResults = styled(Popper).attrs(() => ({
  placement: "bottom-start",
}))`
  width: 100%;
  z-index: 40;
`;

export const SSearchResultsContainer = styled(Grid)`
  background-color: ${({ theme }) =>
    theme.palette.mode === "light"
      ? "white"
      : "#222222"}; /* TODO: add color in theme for this */
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 50vh;
  margin-top: 10px;
  overflow-y: auto;
  padding: 16px;
  border-radius: 8px;
  /* TODO: Themify the following colors */
  border: 1px solid rgba(51, 51, 51, 0.4);
  box-shadow: 3px 3px black

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d6d3d3;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-button:start:increment {
    height: 3%;
    display: block;
    background: transparent;
  }
`;

export const SCategoriesContainer = styled(Grid)`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

interface SCategorySeparatorLineType {
  $assetCategory: AssetCategoryEnum;
}

export const SCategorySeparatorLine = styled(
  Typography
)<SCategorySeparatorLineType>`
   {
    width: 100%;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    border-bottom: 1px solid
      ${({ $assetCategory, theme }) =>
        theme.assetCategoryColors[$assetCategory]};
    color: ${({ $assetCategory, theme }) =>
      theme.assetCategoryColors[$assetCategory]};
    margin-bottom: 6px;
  }
`;

export const SAssetsContainer = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 14px;
  gap: 14px;
`;

export const SAssetItem = styled(Button).attrs(() => ({
  variant: "contained",
}))`
  height: 37px;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: default;
`;

interface SColorBarPropsType {
  $assetCategory: AssetCategoryEnum;
}

export const SColorBar = styled(Typography)<SColorBarPropsType>`
   {
    background-color: ${({ $assetCategory, theme }) =>
      theme.assetCategoryColors[$assetCategory]};
    min-width: 4px;
    height: 16px;
  }
`;

export const SAssetLabel = styled(Typography)`
  margin: 0 10px;
  text-transform: none;
  font-size: 14px;
  font-weight: 600;
`;

export const SDeleteAllAssetsButton = styled(Button).attrs(({ theme }) => ({
  variant: theme.palette.mode === "light" ? "outlined" : "contained",
  color: "error",
}))`
  height: 37px;
  padding: 6px 12px;

  /* TODO: Better contrast when hovered between in dark/light mode */
  &:hover {
    background-color: ${({ theme }) =>
      theme.palette.mode === "light" ? theme.palette.error.main : "none"};
    color: #ffffff;
  }
`;

export const SDeleteLabel = styled(Typography)`
  text-transform: none;
  font-size: 14px;
  font-weight: 600;
`;

export const SDeleteAssetButton = styled(IconButton)`
  color: inherit;
  padding: 0;
`;

export const SDeleteAssetIcon = styled(CancelIcon)`
  font-size: 18px;
`;
