import React, { useEffect, useState, useContext } from "react";
import { Grid } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import * as yup from "yup";
import { useFormik } from "formik";
import { matchSorter } from "match-sorter";

import UIButton from "components/UI/Button";
import UISelect from "components/UI/Select";
import UITextField from "components/UI/TextField";
import MainModal from "..";

import { StateContext } from "context";
import api from "services/api";

const validationSchema = yup.object().shape({
  patient: yup.object().required("Selecione um paciente").nullable(),
  dueDate: yup.string().required("Selecione a date de vencimento").nullable(),
  status: yup.string().required("Selecione o status"),
  activity: yup.string().required("Digite a atividade"),
});

export default function NewActivity({ show, onClose, refresh }) {
  const {
    actions: { setAlert },
  } = useContext(StateContext);

  const [patients, setPatients] = useState([]);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      patient: "",
      dueDate: "",
      status: "",
      activity: "",
    },
    validationSchema,
    async onSubmit(data) {
      try {
        await api.post(`activity`, data);

        setAlert({
          message: "Atividade criada com sucesso!",
          severity: "success",
          show: true,
        });

        onClose();
        refresh();
      } catch (error) {
        setAlert({
          message: "Não foi possível criar a atividade",
          severity: "error",
          show: true,
        });
      }
    },
  });

  useEffect(() => {
    if (!show) {
      resetForm({ patient: "", dueDate: "", status: "", activity: "" });
    }
  }, [show, resetForm]);

  useEffect(() => {
    if (show)
      (async function getPatients() {
        try {
          const { data } = await api.get(`patient`);

          setPatients(data);
        } catch (error) {
          setAlert({
            message: "Não foi possível consultar os pacientes",
            severity: "error",
            show: true,
          });
        }
      })();
  }, [show]);

  return (
    <MainModal show={show} onClose={onClose} title="Nova Atividade">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Grid container spacing={2} justify="flex-end">
          <Grid item xs={12}>
            <Autocomplete
              size="small"
              options={patients}
              getOptionLabel={(option) => option.name}
              getOptionSelected={(option) => option === values.patient}
              onChange={(_, value) => setFieldValue("patient", value)}
              filterOptions={(options, { inputValue }) =>
                matchSorter(options, inputValue, { keys: ["name", "cpf"] })
              }
              renderInput={(params) => (
                <UITextField
                  {...params}
                  placeholder="Busque o paciente por nome ou cpf"
                  label="Paciente"
                  error={touched.patient && errors.patient}
                  onBlur={handleBlur("patient")}
                />
              )}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <UITextField
              fullWidth
              label="Data de vencimento"
              type="date"
              value={values.dueDate}
              InputLabelProps={{
                shrink: true,
              }}
              error={touched.dueDate && errors.dueDate}
              onBlur={handleBlur("dueDate")}
              onChange={handleChange("dueDate")}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <UISelect
              fullWidth
              label="Status"
              options={statusOptions}
              error={touched.status && errors.status}
              onBlur={handleBlur("status")}
              onChange={handleChange("status")}
              value={values.status}
            />
          </Grid>
          <Grid item xs={12}>
            <UITextField
              fullWidth
              label="Atividade"
              multiline
              rows={3}
              value={values.activity}
              error={touched.activity && errors.activity}
              onBlur={handleBlur("activity")}
              onChange={handleChange("activity")}
            />
          </Grid>
          <Grid item>
            <UIButton type="submit">Cadastrar</UIButton>
          </Grid>
        </Grid>
      </form>
    </MainModal>
  );
}

const statusOptions = [
  { text: "Aberto", value: "Aberto" },
  { text: "Finalizado", value: "Finalizado" },
  { text: "Atrasado", value: "Atrasado" },
];
