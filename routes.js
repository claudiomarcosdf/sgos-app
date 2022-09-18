import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import BubbleChart from '@material-ui/icons/BubbleChart';
import LocationOn from '@material-ui/icons/LocationOn';
import Notifications from '@material-ui/icons/Notifications';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ListAlt from '@material-ui/icons/ListAlt';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Home',
    icon: Dashboard,

    layout: '/admin'
  },
  {
    path: '/quadro-manutencoes',
    name: 'Quadro de manutenções',
    icon: ListAlt,

    layout: '/admin'
  },
  {
    path: '/gastos-viatura',
    name: 'Gastos da Viatura',
    icon: LocalAtmIcon,

    layout: '/admin'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: Person,

    layout: '/admin'
  },
  {
    path: '/table-list',
    name: 'Table List',
    icon: 'content_paste',

    layout: '/admin'
  },
  {
    path: '/typography',
    name: 'Typography',
    icon: LibraryBooks,

    layout: '/admin'
  },
  {
    path: '/icons',
    name: 'Icons',
    icon: BubbleChart,

    layout: '/admin'
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: LocationOn,

    layout: '/admin'
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: Notifications,

    layout: '/admin'
  }
];

export default dashboardRoutes;
