import { PaletteMode } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

export const getThemeByMode = (mode: PaletteMode): ThemeOptions => ({
  assetColors: [
    "#2E56A2",
    "#6C6C6C",
    "#48BCC9",
    "#3F7222",
    "#531394",
    "#CFE9EB",
    "#C9C9C9",
    "#8ED1E5",
    "#DCFFC7",
    "#D1B7EB",
    "#BAD4FF",
    "#74A2ED",
    "#939393",
    "#A456F4",
    "#ADE38E",
    "#BAD8FF",
    "#1F2A4D",
    "#6F27B8",
    "#4B4B4B",
    "#81C25C",
  ],
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // pallete values for light mode
          primary: {
            main: "#254057",
          },
          secondary: {
            main: "#000000",
          },
          text: {
            primary: "#343A40",
          },
          error: {
            main: "#DF0B0B",
          },
          background: {
            default: "#ffffff",
          },
          info: {
            main: "#27618f",
          },
        }
      : {
          // pallete values for dark mode
          text: {
            primary: "#ffffff",
          },
          background: {
            default: "#202a40",
          },
        }),
  },
  typography: {
    fontFamily: "Open Sans",
  },
});
