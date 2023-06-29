import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { theme } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
        <CssBaseline />
      </ThemeProvider>
    </React.StrictMode>
  </>
);
