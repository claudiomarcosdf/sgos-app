import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Admin from 'layouts/Admin.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Button from 'components/CustomButtons/Button.js';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress.js';

import GridItem from 'components/Grid/GridItem';
import CustomInput from 'components/CustomInput/CustomInput';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import OrdemServico from 'components/OrdemServico/OrdemServico';
import TabelaOrdemServico from 'components/TabelaOrdemServico/TabelaOrdemServico';
import Search from '@material-ui/icons/Search';
import CardViatura from 'components/CardViatura/CardViatura';
import { useHistoricoManutencaoContext } from 'hooks/HistoricoManutencaoContext';

const style = {
  boxFind: {
    display: 'flex',
    flexDirection: 'row',
  },
  loading: {
    padding: '5px 0 0 30px',
  },
};

function HistoricoViatura() {
  const [input, setInput] = useState('');
  const { loading, data, viatura, buscar } = useHistoricoManutencaoContext();

  const useStyles = makeStyles(style);
  const classes = useStyles();

  const onHandleChageValue = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const buscarDados = (event) => {
    if (!input) return false;
    buscar(input);
  };

  return (
    <GridContainer>
      {/* <OrdemServico /> */}
      <GridItem xs={12} sm={12} md={12}>
        <div className={classes.boxFind}>
          <CustomInput
            formControlProps={{
              className: classes.margin + ' ' + classes.search,
            }}
            inputProps={{
              placeholder: 'Prefixo',
              inputProps: {
                'aria-label': 'Prefixo',
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
        <TabelaOrdemServico rows={data} />
      </GridItem>
    </GridContainer>
  );
}

HistoricoViatura.layout = Admin;

export default HistoricoViatura;
