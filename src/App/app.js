import React from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";

import { Router } from "react-router";
import Routes from "routes/index";

import history from "routes/history";

import "./global.css";

export default function App() {
  const theme = createMuiTheme(
    {
      typography: {
        fontFamily: "Montserrat",
      },
      palette: {
        primary: {
          main: "#49c5b1",
        },
      },
    },
    ptBR
  );

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}
