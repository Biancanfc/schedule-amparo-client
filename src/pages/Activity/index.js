import React from "react";
import { Box, Container, Grid } from "@material-ui/core";

import UIButton from "components/UI/Button";
import UIText from "components/UI/Text";
import UITextField from "components/UI/TextField";
import UISelect from "components/UI/Select";
import TableActivity from "components/Table";
import NewPatient from "components/Modals/NewPatient";
import NewActivity from "components/Modals/NewActivity";

import { StyledTop, SectionFilter } from "./style";
import { Pagination } from "@material-ui/lab";

export default function Activity() {
  return (
    <>
      <StyledTop>
        <Container>
          <Grid container justify="space-between">
            <Grid item>
              <UIText>Lista de Atividades</UIText>
              <UIText fontsize="12px">Início {">"} Lista de Atividades</UIText>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <UIButton>Novo Paciente</UIButton>
                </Grid>
                <Grid item>
                  <UIButton>Nova Atividade</UIButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledTop>
      <SectionFilter>
        <Container>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <UITextField label="CPF do Paciente" width="220px" />
            </Grid>
            <Grid item>
              <UISelect label="Status do Aprazamento" width="220px" />
            </Grid>
            <Grid item>
              <UITextField width="220px" type="date" />
            </Grid>
            <Grid item>
              <UIButton>Filtrar</UIButton>
            </Grid>
          </Grid>
        </Container>
      </SectionFilter>
      <Container>
        <TableActivity />
        <Box py={2} display="flex" justifyContent="center">
          <Pagination count={10} shape="rounded" size="small" />
        </Box>
      </Container>

      {/* modals patient and activity */}
      <NewPatient />
      <NewActivity />
    </>
  );
}
