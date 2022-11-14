import {
  Chip,
  CircularProgress,
  Grid,
  IconButton,
  OutlinedInput,
  Popper,
  Typography,
} from "@mui/material";

import { AssetCategoryEnum } from "../../api/rest-api";

import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

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
`;

export const SSearchResultsContainer = styled(Grid)`
  background-color: ${({ theme }) =>
    theme.palette.mode === "light"
      ? "white"
      : "#222222"}; /* TODO: add color in theme for this */
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  max-height: 80vh;
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
`;

export const SAssetChipItem = styled(Chip).attrs(() => ({
  variant: "outlined",
}))``;
