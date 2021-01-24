import React from "react";
import { Grid } from "@material-ui/core";

import UIButton from "components/UI/Button";
import UITextField from "components/UI/TextField";
import MainModal from "..";

export default function NewPatient({ show, onClose }) {
  return (
    <MainModal show={show} onClose={onClose} title="Novo Paciente">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <UITextField label="Nome" fullWidth />
        </Grid>
        <Grid item xs={12} md={4}>
          <UITextField label="CPF" fullWidth />
        </Grid>
        <Grid item xs={12} md={4}>
          <UIButton fullWidth>Cadastrar</UIButton>
        </Grid>
      </Grid>
    </MainModal>
  );
}
