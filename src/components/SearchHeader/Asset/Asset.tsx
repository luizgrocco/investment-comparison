import React from "react";
import { AssetContainer, SColorBar, SAssetLabel } from "./styles";

import { AssetCategoryEnum, AssetType } from "../../../api/rest-api";

import { addAssetToDefaultPortfolio } from "./../../../redux/reducers";
import { useAppDispatch } from "../../../redux/hooks";

interface AssetComponentType {
  asset: AssetType;
  assetCategory: AssetCategoryEnum;
}

export const Asset: React.FC<AssetComponentType> = ({
  asset,
  assetCategory,
}) => {
  const dispatch = useAppDispatch();

  const addAsset = (): void => {
    dispatch(addAssetToDefaultPortfolio(asset));
  };

  return (
    <AssetContainer onClick={addAsset}>
      <SColorBar $assetCategory={assetCategory} />
      <SAssetLabel>{asset.label}</SAssetLabel>
    </AssetContainer>
  );
};
