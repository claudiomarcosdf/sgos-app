import Dashboard from '@material-ui/icons/Dashboard';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ListAlt from '@material-ui/icons/ListAlt';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Home',
    icon: Dashboard,

    layout: '/admin',
  },
  {
    path: '/quadro-manutencoes',
    name: 'Quadro de manutenções',
    icon: ListAlt,

    layout: '/admin',
  },
  {
    path: '/gastos-viatura',
    name: 'Gastos da Viatura',
    icon: LocalAtmIcon,

    layout: '/admin',
  },
  {
    path: '/historico-viatura',
    name: 'Histórico da viatura',
    icon: ImportContactsIcon,

    layout: '/admin',
  },
];

export default dashboardRoutes;
