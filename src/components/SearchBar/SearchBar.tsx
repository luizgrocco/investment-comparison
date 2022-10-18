import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useMemo,
  useState,
} from "react";
import {
  SSearchBarContainer,
  SSearchInput,
  SSearchIcon,
  SClearIcon,
  SCircularProgress,
  SIconButton,
  SSearchResults,
} from "./styles";
import { fetchAssets } from "../../api/rest-api";

import { useQuery } from "@tanstack/react-query";

export const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const isEnabled = useMemo(() => searchQuery.length >= 3, [searchQuery]);
  const isNotEmpty = useMemo(() => searchQuery.length > 0, [searchQuery]);

  const { isLoading } = useQuery(["searchBarText", searchQuery], fetchAssets, {
    enabled: isEnabled,
  });

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
      <SSearchResults>
        {/* {data.map((data, index) => ( // TODO: type api correctly handles this
          <div key={index}>{data}</div>
        ))} */}
      </SSearchResults>
    </SSearchBarContainer>
  );
};
