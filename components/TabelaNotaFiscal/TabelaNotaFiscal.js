import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import * as util from '../../helper/util';

const styles = {
  root: {
    '& .MuiTableCell-head': {
      color: '#1663BE',
      opacity: 1,
      fontSize: '1em',
      fontWeight: 300
      //transform: 'rotate(-90deg)'
    }
  },
  footer: {
    '& .MuiTableCell-footer': {
      color: '#1663BE',
      fontSize: '1.2em',
      fontWeight: 500,
      paddingTop: '20px'
    }
  }
};

function createData(numero, data, tipo, total) {
  return { numero, data, tipo, total };
}

const rows = [
  createData('50321', '25/04/2022', 'PEÇA', 4325.68),
  createData('50322', '25/04/2022', 'SERVIÇO', 856.55),
  createData('50333', '26/04/2022', 'ÓLEO', 241.78)
];

function TabelaNotafiscal(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const { notasFiscais } = props;

  const totalGeral =
    notasFiscais.length > 0
      ? util.retornaSomatorioDasNotasFiscais(notasFiscais)
      : '0,00';

  return (
    <>
      {console.log(totalGeral)}
      <TableContainer>
        <Table size='small'>
          <TableHead>
            <TableRow className={classes.root}>
              <TableCell>Número</TableCell>
              <TableCell align='center'>Data</TableCell>
              <TableCell align='right'>Tipo NF</TableCell>
              <TableCell align='right'>Total&nbsp;(R$)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notasFiscais.map((row) => {
              const tipo = util.retornaDescricaoTipo(row);
              const total = util.retornaTotal(row);

              return (
                <TableRow
                  key={row.id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 }
                  }}
                  className={classes.root}
                >
                  <TableCell component='th' scope='row'>
                    {row.numero}
                  </TableCell>
                  <TableCell align='center'>{row.data}</TableCell>
                  <TableCell align='right'>{tipo}</TableCell>
                  <TableCell align='right'>{total}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter className={classes.footer}>
            <TableRow>
              <TableCell align='right' colSpan={4}>
                Total geral: {totalGeral}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}

export default TabelaNotafiscal;
