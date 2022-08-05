import React, { useEffect, useMemo } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getThemeByMode } from "./themes";
import App from "./App";
import { FloatDevTools } from "./components";
import useMediaQuery from "@mui/material/useMediaQuery";
import { setThemeMode, selectThemeMode } from "./redux/reducers";
import { useEffectOnce, useLocalStorage } from "react-use";
import { useAppSelector, useAppDispatch } from "./redux/hooks";

const AppInitializer: React.FC = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const selectedTheme = useAppSelector(selectThemeMode);
  const dispatch = useAppDispatch();
  const [cachedDarkMode, setCachedDarkMode] = useLocalStorage<unknown>(
    "darkMode",
    undefined
  );

  useEffectOnce(() => {
    dispatch(
      setThemeMode(
        cachedDarkMode === "dark" || cachedDarkMode === "light"
          ? cachedDarkMode
          : prefersDarkMode
          ? "dark"
          : "light"
      )
    );
  });

  const mode = useMemo(() => {
    if (selectedTheme) {
      // If the user has selected a theme mode, use that.
      return selectedTheme;
    } else if (cachedDarkMode === "dark" || cachedDarkMode === "light") {
      // Otherwise, use the cached theme mode if valid.
      return cachedDarkMode;
    } else {
      // Otherwise, use the system default.
      return prefersDarkMode ? "dark" : "light";
    }
  }, [selectedTheme, cachedDarkMode, prefersDarkMode]);

  useEffect(() => {
    setCachedDarkMode(mode);
  }, [mode, setCachedDarkMode]);

  const theme = useMemo(() => createTheme(getThemeByMode(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FloatDevTools />
      <App />
    </ThemeProvider>
  );
};

export default AppInitializer;
