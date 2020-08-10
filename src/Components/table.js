import React, { forwardRef } from 'react';
import Search from '@material-ui/icons/Search';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import MaterialTable from 'material-table';
import Clear from '@material-ui/icons/Clear';

function Table(props) {
   return (
      <MaterialTable
         columns={[
            { title: 'Id', field: 'id' },
            { title: 'Title', field: 'name' },
            { title: 'Mode', field: 'mode' },
            { title: 'Type', field: 'type' },
            { title: 'Destination', field: 'destination' },
            { title: 'Origin', field: 'origin' },
            { title: 'Total', field: 'total' },
            { title: 'Status', field: 'status' },
            { title: 'UserID', field: 'userId' },
         ]}
         data={props.shipment}
         title='Shipment'
         options={{
            search: true,
         }}
         icons={tableIcons}
      />
   );
}
const tableIcons = {
   FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
   LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
   NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
   PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
   )),
   Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
   ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
};
export default Table;
