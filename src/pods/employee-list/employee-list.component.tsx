import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { Employee } from './employee-list.vm';

interface Props {
  list: Employee[];
  onSelect: (id: number) => void;
}

export const EmployeeList: React.FC<Props> = props => {
  const { list, onSelect } = props;
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">Activo</TableCell>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Fecha último incurrido</TableCell>
              <TableCell align="right">Comandos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <Checkbox checked={false} disabled />
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.website}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => onSelect(row.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => console.log('on Delete: ${row.id}')}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
