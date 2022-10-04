import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { Box, Slider, Typography } from '@material-ui/core';

import Admin from 'layouts/Admin.js';

import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardAvatar from 'components/Card/CardAvatar.js';
import CardBody from 'components/Card/CardBody.js';
import TabelaNotafiscal from 'components/TabelaNotaFiscal/TabelaNotafiscal';

import avatar from 'assets/img/faces/policecar.png';

import { useHistoricoManutencaoContext } from 'hooks/HistoricoManutencaoContext';

const styles = {
  label: {
    '& .MuiSlider-markLabel': {
      fontSize: '0.675rem'
    },
    label: {
      '& .MuiSlider-markLabelActive': {
        fontSize: '0.675rem'
      }
    }
  },
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none'
  },
  colorDestak: {
    color: '#1663BE',
    fontWeight: '500'
  }
};

const emptyData = {
  numero: null,
  data_entrada: '',
  hora_entrada: '',
  odometro_entrada: null,
  qtd_combustivel: null,
  data_saida: '',
  hora_saida: '',
  odometro_saida: null,
  nome_alta: null,
  matricula_alta: null,
  empresa: null,
  descricao_servico: null,
  servico_adicional: null,
  preventiva: null,
  corretiva: null,
  cancelada: null,
  concluida: null,
  retorno: null,
  notas_fiscais: []
};

const marks = [
  {
    value: 0,
    label: 'E'
  },
  {
    value: 1,
    label: '.'
  },
  {
    value: 2,
    label: '1/4'
  },
  {
    value: 3,
    label: '.'
  },
  {
    value: 4,
    label: '1/2'
  },
  {
    value: 5,
    label: '.'
  },
  {
    value: 6,
    label: '3/4'
  },
  {
    value: 7,
    label: '.'
  },
  {
    value: 8,
    label: 'F'
  }
];

