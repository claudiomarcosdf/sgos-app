import React from 'react';

import Admin from 'layouts/Admin.js';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import TabelaManutencoes from 'components/TabelaManutencoes/TabelaManutencoes';
import exibeManutencoesAbertas from 'hooks/exibeManutencoesAbertas';

function QuadroManutencoes() {
  const { loading, data, headers } = exibeManutencoesAbertas();

  return (
    <GridContainer>
      {data.length > 0 ? <TabelaManutencoes rows={data} columns={headers} /> : false}
      
    </GridContainer>
  );
}

QuadroManutencoes.layout = Admin;

export default QuadroManutencoes;
