/// <reference types="react-scripts" />
import { ThemeOptions, Theme } from "@mui/material/styles";
import { AssetCategoryEnum } from "./api/rest-api";

declare module "@mui/material/styles" {
  export interface Theme {
    assetColors: string[];
    assetCategoryColors: Partial<Record<AssetCategoryEnum, string>>;
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    assetColors?: string[];
    assetCategoryColors?: Partial<Record<AssetCategoryEnum, string>>;
  }
}
