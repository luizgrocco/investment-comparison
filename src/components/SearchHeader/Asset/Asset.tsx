import React from "react";
import { AssetContainer } from "./styles";

import { AssetType } from "../../../api/rest-api";

import { addAssetToDefaultPortfolio } from "./../../../redux/reducers";
import { useAppDispatch } from "../../../redux/hooks";

interface AssetComponentType {
  asset: AssetType;
}

export const Asset: React.FC<AssetComponentType> = ({ asset }) => {
  const dispatch = useAppDispatch();

  const addAsset = (): void => {
    dispatch(addAssetToDefaultPortfolio(asset));
  };

  return <AssetContainer onClick={addAsset}>{asset.label}</AssetContainer>;
};
