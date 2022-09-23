function formatCurrency(value, simbol) {
  return simbol
    ? value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : value.toLocaleString('pt-BR');
}

function formatDateBr(date) {
  if (!date) {
    return;
  }

  const dateToFormat = date.substring(0, 10);
  const currentDate = new Date(dateToFormat);
  const dateFormated = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'UTC',
  }).format(currentDate);

  return dateFormated;
}

function convertDisplay(value) {
  return value === 'S' ? 'Sim' : 'Não';
}

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function formatPrefixoOuPlaca(value) {
  if (!value) return '';

  const valueString = value.toString();

  if (isNumber(valueString)) {
    //se prefixo
    let prefixo = valueString;
    if (prefixo.startsWith('100', 0)) {
      prefixo = valueString.replace(/(\d{3})(\d{3,4})/, '$1.$2');
    } else {
      prefixo = valueString.replace(/(\d{2})(\d{3,4})/, '$1.$2');
    }

    return prefixo;
  } else {
    //se placa
    const placa = valueString.substr(0, 3) + '-' + valueString.substr(3, 4);
    return placa;
  }
}

function groupBy(array, key) {
  return array.reduce((acc, item) => {
    if (!acc[item[key]]) acc[item[key]] = [];
    acc[item[key]].push(item);
    return acc;
  }, {});
}

function formatModelo(modelo, spaces = 3) {
  const modelo1 = modelo.split(' ', spaces);
  const modeloFinal = modelo1.join(' ');
  return modelo ? modeloFinal : '';
}

function retornaDescricaoTipo(obj) {
  return obj.total_em_pecas !== '0.00'
    ? 'PEÇA'
    : obj.total_em_servico !== '0.00'
    ? 'SERVIÇO'
    : obj.total_em_oleo !== '0.00'
    ? 'ÓLEO'
    : 'S/I';
}

function retornaTotal(obj) {
  return obj.total_em_pecas != '0.00'
    ? formatCurrency(parseFloat(obj.total_em_pecas), false)
    : obj.total_em_servico != '0.00'
    ? formatCurrency(parseFloat(obj.total_em_servico), false)
    : obj.total_em_oleo != '0.00'
    ? formatCurrency(parseFloat(obj.total_em_oleo), false)
    : '0,00';
}

function retornaSomatorioDasNotasFiscais(notasFiscais) {
  const total = formatCurrency(
    notasFiscais.reduce(
      (acc, curr) =>
        acc +
        parseFloat(curr.total_em_pecas) +
        parseFloat(curr.total_em_servico) +
        parseFloat(curr.total_em_oleo),
      0
    ),
    true
  );

  return total;
}

function getPercentCombustivel(qtd_combustivel) {
  const percent = (100 * parseInt(qtd_combustivel)) / 8;

  return percent;
}

function retiraQuebraDeLinha(texto) {
  return texto.replaceAll('\r\n', ' ');
}

export {
  formatCurrency,
  formatDateBr,
  convertDisplay,
  formatPrefixoOuPlaca,
  groupBy,
  formatModelo,
  retornaDescricaoTipo,
  retornaTotal,
  retornaSomatorioDasNotasFiscais,
  getPercentCombustivel,
  retiraQuebraDeLinha,
};
