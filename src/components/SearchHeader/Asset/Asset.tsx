import React from "react";
import { AssetContainer } from "./styles";

import { AssetType } from "../../../api/rest-api";

interface AssetComponentType {
  asset: AssetType;
}

export const Asset: React.FC<AssetComponentType> = ({ asset }) => {
  return <AssetContainer>{asset.label}</AssetContainer>;
};
