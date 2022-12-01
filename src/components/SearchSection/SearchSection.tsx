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
import { AssetSearchItem } from "./AssetSearchItem/AssetSearchItem";
import { toPairs } from "ramda";

import { useQuery } from "@tanstack/react-query";
import { AssetType, fetchSearchAssets } from "../../api/rest-api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectAsstesFromDefaultPortfolio,
  addAssetToDefaultPortfolio,
  deleteAssetFromDefaultPortfolio,
  deleteAllAssetsFromDefaultPortfolio,
} from "../../redux/reducers";
import { useTranslation } from "react-i18next";

export const SearchSection: React.FC = () => {
  const { t } = useTranslation();
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

  // TODO: Refactor this into a separate hook
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

  const handleAddAsset = (asset: AssetType): void => {
    dispatch(addAssetToDefaultPortfolio(asset));
    setSearchQuery("");
  };

  return (
    <SSearchBarContainer>
      <SSearchInput
        ref={searchInputRef}
        onChange={handleChangeSearchQuery}
        placeholder={t("searchPlaceholder")}
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
        // TODO: Find a better container for this (default is document body), Hint: container:{something.current}
      >
        {isSuccess && !isLoading ? (
          <SSearchResultsContainer>
            {toPairs(data).map(([assetCategory, assets]) => (
              <SCategoriesContainer key={assetCategory}>
                <SCategorySeparatorLine $assetCategory={assetCategory}>
                  {t(`assetCategories.${assetCategory}`)}
                </SCategorySeparatorLine>
                {assets?.map((asset) => (
                  <AssetSearchItem
                    key={asset.identifier}
                    asset={asset}
                    handler={handleAddAsset}
                  />
                ))}
              </SCategoriesContainer>
            ))}
          </SSearchResultsContainer>
        ) : null}
      </SSearchResults>
      <SAssetsContainer>
        {selectedAssets.map((asset) => (
          <SAssetItem key={asset.identifier}>
            <SColorBar $assetCategory={asset.assetCategory} />
            <SAssetLabel>{asset.label}</SAssetLabel>
            <SDeleteAssetButton onClick={handleDeleteAsset(asset.identifier)}>
              <SDeleteAssetIcon />
            </SDeleteAssetButton>
          </SAssetItem>
        ))}
        {hasAssets && (
          <SDeleteAllAssetsButton onClick={handleDeleteAllAssets}>
            <SDeleteLabel>{t("clearAll")}</SDeleteLabel>
          </SDeleteAllAssetsButton>
        )}
      </SAssetsContainer>
    </SSearchBarContainer>
  );
};
