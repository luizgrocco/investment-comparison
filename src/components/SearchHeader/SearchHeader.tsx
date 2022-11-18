import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  SCircularProgress,
  SClearIcon,
  SIconButton,
  SSearchResultsContainer,
  SSearchBarContainer,
  SSearchIcon,
  SSearchInput,
  SSearchResults,
  SCategoriesContainer,
  SCategorySeparatorLine,
  SAssetsContainer,
  SAssetItem,
  SColorBar,
  SAssetLabel,
  SDeleteAllAssetsButton,
  SDeleteLabel,
  SDeleteAssetButton,
  SDeleteAssetIcon,
} from "./styles";
import { AssetSearchItem } from "./Asset/AssetSearchItem";
import { toPairs } from "ramda";

import { useQuery } from "@tanstack/react-query";
import {
  AssetCategoryEnum,
  AssetType,
  fetchSearchAssets,
} from "../../api/rest-api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectAsstesFromDefaultPortfolio,
  addAssetToDefaultPortfolio,
  deleteAssetFromDefaultPortfolio,
  deleteAllAssetsFromDefaultPortfolio,
} from "../../redux/reducers";

export const SearchHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef();
  const selectedAssets = useAppSelector(selectAsstesFromDefaultPortfolio);

  const isEnabled = useMemo(() => searchQuery.length >= 3, [searchQuery]);
  const searchQueryNotEmpty = useMemo(
    () => searchQuery.length > 0,
    [searchQuery]
  );
  const hasAssets = useMemo(() => selectedAssets.length > 0, [selectedAssets]);

  const { data, isLoading, isSuccess } = useQuery(
    ["searchBarText", searchQuery],
    fetchSearchAssets,
    {
      enabled: isEnabled,
      cacheTime: 1 * 60 * 1000,
    }
  );

  const handleChangeSearchQuery: ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    setSearchQuery(event.target.value);
  };

  const handleClearClick: MouseEventHandler<HTMLButtonElement> = (): void =>
    setSearchQuery("");

  const handleDeleteAsset = (id: string | null) => (): void => {
    dispatch(deleteAssetFromDefaultPortfolio(id));
  };

  const handleDeleteAllAssets = (): void => {
    dispatch(deleteAllAssetsFromDefaultPortfolio());
  };

  const handleAddAsset = (asset: AssetType) => (): void => {
    dispatch(addAssetToDefaultPortfolio(asset));
    setSearchQuery("");
  };

  // TODO: Prevent input from highlighting when assets are hovered
  // const handleOnHover: React.MouseEventHandler<HTMLDivElement> = (
  //   event
  // ): void => {
  //   event.stopPropagation();
  // };

  return (
    <SSearchBarContainer>
      <SSearchInput
        ref={searchInputRef}
        onChange={handleChangeSearchQuery}
        placeholder="Search"
        fullWidth
        autoFocus
        value={searchQuery}
        startAdornment={<SSearchIcon />}
        endAdornment={
          <>
            {isLoading && isEnabled && <SCircularProgress />}
            {searchQueryNotEmpty && (
              <SIconButton onClick={handleClearClick}>
                <SClearIcon />
              </SIconButton>
            )}
          </>
        }
      />
      <SSearchResults
        anchorEl={searchInputRef.current}
        open={Boolean(searchInputRef.current) && isEnabled && isSuccess}
        container={searchInputRef.current}
      >
        <SSearchResultsContainer>
          {isSuccess && !isLoading
            ? toPairs(data).map(([assetCategory, assets]) => (
                <SCategoriesContainer key={assetCategory}>
                  <SCategorySeparatorLine $assetCategory={assetCategory}>
                    {/* TODO: TRANSLATION using the assetCategory as key */}
                    {assetCategory}
                  </SCategorySeparatorLine>
                  {assets?.map((asset) => (
                    <AssetSearchItem
                      key={asset.identifier}
                      asset={asset}
                      assetCategory={assetCategory}
                      handler={handleAddAsset(asset)}
                    />
                  ))}
                </SCategoriesContainer>
              ))
            : null}
        </SSearchResultsContainer>
      </SSearchResults>
      <SAssetsContainer>
        {selectedAssets.map((asset) => (
          <SAssetItem key={asset.identifier}>
            {/* FIXME: THIS CASTING IS ABSOLUTELY WRONG, BECAUSE ASSET TYPES CAN BE "FI" OR "FII" for example */}
            <SColorBar $assetCategory={asset.assetType as AssetCategoryEnum} />
            <SAssetLabel>{asset.label}</SAssetLabel>
            <SDeleteAssetButton onClick={handleDeleteAsset(asset.identifier)}>
              <SDeleteAssetIcon />
            </SDeleteAssetButton>
          </SAssetItem>
        ))}
        {hasAssets && (
          <SDeleteAllAssetsButton onClick={handleDeleteAllAssets}>
            <SDeleteLabel>Limpar todos</SDeleteLabel>
          </SDeleteAllAssetsButton>
        )}
      </SAssetsContainer>
    </SSearchBarContainer>
  );
};
