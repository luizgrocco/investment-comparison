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
  SAssetChipItem,
  SColorBar,
} from "./styles";
import { AssetSearchItem } from "./Asset/AssetSearchItem";
import { toPairs } from "ramda";

import { useQuery } from "@tanstack/react-query";
import { fetchSearchAssets } from "../../api/rest-api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectAsstesFromDefaultPortfolio,
  deleteAssetFromDefaultPortfolio,
  deleteAllAssetsFromDefaultPortfolio,
} from "../../redux/reducers";

export const SearchHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef();
  const selectedAssets = useAppSelector(selectAsstesFromDefaultPortfolio);

  const isEnabled = useMemo(() => searchQuery.length >= 3, [searchQuery]);
  const isNotEmpty = useMemo(() => searchQuery.length > 0, [searchQuery]);

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

  const handleDeleteAsset = (id: string | null): void => {
    if (id !== null) {
      dispatch(deleteAssetFromDefaultPortfolio(id));
    }
  };

  // TODO: make this work
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
            {isNotEmpty && (
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
                    />
                  ))}
                </SCategoriesContainer>
              ))
            : null}
        </SSearchResultsContainer>
      </SSearchResults>
      <SAssetsContainer>
        {selectedAssets.map((asset) => (
          <SAssetChipItem
            key={asset.identifier}
            label={asset.label}
            onDelete={() => handleDeleteAsset(asset.identifier)}
          />
        ))}
      </SAssetsContainer>
    </SSearchBarContainer>
  );
};