function OrdemServico() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  //'#ab47bc' cor original

  function valuetext(value) {
    console.log(value);
    let legend = '';
    switch (value) {
      case 1:
        legend = `.`;
        break;
      case 2:
        legend = `1/4`;
        break;
      case 3:
        legend = `.`;
        break;
      case 4:
        legend = `1/2`;
        break;
      case 5:
        legend = `.`;
        break;
      case 6:
        legend = `3/4`;
        break;
      case 7:
        legend = `.`;
        break;
      case 8:
        legend = `F`;
        break;
      default:
        legend = `E`;
        break;
    }
    console.log(legend);
    return legend;
  }

  const { data, viatura } = useHistoricoManutencaoContext();

  const { query } = useRouter(); //pega da rota

  const ordensServico = data.length > 0 ? data : [];
  const ordemServico = ordensServico.find((os) => os.numero == query.numero);
  const {
    numero,
    data_entrada,
    hora_entrada,
    odometro_entrada,
    qtd_combustivel,
    data_saida,
    hora_saida,
    odometro_saida,
    nome_alta,
    matricula_alta,
    empresa,
    descricao_servico,
    servico_adicional,
    preventiva,
    corretiva,
    cancelada,
    concluida,
    retorno,
    notas_fiscais
  } = ordemServico ? ordemServico : emptyData;

  return (
    <>
      {console.log(qtd_combustivel)}
      {!ordemServico ? (
        <GridItem xs={12} sm={12} md={9}>
          <h4>Número de Ordem de Serviço inválida para essa viatua ✋</h4>
        </GridItem>
      ) : (
        <>
          <GridItem xs={12} sm={12} md={9}>
            <Card>
              <CardHeader color='dark'>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div>
                    <h4 className={classes.cardTitleWhite}>Ordem de serviço</h4>
                    <p className={classes.cardCategoryWhite}>
                      Dados da ordem de serviço
                    </p>
                  </div>
                  {cancelada == 'Sim' ? (
                    <div style={{ marginTop: '10px' }}>
                      <span
                        style={{
                          backgroundColor: '#ff5e57', //'#ff7675',
                          borderRadius: '3px',
                          padding: '4px 6px'
                        }}
                      >
                        CANCELADA
                      </span>
                    </div>
                  ) : concluida == 'Não' ? (
                    <div style={{ marginTop: '10px' }}>
                      <span
                        style={{
                          backgroundColor: '#5cb860',
                          borderRadius: '3px',
                          padding: '4px 6px'
                        }}
                      >
                        ABERTA
                      </span>
                    </div>
                  ) : (
                    false
                  )}
                </div>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel
                      style={{
                        color: '#1663BE',
                        opacity: 0.9,
                        marginTop: '13px',
                        marginBottom: '13px'
                      }}
                    >
                      Dados da Baixa
                    </InputLabel>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText='Número O.S'
                      id='numero'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        readOnly: true,
                        value: numero
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText='Data de entrada'
                      id='data_entrada'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        readOnly: true,
                        value: `${data_entrada} ${hora_entrada}`
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText='Odômetro Entrada'
                      id='odometro_entrada'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        readOnly: true,
                        value: odometro_entrada
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText='Empresa'
                      id='empresa'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        readOnly: true,
                        value: empresa
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                    <CustomInput
                      labelText='Preventiva'
                      id='revisaokm'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        readOnly: true,
                        value: preventiva
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                    <CustomInput
                      labelText='Corretiva'
                      id='corretiva'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        readOnly: true,
                        value: corretiva
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <InputLabel
                      style={{
                        fontSize: '10px',
                        opacity: 0.9,
                        marginBottom: '10px',
                        marginTop: '4px'
                      }}
                    >
                      Qtde combustível
                    </InputLabel>
                    <Box
                      className={classes.label}
                      sx={{ width: '97%', marginLeft: '3px' }}
                    >
                      <Slider
                        min={0}
                        max={8}
                        defaultValue={qtd_combustivel || 0}
                        getAriaValueText={valuetext}
                        aria-labelledby='combustivel'
                        step={10}
                        valueLabelDisplay='off'
                        marks={marks}
                        style={{ color: '#f55a4e' }}
                        disabled
                      />
                    </Box>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText='Descrição do serviço'
                      id='descricao_servico'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        style: {
                          color: '#2c3e50'
                        },
                        multiline: true,
                        readOnly: true,
                        value: descricao_servico
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText='Serviço adicionado pela empresa'
                      id='servico_adicional'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        style: {
                          color: '#2c3e50'
                        },
                        multiline: true,
                        readOnly: true,
                        value: servico_adicional
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel
                      style={{
                        color: '#1663BE',
                        opacity: 0.9,
                        marginBottom: '13px'
                      }}
                    >
                      Dados da Alta
                    </InputLabel>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText='Data de saída'
                      id='data_saida'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        readOnly: true,
                        value: `${data_saida || ''} ${hora_saida || ''}`
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText='Odômetro Saída'
                      id='odometro_saida'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        readOnly: true,
                        value: odometro_saida
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText='Alta p/'
                      id='nome_alta'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        readOnly: true,
                        value: nome_alta
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText='Matrícula'
                      id='matricula_alta'
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        readOnly: true,
                        value: matricula_alta
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel
                      style={{
                        color: '#1663BE',
                        opacity: 0.9,
                        marginBottom: '13px'
                      }}
                    >
                      Dados da Nota Fiscal
                    </InputLabel>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <TabelaNotafiscal notasFiscais={notas_fiscais} />
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card profile>
              <CardAvatar profile>
                <a href='#cman' onClick={(e) => e.preventDefault()}>
                  <img src={avatar} alt='...' />
                </a>
              </CardAvatar>
              <CardBody profile>
                <span>{`${viatura.marca} ${viatura.modelo} / ${viatura.fabricacao}`}</span>
                <br />
                <span>{viatura.tipo}</span>
                <br />
                <span className={classes.cardCategory}>{viatura.unidade}</span>
                <h4 className={`${classes.cardTitle}, ${classes.colorDestak}`}>
                  {viatura.prefixo}
                </h4>
                <span>{`${viatura.placa} | Renavam: ${viatura.renavam}`}</span>
              </CardBody>
            </Card>
          </GridItem>
        </>
      )}
    </>
  );
}

OrdemServico.layout = Admin;

export default OrdemServico;
