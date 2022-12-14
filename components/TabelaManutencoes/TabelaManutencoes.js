import React from 'react';

import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';

import { groupBy } from '../../helper/util';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    '& .MuiTableCell-head': {
      color: '#1663BE', //'#574b90'
      opacity: 1,
      fontSize: '1em',
      fontWeight: 300,
      minWidth: '5px',
      height: '5px',
      transform: 'rotate(-90deg)',
      whiteSpace: 'nowrap',
    },
  },
  footer: {
    '& .MuiTableCell-footer': {
      color: '#1663BE', //'#574b90'
      opacity: 1,
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

const cabecalhoVazio = [1, 2, 3, 4];

function TabelaManutencoes(props) {
  const { rows, columns } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(9);
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const resultado = groupBy(rows, 'unidade');
  const withNestedKeys = Object.entries(resultado).map((entry) => {
    return { [entry[0]]: entry[1] };
  });

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  function getStyle(total) {
    //para os totais
    const rangers = {
      lower: 3,
      medium: 5,
      righ: 7,
    };

    const styleDefault = {
      color: '#2f3542',
    };
    const styleLower = {
      backgroundColor: '#d2f8d2',
      color: '#006266',
      padding: '1px 6px',
      borderRadius: '3px',
    };
    const styleMedium = {
      backgroundColor: '#f7d794',
      color: '#d35400',
      padding: '1px 6px',
      borderRadius: '3px',
    };
    const styleRigh = {
      backgroundColor: '#fab1a0',
      color: '#EA2027',
      padding: '1px 6px',
      borderRadius: '3px',
    };

    if (total >= rangers.lower && total < rangers.medium) {
      return styleLower;
    } else if (total >= rangers.medium && total < rangers.righ) {
      return styleMedium;
    } else if (total >= rangers.righ) {
      return styleRigh;
    } else return styleDefault;
  }

  function celulaPersonalizada(total) {
    const style = getStyle(total);

    return <span style={{ ...style }}>{total}</span>;
  }

  //Monta linha com o array da unidade
  function retornaCelulasDaLinha(row) {
    const arrayOfUnidade = row[Object.keys(row)];
    //console.log(arrayOfUnidade);

    const arrayOfCels = [];

    for (let i = 1; i < columns.length; i++) {
      const coluna = columns[i].modelo;

      const encontrouModelo = arrayOfUnidade.find(
        (data) => data.modelo == coluna
      );
      if (encontrouModelo) {
        arrayOfCels.push(
          <TableCell
            key={i + 'dataline'}
            align={columns[i]?.align ? columns[i]?.align : 'center'}
          >
            {celulaPersonalizada(encontrouModelo.total)}
          </TableCell>
        );
      } else {
        arrayOfCels.push(
          <TableCell
            key={i + 'dataline'}
            align={columns[i]?.align ? columns[i]?.align : 'center'}
          >
            <span style={{ color: '#a5b1c2' }}>0</span>
          </TableCell>
        );
      }
    }

    return arrayOfCels;
  }

  return (
    <>
      <Card>
        <CardHeader color="dark">
          <h4 className={classes.cardTitleWhite}>
            Mapa de viaturas em manuten????o
          </h4>
          <p className={classes.cardCategoryWhite}>
            Manuten????es por UPM e Modelo
          </p>
        </CardHeader>
        <CardBody>
          <TableContainer>
            <Table>
              <TableHead>
                {cabecalhoVazio.map((item) => {
                  //Apenas para ajustar o cabe??alho da tabela
                  return (
                    <TableRow>
                      <TableCell
                        key={item + 'fake'}
                        colSpan={columns.length}
                        style={{ border: 0 }}
                      ></TableCell>
                    </TableRow>
                  );
                })}

                <TableRow className={classes.root}>
                  {columns.map((column, i) => (
                    <TableCell
                      style={{ maxWidth: '5px' }}
                      key={i + column.modelo}
                      align={column?.align ? column?.align : 'center'}
                    >
                      {column.modelo}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {withNestedKeys
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, i) => {
                    return (
                      <TableRow hover>
                        <TableCell //coluna modelo
                          key={i + 'data'}
                          style={{ minWidth: '65px', color: '#596275' }}
                        >
                          {Object.keys(row)}
                        </TableCell>

                        {retornaCelulasDaLinha(row)}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[9, 15, 20]}
            component="div"
            count={withNestedKeys.length}
            labelRowsPerPage={'Linhas por p??gina'}
            rowsPerPage={rowsPerPage}
            labelDisplayedRows={({ from, to, count }) =>
              `${from}-${to} de ${count}`
            }
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            backIconButtonText={'Anterior'}
            nextIconButtonText={'Pr??xima'}
          />
        </CardBody>
      </Card>
    </>
  );
}

export default TabelaManutencoes;
