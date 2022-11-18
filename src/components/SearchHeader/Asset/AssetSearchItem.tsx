import React from "react";
import { SAssetContainer, SColorBar, SAssetLabel } from "./styles";

import { AssetCategoryEnum, AssetType } from "../../../api/rest-api";

interface AssetComponentType {
  handler: () => void;
  asset: AssetType;
  assetCategory: AssetCategoryEnum;
}

export const AssetSearchItem: React.FC<AssetComponentType> = ({
  handler,
  asset,
  assetCategory,
}) => {
  return (
    <SAssetContainer onClick={handler}>
      <SColorBar $assetCategory={assetCategory} />
      <SAssetLabel>{asset.label}</SAssetLabel>
    </SAssetContainer>
  );
};
