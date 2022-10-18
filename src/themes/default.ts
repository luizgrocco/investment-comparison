import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const getThemeByMode = (
  mode: PaletteMode
): typeof themeDerivedFromLiteral => {
  const themeOnlyLiterals = createTheme({
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
            // palette values for light mode
            primary: {
              main: "#254057",
            },
            secondary: {
              main: "#202a40",
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
            // palette values for dark mode
            primary: {
              main: "#254057",
            },
            secondary: {
              main: "#ffffff",
            },
            text: {
              primary: "#ffffff",
            },
            error: {
              main: "#DF0B0B",
            },
            background: {
              default: "#202a40",
              // paper: "#254057",// TODO: review this change
            },
            info: {
              main: "#27618f",
            },
          }),
    },
    typography: {
      fontFamily: "Open Sans",
    },
  });

  const themeDerivedFromLiteral = createTheme(themeOnlyLiterals, {
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              // backgroundColor: theme.palette.primary.main,
              // color: theme.palette.primary.contrastText,
            },
          },
        },
      },
    },
  });

  return themeDerivedFromLiteral;
};
