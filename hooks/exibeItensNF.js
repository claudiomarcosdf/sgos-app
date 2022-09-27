import { useState } from 'react';

import { useToasts } from 'react-toast-notifications';
import * as api from '../services/apiServices';
import * as util from '../helper/util';

const exibeItensNF = () => {
  const [loading, setLoading] = useState(false);
  const [itens, setItens] = useState([]);
  const [totalNF, setTotalNF] = useState(0);

  const { addToast } = useToasts();

  async function buscar(value) {
    try {
      setLoading(true);
      const retorno = await api.getItensNF(value);

      if (retorno) {
        let somatorio = 0;

        setItens(
          retorno.data.map((item) => {
            const total = util.calcularTotal(
              item.qtde,
              item.valor,
              item.desconto
            );

            somatorio += total;
            return {
              numeroNF: item.numeroNF,
              tipo: util.retornaLegendaTipo(item.tipo),
              codigo: item.codigo,
              descricao: item.descricao,
              qtde: item.qtde,
              valor: item.valor,
              desconto: item.desconto,
              total: util.formatCurrency(total, false),
            };
          })
        );

        setTotalNF(util.formatCurrency(somatorio, true));
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      const msg = util.retornaErro(
        error?.response?.status,
        error?.response?.data
      );

      addToast(msg, { appearance: 'error' });
    }
  }

  return { itens, totalNF, loading, buscar };
};

export default exibeItensNF;
