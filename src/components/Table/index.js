import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from "@material-ui/core";

import { formatDate } from "utils";
import { StyledTableCell } from "./style";
import UISelect from "components/UI/Select";

export default function TableActivity({ data = [], editActivity }) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Paciente</StyledTableCell>
            <StyledTableCell>CPF</StyledTableCell>
            <StyledTableCell>Data</StyledTableCell>
            <StyledTableCell>Atividade</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ _id, patient, dueDate, activity, status }) => (
            <TableRow key={_id}>
              <StyledTableCell component="th" scope="row">
                {patient.name}
              </StyledTableCell>
              <StyledTableCell>{patient.cpf}</StyledTableCell>
              <StyledTableCell>{formatDate(dueDate)}</StyledTableCell>
              <StyledTableCell>{activity}</StyledTableCell>
              <StyledTableCell>
                <UISelect
                  width="120px"
                  value={status}
                  options={statusOptions}
                  onChange={({ target }) =>
                    editActivity({
                      status: target.value,
                      _id,
                      patient,
                      dueDate,
                      activity,
                    })
                  }
                  noOutlined
                  istable="true"
                />
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const statusOptions = [
  { text: "Aberto", value: "Aberto" },
  { text: "Finalizado", value: "Finalizado" },
  { text: "Atrasado", value: "Atrasado" },
];
