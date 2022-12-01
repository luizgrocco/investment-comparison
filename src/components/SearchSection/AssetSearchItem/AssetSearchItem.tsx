import React from "react";
import { SAssetContainer, SColorBar, SAssetLabel } from "./styles";

import { AssetType } from "../../../api/rest-api";

interface AssetComponentType {
  handler: (asset: AssetType) => void;
  asset: AssetType;
}

export const AssetSearchItem: React.FC<AssetComponentType> = ({
  handler,
  asset,
}) => {
  return (
    <SAssetContainer onClick={() => handler(asset)}>
      <SColorBar $assetCategory={asset.assetCategory} />
      <SAssetLabel>{asset.label}</SAssetLabel>
    </SAssetContainer>
  );
};
