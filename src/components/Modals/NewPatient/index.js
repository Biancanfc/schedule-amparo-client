import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import * as yup from "yup";
import { useFormik } from "formik";
import InputMask from "react-input-mask";

import UIButton from "components/UI/Button";
import UITextField from "components/UI/TextField";
import MainModal from "..";

import api from "services/api";
import { StateContext } from "context";
import { useEffect } from "react";

const validationSchema = yup.object().shape({
  name: yup.string().required("Digite o nome"),
  cpf: yup.string().required("Digite o cpf").cpf("CPF inválido"),
});

export default function NewPatient({ show, onClose }) {
  const {
    actions: { setAlert },
  } = useContext(StateContext);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      cpf: "",
    },
    validationSchema,
    async onSubmit(data) {
      try {
        await api.post(`patient`, data);

        setAlert({
          message: "Paciente criado com sucesso!",
          severity: "success",
          show: true,
        });

        onClose();
      } catch (error) {
        setAlert({
          message: "Paciente com esse CPF já foi registrado!",
          severity: "error",
          show: true,
        });
      }
    },
  });

  useEffect(() => {
    if (!show) {
      resetForm({ name: "", cpf: "" });
    }
  }, [show, resetForm]);

  return (
    <MainModal show={show} onClose={onClose} title="Novo Paciente">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <UITextField
              label="Nome"
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              error={touched.name && errors.name}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputMask
              onChange={handleChange("cpf")}
              onBlur={handleBlur("cpf")}
              value={values.cpf}
              mask={"999.999.999-99"}
              maskChar=" "
            >
              {() => (
                <UITextField
                  label="CPF"
                  error={touched.cpf && errors.cpf}
                  fullWidth
                />
              )}
            </InputMask>
          </Grid>
          <Grid item xs={12} md={4}>
            <UIButton type="submit" fullWidth>
              Cadastrar
            </UIButton>
          </Grid>
        </Grid>
      </form>
    </MainModal>
  );
}
