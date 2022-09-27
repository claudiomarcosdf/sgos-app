import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import {
  Card,
  CircularProgress,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from '@material-ui/core';
import Admin from 'layouts/Admin.js';
import { makeStyles } from '@material-ui/core/styles';

import * as util from '../../../helper/util';
import exibeItensNF from 'hooks/exibeItensNF';

const styles = {
  root: {
    '& .MuiTableCell-head': {
      color: '#1663BE',
      opacity: 1,
      fontSize: '1em',
      fontWeight: 300,
      //transform: 'rotate(-90deg)'
    },
  },
  footer: {
    '& .MuiTableCell-footer': {
      color: '#1663BE',
      fontSize: '1.2em',
      fontWeight: 500,
      paddingTop: '20px',
    },
  },
  loading: {
    padding: '5px 0 0 30px',
  },
};

function ItensNF() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const router = useRouter();
  const chaveNF = router.query.id;

  const { buscar, itens, totalNF, loading } = exibeItensNF();

  useEffect(() => {
    buscar(chaveNF);
  }, [chaveNF]);

  return (
    <GridContainer>
      <div className={classes.loading}>
        {loading ? <CircularProgress /> : false}
      </div>

      {!itens ? (
        <GridItem xs={12} sm={12} md={12}>
          <h4>Número ítem encontrado ✋</h4>
        </GridItem>
      ) : (
        <>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="dark">
                <h4 className={classes.cardTitleWhite}>Itens da nota fiscal</h4>
                <p className={classes.cardCategoryWhite}>
                  {`Detalhe da nota fiscal nº ${itens[0]?.numeroNF || '000'}`}
                </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel
                      style={{
                        color: '#1663BE',
                        opacity: 0.9,
                        marginBottom: '13px',
                      }}
                    >
                      Itens
                    </InputLabel>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <TableContainer>
                      <Table size="small">
                        <TableHead>
                          <TableRow className={classes.root}>
                            <TableCell>Tipo</TableCell>
                            <TableCell align="center">Código</TableCell>
                            <TableCell>Descrição</TableCell>
                            <TableCell align="center">Qtde</TableCell>
                            <TableCell align="right">Valor</TableCell>
                            <TableCell align="right">Desconto</TableCell>
                            <TableCell align="right">Total&nbsp;(R$)</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {itens.map((row) => {
                            return (
                              <TableRow
                                key={row.id}
                                sx={{
                                  '&:last-child td, &:last-child th': {
                                    border: 0,
                                  },
                                }}
                                className={classes.root}
                              >
                                <TableCell>{row.tipo}</TableCell>
                                <TableCell align="center">
                                  {row.codigo}
                                </TableCell>
                                <TableCell>{row.descricao}</TableCell>
                                <TableCell align="center">{row.qtde}</TableCell>
                                <TableCell align="right">{row.valor}</TableCell>
                                <TableCell align="right">
                                  {row.desconto}
                                </TableCell>
                                <TableCell align="right">{row.total}</TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                        <TableFooter className={classes.footer}>
                          <TableRow>
                            <TableCell align="right" colSpan={7}>
                              Total geral: {totalNF}
                            </TableCell>
                          </TableRow>
                        </TableFooter>
                      </Table>
                    </TableContainer>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </>
      )}
    </GridContainer>
  );
}

ItensNF.layout = Admin;

export default ItensNF;
