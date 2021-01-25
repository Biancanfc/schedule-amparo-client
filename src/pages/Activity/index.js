import React, { useState, useEffect, useContext } from "react";
import { AppBar, Box, Container, Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { FaFilter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import UIButton from "components/UI/Button";
import UIText from "components/UI/Text";
import TableActivity from "components/Table";
import NewPatient from "components/Modals/NewPatient";
import NewActivity from "components/Modals/NewActivity";

import { StyledTop, SectionFilter } from "./style";
import { StateContext } from "context";
import api from "services/api";
import Filters from "components/Filters";

export default function Activity() {
  const {
    actions: { setAlert },
  } = useContext(StateContext);

  const [newPatient, setNewPatient] = useState(false);
  const [newActivity, setNewActivity] = useState(false);

  const [skipGetActivities, setSkipGetActivities] = useState(0);
  const [activities, setActivities] = useState([]);
  const [activityParams, setActivityParams] = useState({});

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    (async function getActivities() {
      try {
        const { data } = await api.get(`activity`, {
          params: {
            ...activityParams,
            skip: skipGetActivities,
            limit: 5,
          },
        });

        setActivities(data);
      } catch (error) {
        setAlert({
          message: "Não foi possível consultar os pacientes",
          severity: "error",
          show: true,
        });
      }
    })();
  }, [activityParams, skipGetActivities]);

  const handleNewPatient = () => {
    setNewPatient(!newPatient);
  };

  const handleNewActivity = () => {
    setNewActivity(!newActivity);
  };

  const editActivity = async (data) => {
    try {
      await api.patch(`activity/${data._id}`, data);

      const newActivities = activities;
      newActivities[activities.findIndex(({ _id }) => _id === data._id)] = data;

      setActivities(newActivities);
      setRefresh(!refresh);
    } catch (error) {
      setAlert({
        message: "Não foi possível alterar o status da atividade",
        severity: "error",
        show: true,
      });
    }
  };

  return (
    <>
      <StyledTop>
        <Container>
          <Grid container justify="space-between" spacing={2}>
            <Grid item xs={12} md={6}>
              <UIText>Lista de Atividades</UIText>
              <UIText fontSize="12px">Início {">"} Lista de Atividades</UIText>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <UIButton onClick={handleNewPatient} fullWidth>
                    Novo Paciente
                  </UIButton>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <UIButton onClick={handleNewActivity} fullWidth>
                    Nova Atividade
                  </UIButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledTop>
      <SectionFilter>
        <Container>
          <Filters
            params={activityParams}
            submitFilter={(data) => setActivityParams(data)}
          />
        </Container>
      </SectionFilter>
      <Container>
        <Box minHeight="400px" display="flex" pt={2}>
          <TableActivity data={activities.data} editActivity={editActivity} />
        </Box>
        <Box display="flex" justifyContent="center" pb={5}>
          <Pagination
            color="primary"
            count={Math.ceil(activities.total / 5)}
            onChange={(_, page) => setSkipGetActivities((page - 1) * 5)}
            shape="rounded"
            size="small"
          />
        </Box>
      </Container>

      {/* <Dialog
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
          <Filters
            submitFilter={(data) => {
              setActivityParams(data);
              handleFilterModal();
            }}
            params={activityParams}
          />
        </Box>
      </Dialog> */}

      {/* modals patient and activity */}
      <NewPatient show={newPatient} onClose={() => handleNewPatient()} />
      <NewActivity show={newActivity} onClose={() => handleNewActivity()} />
    </>
  );
}
