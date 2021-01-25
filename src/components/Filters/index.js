import React from "react";
import {
  AppBar,
  Box,
  Dialog,
  Grid,
  Hidden,
  IconButton,
  Slide,
  Toolbar,
} from "@material-ui/core";
import InputMask from "react-input-mask";

import UISelect from "components/UI/Select";
import UITextField from "components/UI/TextField";
import UIButton from "components/UI/Button";

import { useStyles } from "./style";
import { formatToCPF } from "brazilian-values";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import UIText from "components/UI/Text";
import { IoMdClose } from "react-icons/io";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Filters({ params, submitFilter }) {
  const [activityParams, setActivityParams] = useState(params);

  const classes = useStyles();

  const [filterModal, setFilterModal] = useState(false);

  const handleFilterModal = () => {
    setFilterModal(!filterModal);
  };

  const handleChangeParams = (e) => {
    const { name } = e.target;
    let value = e.target.value;

    if (name === "cpf" && formatToCPF(value).length !== 14) {
      if (activityParams["cpf"] === null) return;
      value = null;
    }

    if ((value || "").length === 0) value = null;

    return setActivityParams((params) => {
      return {
        ...params,
        [name]: value,
      };
    });
  };

  const SectionFilter = ({ onClose }) => {
    return (
      <Grid container spacing={2} justify="center" className={classes.filter}>
        <Grid item xs={12} sm={4} md={3}>
          <InputMask
            onChange={handleChangeParams}
            mask={"999.999.999-99"}
            maskChar=" "
            value={activityParams.cpf}
          >
            {() => <UITextField label="CPF do Paciente" fullWidth name="cpf" />}
          </InputMask>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <UISelect
            label="Status do Aprazamento"
            fullWidth
            name="status"
            options={statusOptions}
            onChange={handleChangeParams}
            value={activityParams.status}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <UITextField
            fullWidth
            type="date"
            name="dueDate"
            onChange={handleChangeParams}
            value={activityParams.dueDate}
          />
        </Grid>
        <Grid item xs={12} md={3} lg={2}>
          <UIButton
            fullWidth
            onClick={() => {
              submitFilter(activityParams);
              if (onClose) onClose();
            }}
          >
            Filtrar
          </UIButton>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Hidden smUp>
        <Grid container justify="flex-end">
          <IconButton onClick={handleFilterModal}>
            <FaFilter size={20} color="var(--primary)" />
          </IconButton>
          <Dialog
            fullScreen
            open={filterModal}
            onClose={handleFilterModal}
            TransitionComponent={Transition}
          >
            <AppBar>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="close"
                  onClick={handleFilterModal}
                >
                  <IoMdClose size={20} />
                </IconButton>
                <UIText>Filtros</UIText>
              </Toolbar>
            </AppBar>
            <Box pt={5} mt={2} px={3} height="100%">
              <SectionFilter onClose={handleFilterModal} />
            </Box>
          </Dialog>
        </Grid>
      </Hidden>
      <Hidden xsDown>
        <SectionFilter />
      </Hidden>
    </>
  );
}

const statusOptions = [
  { text: "Todos", value: "" },
  { text: "Aberto", value: "Aberto" },
  { text: "Finalizado", value: "Finalizado" },
  { text: "Atrasado", value: "Atrasado" },
];
