import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "./themes";
import gigi from "./assets/gigi.png";

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  console.log("prefersDarkMode", prefersDarkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          Oi Giovanna, vc é minha 🦒inha!
        </div>
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <img src={gigi} alt="Imagem da Girafinha" width={500} height={500} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
