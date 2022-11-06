import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import { ThemeProvider } from "styled-components";
import { colors } from "./assets/styles/theme";


function App() {
  return (
    <ThemeProvider theme={colors}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
