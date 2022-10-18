import styled from "styled-components";
import {
  OutlinedInput,
  Grid,
  CircularProgress,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

export const SSearchBarContainer = styled(Grid)`
  display: flex;
  width: 100%;
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

export const SSearchResults = styled(Grid)`
  display: flex;
  position: relative;
  flex-direction: column;
  widht: 100%;
`;
