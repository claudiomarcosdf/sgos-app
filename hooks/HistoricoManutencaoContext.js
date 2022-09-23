import { useState, createContext, useContext } from 'react';

import { useToasts } from 'react-toast-notifications';
import * as api from '../services/apiServices';
import * as util from '../helper/util';

const Context = createContext();

export default function HistoricoManutencaoProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [viatura, setViatura] = useState({});
  const [data, setData] = useState([]);

  const { addToast } = useToasts();

  async function buscar(value) {
    console.log(value);
    try {
      setLoading(true);
      const { data } = await api.getHistoricoManutencao(value);

      if (data) {
        setViatura({
          prefixo: util.formatPrefixoOuPlaca(data.prefixo),
          tipo: data.tipo,
          unidade: data.unidade,
          placa: util.formatPrefixoOuPlaca(data.placa),
          marca: data.marca,
          modelo: data.modelo,
          fabricacao: data.fabricacao,
          renavam: data.renavan,
        });

        setData(
          data.ordens_servico.map((os) => {
            return {
              numero: os.numero,
              data_entrada: util.formatDateBr(os.data_entrada),
              hora_entrada: os.hora_entrada,
              odometro_entrada: os.odometro_entrada,
              qtd_combustivel: util.getPercentCombustivel(os.qtd_combustivel),
              data_saida: util.formatDateBr(os.data_saida),
              hora_saida: os.hora_saida,
              odometro_saida: os.odometro_saida,
              nome_alta: os.nome_alta,
              matricula_alta: os.matricula_alta,
              empresa: os.empresa.nome,
              descricao_servico: util.retiraQuebraDeLinha(os.descricao_servico),
              servico_adicional: util.retiraQuebraDeLinha(os.servico_adicional),
              preventiva: util.convertDisplay(os.revisaokm),
              corretiva: util.convertDisplay(os.corretiva),
              cancelada: util.convertDisplay(os.cancelada),
              concluida: util.convertDisplay(os.concluida),
              retorno: util.convertDisplay(os.retorno),
              notas_fiscais: os.notas_fiscais,
            };
          })
        );

        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      const msg =
        error.response.status == 500
          ? 'O Servidor não responde 😕'
          : error.response.data;
      addToast(msg, { appearance: 'error' });
      console.log('Erro!!!', error.response.data);
    }
  }

  return (
    <Context.Provider
      value={{
        data: data ? data : [],
        viatura: viatura ? viatura : {},
        loading,
        buscar,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useHistoricoManutencaoContext() {
  return useContext(Context);
}
