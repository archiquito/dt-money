import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { GlobalStyle } from "./styles/global.ts";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
    <App />
    <GlobalStyle />
    </ThemeProvider>
  </StrictMode>
);