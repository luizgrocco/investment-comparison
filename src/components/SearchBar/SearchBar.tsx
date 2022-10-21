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
} from "./styles";
import { fetchSearchAssets } from "../../api/rest-api";

import { useQuery } from "@tanstack/react-query";

export const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef();

  const isEnabled = useMemo(() => searchQuery.length >= 3, [searchQuery]);
  const isNotEmpty = useMemo(() => searchQuery.length > 0, [searchQuery]);

  const { isLoading } = useQuery(
    ["searchBarText", searchQuery],
    fetchSearchAssets,
    {
      staleTime: 24 * 60 * 60 * 1000,
      enabled: isEnabled,
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
        open={Boolean(searchInputRef.current) && true}
        container={searchInputRef.current}
      >
        <SSeachResultsContainer>
          {[0, 1, 2, 3, 4, 5, 6].map((number) => (
            <div key={number}>{number}</div>
          ))}
          {/* {data.map((data, index) => ( // TODO: type api correctly handles this
          <div key={index}>{data}</div>
        ))} */}
        </SSeachResultsContainer>
      </SSearchResults>
    </SSearchBarContainer>
  );
};
