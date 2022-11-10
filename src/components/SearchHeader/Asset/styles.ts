import styled from "styled-components";
import { Grid, Typography } from "@mui/material";
import { AssetCategoryEnum } from "../../../api/rest-api";

export const AssetContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* TODO: Try percentages instead of raw px values */
  min-height: 52px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  }
`;

interface SColorBarPropsType {
  $assetCategory: AssetCategoryEnum;
}

export const SColorBar = styled(Typography)<SColorBarPropsType>`
   {
    margin: 0;
    padding: 0;
    background-color: ${({ $assetCategory, theme }) =>
      theme.assetCategoryColors[$assetCategory]};
    min-width: 4px;
    height: 16px;
    margin-top: 8px;
    margin-bottom: 4px;
    margin-right: 8px;
  }
`;

// TODO: get rid of redundant props
export const SAssetLabel = styled(Typography)`
  margin: 0;
  padding: 0;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 4px;
  margin-top: 8px;
`;

// color: ${({ theme }) => theme.colors.textDefault};
