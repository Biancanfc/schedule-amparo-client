import React from "react";
import { AppBar, Box, Container, Toolbar } from "@material-ui/core";

import logo from "assets/images/logo.png";

import UIText from "components/UI/Text";
import { Underline } from "./style";

export default function Navbar() {
  return (
    <AppBar position="static" color="inherit">
      <Container>
        <Toolbar variant="dense" disableGutters>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            py={1}
          >
            <Box display="flex" alignItems="center">
              <img src={logo} alt="amparo" width={50} />
              <UIText>Amparo Saúde</UIText>
            </Box>
            <UIText component="div" fontSize="14px">
              <i>Atividades</i>
              <Underline />
            </UIText>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
