import React from 'react';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Store from '@material-ui/icons/Store';
import Warning from '@material-ui/icons/Warning';
import DateRange from '@material-ui/icons/DateRange';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Update from '@material-ui/icons/Update';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AccessTime from '@material-ui/icons/AccessTime';
import Accessibility from '@material-ui/icons/Accessibility';
import BugReport from '@material-ui/icons/BugReport';
import Code from '@material-ui/icons/Code';
import Cloud from '@material-ui/icons/Cloud';
// layout for this page
import Admin from 'layouts/Admin.js';
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Table from 'components/Table/Table.js';
import Tasks from 'components/Tasks/Tasks.js';
import CustomTabs from 'components/CustomTabs/CustomTabs.js';
import Danger from 'components/Typography/Danger.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardIcon from 'components/Card/CardIcon.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';

import { bugs, website, server } from 'variables/general.js';

import {
  modelosChart,
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from 'variables/charts.js';

import styles from 'assets/jss/nextjs-material-dashboard/views/dashboardStyle.js';
import exibeDadosGraficos from 'hooks/exibeDadosGraficos';

const stylesLocal = {
  noteTitle: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#636e72',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '13px',
    left: '0',
    marginLeft: '20px',
    width: '270px',
    paddingBottom: '10px',
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: '10px',
    color: '#535c68',
    display: 'block',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '13px',
    left: '0',
    marginLeft: '20px',
    width: '270px',
    paddingBottom: '40px',
  },
};

function Dashboard() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const { totais, modelos, loading, erro } = exibeDadosGraficos();

  return (
    <div>
      {console.log('MODELOS', modelos)}
      <GridContainer>
        <div>
          <div style={stylesLocal.noteTitle}>SGOS-Web</div>
          <div style={stylesLocal.note}>
            <span>
              Consultas aos dados do sistema SGOS do Centro de Manurenção -
              CMan/PMDF
            </span>
          </div>
        </div>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Em manutenção</p>
              <h3 className={classes.cardTitle}>
                {`${totais.manutencao} `}
                <small>Vtrs</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                Viaturas em manutenção
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="dark" stats icon>
              <CardIcon color="dark">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Baixas de hoje</p>
              <h3 className={classes.cardTitle}>{totais.baixasHoje}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Baixas do dia
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Altas de hoje</p>
              <h3 className={classes.cardTitle}>{totais.altasHoje}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Altas do dia
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
