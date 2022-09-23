import { useEffect, useState } from 'react';

import * as api from '../services/apiServices';
import * as util from '../helper/util';

const exibeDadosGraficos = () => {
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');
  const [headers, setHeaders] = useState([]);
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

        retornoModelos.data.map((obj) => {
          labels.push(util.formatModelo(obj.modelo, 2));
          series.push(obj.qtdeBaixas);
        });

        const objArray = { labels: labels, series: [series] };

        console.log('MODELOS', objArray);
        setModelos(objArray);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);

      setErro(
        error.response.status == 500
          ? '  O servidor não responde 😕'
          : '  Erro no servidor'
      );
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return { loading, totais, modelos, erro };
};

export default exibeDadosGraficos;
