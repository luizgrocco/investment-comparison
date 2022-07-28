import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "./themes";

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  console.log("prefersDarkMode", prefersDarkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>Hello!</div>
    </ThemeProvider>
  );
};

export default App;
