import { useEffect, useState } from 'react';

import * as api from '../services/apiServices';
import * as util from '../helper/util';

const exibeManutencoesAbertas = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]); 

  async function loadData() {
    const ano = (new Date()).getFullYear();

    try {
      setLoading(true);
      const retorno = await api.getViaturasEmManutencao(ano);
  
      if (retorno) {
        setData(retorno.data.map((obj) => {
  
          return {
            unidade: obj.unidade,
            modelo: util.formatModelo(obj.modelo),
            total: obj.total
          }
        }
        ))

         const listModelos = montarHeaders(retorno.data)
  
        setHeaders(listModelos)
        setLoading(false);
      }
      
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }

  function montarHeaders(data) {
    const uniqueModelo = (list) => [ ...new Set(list)];
    const listModelos = uniqueModelo(data.map(obj => util.formatModelo(obj.modelo)))

    const listModelosOrdered = listModelos.sort((a, b) => {
      if (a.toUpperCase() < b.toUpperCase()) return -1;
      if (a.toUpperCase() > b.toUpperCase()) return 1;

      return 0;
    }) 
    
    //transforma em objeto => {modelo: 'ASX'}
    const listModelosObj = listModelosOrdered.map(modelo => {
      return {
        modelo: modelo
      }
    })

    //Insere modelo vazio no início
    listModelosObj.splice(0, 0, {modelo: ''});

    return listModelosObj;  
  }

  useEffect(() => {
    loadData();
  }, [])
  

  return {loading, data, headers}
}


export default exibeManutencoesAbertas;