import React, { useState } from 'react';

import Admin from 'layouts/Admin.js';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';

import Search from '@material-ui/icons/Search';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';
import { makeStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress.js';

import CardViatura from 'components/CardViatura/CardViatura';
import TabelaGastos from 'components/TabelaGastos/TabelaGastos';

import buscaPrefixoOuPlaca from 'hooks/buscaPrefixoOuPlaca';

const style = {
  boxFind: {
    display: 'flex',
    flexDirection: 'row',
  },
  loading: {
    padding: '5px 0 0 30px',
  },
};

function GastosViatura() {
  const [input, setInput] = useState('');
  const { loading, data, viatura, buscar } = buscaPrefixoOuPlaca();

  const useStyles = makeStyles(style);
  const classes = useStyles();

  const onHandleChageValue = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const buscarDados = (event) => {
    //console.log(input);
    if (!input) return false;
    buscar(input);
    //console.log(data);
  };

  return (
    <GridContainer>
      {console.log(data)}
      <GridItem xs={12} sm={12} md={12}>
        <div className={classes.boxFind}>
          <CustomInput
            formControlProps={{
              className: classes.margin + ' ' + classes.search,
            }}
            inputProps={{
              placeholder: 'Prefixo ou placa',
              inputProps: {
                'aria-label': 'Prefixo ou placa',
              },
              onChange: (event) => {
                onHandleChageValue(event);
              },
              value: `${input}`,
            }}
          />
          <Button
            color="white"
            aria-label="buscar"
            justIcon
            round
            onClick={(e) => buscarDados(e)}
          >
            <Search />
          </Button>
          <div className={classes.loading}>
            {loading ? <CircularProgress /> : false}
          </div>
        </div>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <CardViatura viatura={viatura} />
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <TabelaGastos rows={data} prefixo={viatura?.prefixo} />
      </GridItem>
    </GridContainer>
  );
}

GastosViatura.layout = Admin;

export default GastosViatura;
