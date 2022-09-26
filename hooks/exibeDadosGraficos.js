import { useEffect, useState } from 'react';

import * as api from '../services/apiServices';
import * as util from '../helper/util';

const exibeDadosGraficos = () => {
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');
  const [totais, setTotais] = useState({});
  const [modelos, setModelos] = useState({});

  async function loadData() {
    try {
      setLoading(true);
      const retornoTotais = await api.getGraficoTotais();
      const retornoModelos = await api.getGraficoModeloEmManutencao();
      setLoading(false);

      if (retornoTotais) {
        setTotais(retornoTotais.data);
      }

      if (retornoModelos) {
        const labels = [];
        const series = [];

        const maioresBaixas = util.retornaMaiores(retornoModelos.data, 15);

        maioresBaixas.map((obj) => {
          labels.push(util.formatModelo(obj.modelo, 2));
          series.push(obj.qtdeBaixas);
        });

        const objArray = { labels: labels, series: [series] };

        //console.log('MODELOS', objArray);
        setModelos(objArray);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);

      setErro(util.retornaErro(error?.response?.status));
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return { loading, totais, modelos, erro };
};

export default exibeDadosGraficos;
