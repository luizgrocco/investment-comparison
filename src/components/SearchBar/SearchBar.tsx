import React, { ChangeEventHandler, useState } from "react";
import {
  SSearchBarContainer,
  SSearchInput,
  SSearchIcon,
  SClearIcon,
} from "./styles";

export const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeSearchQuery: ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    console.log({ event });
    setSearchQuery(event.target.value);
  };

  return (
    <SSearchBarContainer>
      <SSearchInput
        onChange={handleChangeSearchQuery}
        placeholder="Search"
        fullWidth
        autoFocus
        value={searchQuery}
        startAdornment={<SSearchIcon />}
        endAdornment={<SClearIcon />}
      />
    </SSearchBarContainer>
  );
};
