import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// layout for this page
import Admin from 'layouts/Admin.js';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardAvatar from 'components/Card/CardAvatar.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';

import { useHistoricoManutencaoContext } from 'hooks/HistoricoManutencaoContext';

import avatar from 'assets/img/faces/policecar.png';
import {
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

const styles = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0',
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
  },
  colorDestak: {
    color: '#1663BE',
    fontWeight: '500',
  },
};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

/* TRANSFORMAR EM COMPONENTE POIS SERÁ USADO A PARTIR DE UMA LISTA */
function UserProfile() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  //'#ab47bc'

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={9}>
          <Card>
            <CardHeader color="dark">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h4 className={classes.cardTitleWhite}>Ordem de serviço</h4>
                  <p className={classes.cardCategoryWhite}>
                    Dados da ordem de serviço
                  </p>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <span
                    style={{
                      backgroundColor: '#ff5e57', //'#ff7675',
                      borderRadius: '3px',
                      padding: '4px 6px',
                    }}
                  >
                    CANCELADA
                  </span>
                </div>
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
                      marginBottom: '13px',
                    }}
                  >
                    Dados da Baixa
                  </InputLabel>
                  {/* <Divider
                    style={{
                      backgroundColor: '#1663BE',
                      opacity: 2,
                      marginBottom: '20px'
                    }}
                  /> */}
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Número O.S"
                    id="numero"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Data de entrada"
                    id="data_entrada"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Odômetro Entrada"
                    id="odometro_entrada"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Empresa"
                    id="empresa"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Preventiva"
                    id="revisaokm"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Corretiva"
                    id="corretiva"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Descrição do serviço"
                    id="descricao_servico"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      readOnly: true,
                      value:
                        'Descrição do serviço a realizar adflk lkalds ladlsf kasd klkasdlk las lkasldk laksld laksld klkasl ksadlfkl kasldkfl ksadlf sldklfkasldfkl sk',
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Serviço adicionado pela empresa"
                    id="servico_adicional"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      readOnly: true,
                      value:
                        'Descrição do serviço adicionado na empresa autorizado pelo executor',
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
                      marginBottom: '13px',
                    }}
                  >
                    Dados da Alta
                  </InputLabel>
                  {/* <Divider
                    style={{
                      backgroundColor: '#ab47bc',
                      opacity: 2,
                      marginBottom: '20px'
                    }}
                  /> */}
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Data de saída"
                    id="data_saida"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Odômetro Saída"
                    id="odometro_saida"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Alta p/"
                    id="nome_alta"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      readOnly: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Matrícula"
                    id="matricula_alta"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      readOnly: true,
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
                      marginBottom: '13px',
                    }}
                  >
                    Dados da Nota Fiscal
                  </InputLabel>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Dessert (100g serving)</TableCell>
                          <TableCell align="right">Calories</TableCell>
                          <TableCell align="right">Fat&nbsp;(g)</TableCell>
                          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                          <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              '&:last-child td, &:last-child th': { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card profile>
            <CardAvatar profile>
              <a href="#cman" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <span>MITSUBISH ASX 2.0 FLEX / 2018</span>
              <br />
              <span>Operacional</span>
              <br />
              <span className={classes.cardCategory}>16º BPM</span>
              <h4 className={`${classes.cardTitle}, ${classes.colorDestak}`}>
                55.3682
              </h4>
              <span>JHW-9877 | Renavam: 1147208864</span>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

UserProfile.layout = Admin;

export default UserProfile;
