import React from 'react';

import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';

import { groupBy } from '../../helper/util';

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    '& .MuiTableCell-head': {
      color: '#ab47bc', //'#574b90'
      opacity: 1,
      fontSize: '1em',
      fontWeight: 300,
      width: '60px',
      height: '80px',
      transform: 'rotate(-90deg)'
    }
  },
  footer: {
    '& .MuiTableCell-footer': {
      color: '#ab47bc', //'#574b90'
      opacity: 1,
      fontSize: '1.2em',
      fontWeight: 500
    }
  },
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0'
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF'
    }
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
      lineHeight: '1'
    }
  }
};

const columns = [
  { modelo: '', align: 'center' },
  { modelo: 'ASX' },
  { modelo: 'JOURNEY' },
  { modelo: 'COROLLA' },
  { modelo: 'PAJERO' },
  { modelo: 'ETIOS' },
  { modelo: 'KWID' }
];

const rows = [
  {
    unidade: '1º BPM',
    modelo: 'ASX',
    total: 3
  },
  {
    unidade: '1º BPM',
    modelo: 'JOURNEY',
    total: 7
  },
  {
    unidade: '1º BPM',
    modelo: 'COROLLA',
    total: 10
  },
  {
    unidade: '1º BPM',
    modelo: 'PAJERO',
    total: 1
  },
  {
    unidade: '8º BPM',
    modelo: 'ASX',
    total: 1
  },
  {
    unidade: '8º BPM',
    modelo: 'JOURNEY',
    total: 13
  },
  {
    unidade: '8º BPM',
    modelo: 'COROLLA',
    total: 5
  }
];

const resultado = groupBy(rows, 'unidade');
const withNestedKeys = Object.entries(resultado).map((entry) => {
  return { [entry[0]]: entry[1] };
});

/*
  [
    1º BPM : [{unidade: '1º BPM', modelo: 'Y', total: 3}],
    8º BPM : [{unidade: '8º BPM', modelo: 'Y', total: 3}]

  ]

*/

//console.log(withNestedKeys);

function TabelaManutencoes(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  //const { rows } = props;

  function retornaCelulasDaLinha(row) {
    const arrayOfUnidade = row[Object.keys(row)];
    console.log(arrayOfUnidade);

    const arrayOfCels = [];

    for (let i = 1; i < columns.length; i++) {
      const coluna = columns[i].modelo;

      const encontrouModelo = arrayOfUnidade.find(
        (data) => data.modelo == coluna
      );
      if (encontrouModelo) {
        arrayOfCels.push(
          <TableCell
            key={i}
            align={columns[i]?.align ? columns[i]?.align : 'center'}
          >
            {encontrouModelo.total}
          </TableCell>
        );
      } else {
        arrayOfCels.push(
          <TableCell
            key={i}
            align={columns[i]?.align ? columns[i]?.align : 'center'}
          >
            0
          </TableCell>
        );
      }
    }

    return arrayOfCels;
  }

  return (
    <>
      <Card>
        <CardHeader color='dark'>
          <h4 className={classes.cardTitleWhite}>
            Mapa de viaturas em manutenção
          </h4>
          <p className={classes.cardCategoryWhite}>
            Manutenções por UPM e Modelo
          </p>
        </CardHeader>
        <CardBody>
          <Table>
            <TableHead>
              <TableRow className={classes.root}>
                {columns.map((column, i) => (
                  <TableCell
                    key={i}
                    align={column?.align ? column?.align : 'center'}
                  >
                    {column.modelo}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {withNestedKeys.map((row, i) => {
                return (
                  <TableRow hover key={i}>
                    <TableCell>{Object.keys(row)}</TableCell>

                    {retornaCelulasDaLinha(row)}
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter className={classes.footer}>
              <TableRow>
                <TableCell align='right' colSpan={8}>
                  Total geral: 0
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CardBody>
      </Card>
    </>
  );
}

export default TabelaManutencoes;
