import React from "react";
import { Grid } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import UIButton from "components/UI/Button";
import UISelect from "components/UI/Select";
import UITextField from "components/UI/TextField";
import MainModal from "..";

export default function NewActivity({ show, onClose }) {
  return (
    <MainModal show={show} onClose={onClose} title="Nova Atividade">
      <Grid container spacing={2} justify="flex-end">
        <Grid item xs={12}>
          <Autocomplete
            size="small"
            options={[]}
            getOptionLabel={(option) => option.title}
            fullWidth
            renderInput={(params) => (
              <UITextField
                {...params}
                autocomplete
                placeholder="Busque o paciente por nome ou cpf"
                label="Paciente"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <UITextField
            fullWidth
            label="Data de vencimento"
            type="date"
            defaultValue={new Date().toISOString()}
            onChange={(e) => console.log(e)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <UISelect fullWidth label="Status" options={statusOptions} />
        </Grid>
        <Grid item xs={12}>
          <UITextField fullWidth label="Atividade" multiline rows={3} />
        </Grid>
        <Grid item>
          <UIButton>Cadastrar</UIButton>
        </Grid>
      </Grid>
    </MainModal>
  );
}

const statusOptions = [
  { text: "Aberto", value: "Aberto" },
  { text: "Finalizado", value: "Finalizado" },
  { text: "Atrasado", value: "Atrasado" },
];
