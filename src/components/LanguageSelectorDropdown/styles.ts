import styled from "styled-components";
import { Grid, Select, FormControl, InputLabel } from "@mui/material";
export { MenuItem as SLanguageItem } from "@mui/material";

export const SLanguageSelectorContainer = styled(Grid)``;

export const SFormControl = styled(FormControl)`
  margin-top: 6px;
  margin-right: 10px;
  margin-left: 2px;
`;

export const SLanguageLabel = styled(InputLabel)`
  font-size: 15px;
`;

export const SLanguageDropdown = styled(Select)`
  font-size: 14px;
  height: 29px;
`;

// FIXME: Dark mode text color is impossible to read
