import React from 'react';

import Admin from 'layouts/Admin.js';
import GridContainer from 'components/Grid/GridContainer.js';
import TabelaManutencoes from 'components/TabelaManutencoes/TabelaManutencoes';
import exibeManutencoesAbertas from 'hooks/exibeManutencoesAbertas';
import { Box } from '@material-ui/core';
import ProgressBar from 'components/ProgressBar/ProgressBar';

function QuadroManutencoes() {
  const { loading, data, erro, headers } = exibeManutencoesAbertas();

  return (
    <GridContainer>
      <span style={{ marginLeft: '30px' }}>{erro}</span>
      {loading ? (
        <Box sx={{ width: '100%' }}>
          <ProgressBar />
        </Box>
      ) : (
        false
      )}
      {data.length > 0 ? (
        <TabelaManutencoes rows={data} columns={headers} />
      ) : (
        false
      )}
    </GridContainer>
  );
}

QuadroManutencoes.layout = Admin;

export default QuadroManutencoes;
