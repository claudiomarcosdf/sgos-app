import React from 'react';

import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';

import { formatCurrency } from '../../helper/util';
import { columnsCSV } from './fieldsToExport';

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import ExportExcel from 'components/ExportExcel/ExportExcel';

const styles = {
  root: {
    '& .MuiTableCell-head': {
      color: '#1663BE', //'#ab47bc'
      opacity: 1,
      fontSize: '1em',
      fontWeight: 300,
      //transform: 'rotate(-90deg)'
    },
  },
  footer: {
    '& .MuiTableCell-footer': {
      color: '#1663BE', //'#574b90'
      fontSize: '1.2em',
      fontWeight: 500,
    },
  },
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0',
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF',
    },
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1',
    },
  },
  headTable: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const columns = [
  { name: 'O.S º', align: 'left' },
  { name: 'Data' },
  { name: 'Executor' },
  { name: 'Preventiva' },
  { name: 'Corretiva' },
  { name: 'Cancelada' },
  { name: 'Retorno' },
  { name: 'Total R$', align: 'right' },
];

function TabelaGastos(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const { rows, prefixo } = props;

  const totalGeral = formatCurrency(
    rows.reduce((acc, curr) => acc + curr.total, 0),
    true
  );

  return (
    <>
      <Card>
        <CardHeader color="dark">
          <div className={classes.headTable}>
            <div>
              <h4 className={classes.cardTitleWhite}>
                Gastos com manutenções da viatura
              </h4>
              <p className={classes.cardCategoryWhite}>
                Somatório de gastos por ordem de serviço
              </p>
            </div>
            <div style={{ marginTop: '5px' }}>
              {rows.length > 0 && (
                <ExportExcel
                  headers={columnsCSV}
                  data={rows}
                  fileName={`Gastos da viatura ${prefixo}`}
                />
              )}
            </div>
          </div>
        </CardHeader>
        <CardBody>
          {rows.length > 0 ? (
            <Table>
              <TableHead>
                <TableRow className={classes.root}>
                  <TableCell align="center" colSpan={3}>
                    Dados da O.S
                  </TableCell>
                  <TableCell align="center" colSpan={5}>
                    Detalhes da manutenção
                  </TableCell>
                </TableRow>
                <TableRow className={classes.root}>
                  {columns.map((column, i) => (
                    <TableCell
                      key={i}
                      align={column?.align ? column?.align : 'center'}
                    >
                      {column.name}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => {
                  const colCanceladaColor =
                    row.cancelada == 'Sim'
                      ? {
                          color: '#ff5e57',
                        }
                      : {};

                  return (
                    <TableRow hover key={i}>
                      <TableCell>{row.os}</TableCell>

                      <TableCell align="center">{row.data}</TableCell>

                      <TableCell align="center">{row.executor}</TableCell>

                      <TableCell align="center">{row.preventiva}</TableCell>

                      <TableCell align="center">{row.corretiva}</TableCell>

                      <TableCell align="center" style={colCanceladaColor}>
                        {row.cancelada}
                      </TableCell>

                      <TableCell align="center">{row.retorno}</TableCell>

                      <TableCell align="right">{row.totalFormatado}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
              <TableFooter className={classes.footer}>
                <TableRow>
                  <TableCell align="right" colSpan={8}>
                    Total geral: {totalGeral}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          ) : (
            false
          )}
        </CardBody>
      </Card>
    </>
  );
}

export default TabelaGastos;
