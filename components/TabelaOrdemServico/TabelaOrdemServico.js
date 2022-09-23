import React from 'react';
import Link from 'next/link';

import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';

import { formatCurrency } from '../../helper/util';

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

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
};

const columns = [
  { name: 'O.S º', align: 'left' },
  { name: 'Data' },
  { name: 'Odom entrada' },
  { name: 'Executor' },
  { name: 'Preventiva' },
  { name: 'Corretiva' },
  { name: 'Cancelada' },
  { name: 'Retorno' },
  { name: '', align: 'center' },
];

// const rows = [
//   {
//     os: '127',
//     data: '25/03/2022',
//     odometro: 9332,
//     executor: 'TAGUAMOTORS',
//     preventiva: 'Sim',
//     corretiva: 'Não',
//     cancelada: 'Não',
//     retorno: 'Não',
//   },
//   {
//     os: '8694',
//     data: '25/03/2022',
//     odometro: 8332,
//     executor: 'TAGUAMOTORS',
//     preventiva: 'Sim',
//     corretiva: 'Não',
//     cancelada: 'Sim',
//     retorno: 'Não',
//   },
// ];

function TabelaOrdemServico(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const { rows } = props;

  return (
    <>
      <Card>
        <CardHeader color="dark">
          <h4 className={classes.cardTitleWhite}>Histórico de manutenções</h4>
          <p className={classes.cardCategoryWhite}>
            Lista das ordens de serviço da viatura
          </p>
        </CardHeader>
        <CardBody>
          {rows.length > 0 ? (
            <Table size="small">
              <TableHead>
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
                      <TableCell align="left">{row.numero}</TableCell>

                      <TableCell align="center">{row.data_entrada}</TableCell>

                      <TableCell align="center">
                        {row.odometro_entrada}
                      </TableCell>

                      <TableCell align="center">{row.empresa}</TableCell>

                      <TableCell align="center">{row.preventiva}</TableCell>

                      <TableCell align="center">{row.corretiva}</TableCell>

                      <TableCell align="center" style={colCanceladaColor}>
                        {row.cancelada}
                      </TableCell>

                      <TableCell align="center">{row.retorno}</TableCell>

                      <TableCell align="center">
                        <Link
                          href={{
                            pathname: '/admin/detalhe-os',
                            query: { numero: row.numero },
                          }}
                        >
                          <Button
                            color="primary"
                            variant="outlined"
                            size="small"
                          >
                            <a>Detalhar</a>
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          ) : (
            false
          )}
        </CardBody>
      </Card>
    </>
  );
}

export default TabelaOrdemServico;
