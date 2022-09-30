import RegularButton from 'components/CustomButtons/Button';
import React from 'react';

import GetAppIcon from '@material-ui/icons/GetApp';

import { CSVLink, CSVDownload } from 'react-csv';

function ExportExcel({ headers, data, fileName }) {
  // const headers = [
  //   { label: 'First Name', key: 'firstname' },
  //   { label: 'Last Name', key: 'lastname' },
  //   { label: 'Email', key: 'email' },
  // ];

  // const data = [
  //   { firstname: 'Ahmed', lastname: 'Tomi', email: 'ah@smthing.co.com' },
  //   { firstname: 'Raed', lastname: 'Labes', email: 'rl@smthing.co.com' },
  //   { firstname: 'Yezzi', lastname: 'Min l3b', email: 'ymin@cocococo.com' },
  // ];

  return (
    <RegularButton color='success' size='sm' startIcon={<GetAppIcon />}>
      <CSVLink
        headers={headers}
        data={data}
        target='_blank'
        separator={';'}
        filename={`${fileName}.csv`}
        style={{ color: 'white' }}
      >
        Exportar
      </CSVLink>
    </RegularButton>
  );
}

export default ExportExcel;
