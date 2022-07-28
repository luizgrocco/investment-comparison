import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
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
  },
  typography: {
    fontFamily: "Open Sans",
  },
});
