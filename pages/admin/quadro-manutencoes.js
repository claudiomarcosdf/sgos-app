import React from 'react';

import Admin from 'layouts/Admin.js';
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import TabelaManutencoes from 'components/TabelaManutencoes/TabelaManutencoes';

function QuadroManutencoes() {
  return (
    <GridContainer>
      <TabelaManutencoes />
    </GridContainer>
  );
}

QuadroManutencoes.layout = Admin;

export default QuadroManutencoes;
