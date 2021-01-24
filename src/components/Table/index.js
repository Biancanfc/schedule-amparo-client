import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from "@material-ui/core";

import { StyledTableCell } from "./style";

export default function TableActivity({ rows = [] }) {
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
          {rows.map(({ _id, patient, dueDate, activity, status }) => (
            <TableRow key={_id}>
              <StyledTableCell component="th" scope="row">
                {patient.name}
              </StyledTableCell>
              <StyledTableCell>{patient.cpf}</StyledTableCell>
              <StyledTableCell>{dueDate}</StyledTableCell>
              <StyledTableCell>{activity}</StyledTableCell>
              <StyledTableCell>{status}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
