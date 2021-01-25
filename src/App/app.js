import React from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";

import { Router } from "react-router";
import Routes from "routes/index";

import history from "routes/history";
import { Context } from "context";

import "./global.css";

export default function App() {
  const theme = createMuiTheme(
    {
      typography: {
        fontFamily: "Montserrat",
      },
      palette: {
        primary: {
          main: "#1fa83c",
        },
      },
    },
    ptBR
  );

  return (
    <ThemeProvider theme={theme}>
      <Context>
        <Router history={history}>
          <Routes />
        </Router>
      </Context>
    </ThemeProvider>
  );
}
