import styled from "styled-components";
import { Grid, Typography } from "@mui/material";
import { AssetCategoryEnum } from "../../../api/rest-api";

export const SAssetContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* TODO: Try percentages instead of raw px values */
  min-height: 52px;
  /* TODO: Themify this color (dark mode specially) */
  /* outline: rgb(248, 249, 250) solid 1px; */
  padding: 8px 0;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px
      ${({ theme }) => theme.palette.primary.contrastText};
    outline: none;
  }
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
  overflow: hidden;
  text-overflow: ellipsis;

  margin-left: 8px;
  font-size: 14px;
  line-height: 16px;
`;

// color: ${({ theme }) => theme.colors.textDefault};
