import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

axios.defaults.headers.common['authorization'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImRlZmF1bHQtdXNlci1wbWRmIiwicGFzc3dvcmQiOiJAcG1kZjE4MDkiLCJpYXQiOjE2NjMxNTUzMDh9.Bm4cFdPMWKRbeVaCv5o3KSW-e0xy6gFIQ5g9GpF4nUk';

async function getGastosPorPrefixoOuPlaca(prefixoOuPlaca) {
  const response = await axios.get(
    `${API_URL}/financeiro/gastosPorPrefixoOuPlaca/${prefixoOuPlaca}`
  );

  if (response.status !== 200) {
    throw Error(response.Error);
  }

  return response;
}

async function getViaturasEmManutencao(ano) {
  const response = await axios.get(
    `${API_URL}/ordemservico/viaturasEmManutencao/${ano}`
  );

  if (response.status !== 200) {
    throw Error(response.Error);
  }

  return response;
}

async function getHistoricoManutencao(prefixo) {
  const response = await axios.get(
    `${API_URL}/ordemservico/buscaPrefixo?prefixo=${prefixo}`
  );

  if (response.status !== 200) {
    throw Error(response.Error);
  }

  return response;
}

async function getItensNF(idNF) {
  const response = await axios.get(`${API_URL}/itensnotafiscal/${idNF}`);

  if (response.status !== 200) {
    throw Error(response.Error);
  }

  return response;
}

async function getGraficoTotais() {
  const response = await axios.get(`${API_URL}/grafico/graficoTotais`);

  if (response.status !== 200) {
    throw Error(response.Error);
  }

  return response;
}

async function getGraficoModeloEmManutencao() {
  const response = await axios.get(
    `${API_URL}/grafico/graficoModelosEmManutencao`
  );

  if (response.status !== 200) {
    throw Error(response.Error);
  }

  return response;
}

export {
  getGastosPorPrefixoOuPlaca,
  getViaturasEmManutencao,
  getHistoricoManutencao,
  getGraficoTotais,
  getGraficoModeloEmManutencao,
  getItensNF,
};
