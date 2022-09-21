import React from 'react';
import Admin from 'layouts/Admin.js';
import OrdemServico from 'components/OrdemServico/OrdemServico';
import GridContainer from 'components/Grid/GridContainer';

function DetalheOrdemServico() {
  return (
    <GridContainer>
      <OrdemServico />
    </GridContainer>
  );
}

DetalheOrdemServico.layout = Admin;

export default DetalheOrdemServico;
