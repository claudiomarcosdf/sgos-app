import { useState } from 'react';

import { useToasts } from 'react-toast-notifications';
import * as api from '../services/apiServices';
import * as util from '../helper/util';

const buscaPrefixoOuPlaca = () => {
  const [loading, setLoading] = useState(false);
  const [viatura, setViatura] = useState({});
  const [data, setData] = useState([]);

  const { addToast } = useToasts();

  async function buscar(value) {
    console.log(value);
    try {
      setLoading(true);
      const retorno = await api.getGastosPorPrefixoOuPlaca(value);

      if (retorno) {
        setData(
          retorno.data.map((os) => {
            return {
              os: os.numero,
              data: util.formatDateBr(os.data_entrada),
              executor: os.executor,
              preventiva: util.convertDisplay(os.preventiva),
              corretiva: util.convertDisplay(os.corretiva),
              cancelada: util.convertDisplay(os.cancelada),
              retorno: util.convertDisplay(os.retorno),
              total: os.total,
              totalFormatado: util.formatCurrency(os.total, false)
            };
          })
        );

        setViatura({
          prefixo: util.formatPrefixoOuPlaca(retorno.data[0].prefixo),
          tipo: retorno.data[0].tipo,
          fabricacao: retorno.data[0].fabricacao,
          placa: util.formatPrefixoOuPlaca(retorno.data[0].placa),
          marca: retorno.data[0].marca,
          modelo: retorno.data[0].modelo,
          unidade: retorno.data[0].unidade
        });
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
      console.log('Erro!!!', error.response.data);
    }
  }

  return { data, viatura, loading, buscar };
};

export default buscaPrefixoOuPlaca;
