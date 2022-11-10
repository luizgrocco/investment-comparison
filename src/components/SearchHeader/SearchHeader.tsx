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
  SSeachResultsContainer,
  SSearchBarContainer,
  SSearchIcon,
  SSearchInput,
  SSearchResults,
  SCategorySeparatorLine,
} from "./styles";
import { Asset } from "./Asset/Asset";
import { toPairs } from "ramda";

import { useQuery } from "@tanstack/react-query";
import { fetchSearchAssets } from "../../api/rest-api";

export const SearchHeader: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef();

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
        open={Boolean(searchInputRef.current) && isEnabled}
        container={searchInputRef.current}
      >
        <SSeachResultsContainer>
          {isSuccess && !isLoading ? (
            toPairs(data).map(([assetCategory, assets]) => (
              <React.Fragment key={assetCategory}>
                <SCategorySeparatorLine $assetCategory={assetCategory}>
                  {/* TODO: TRANSLATION using the assetCategory as key */}
                  {assetCategory}
                </SCategorySeparatorLine>
                {assets?.map((asset) => (
                  <Asset
                    key={asset.identifier}
                    asset={asset}
                    assetCategory={assetCategory}
                  />
                ))}
              </React.Fragment>
            ))
          ) : (
            <SCircularProgress />
          )}
        </SSeachResultsContainer>
      </SSearchResults>
    </SSearchBarContainer>
  );
};
