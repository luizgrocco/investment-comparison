/// <reference types="react-scripts" />

import { ThemeOptions, Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  export interface Theme {
    assetColors: string[];
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    assetColors?: string[];
  }
}
