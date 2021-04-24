import React from 'react';
import MaterialTable from 'material-table';
import Assignment from '@material-ui/icons/Assignment';


export default function MaterialTableDemo() {

  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Upload date', field: 'upload', type: 'datetime' },
      {
        title: 'PARK Test',
        field: 'parkTest',
        lookup: { 0: 'Cheek Raise', 1: 'Nose Wrinkle', 2: 'Brow Raise' },
      },
      { title: 'Variance', field: 'variance', type: 'numeric' },

    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', upload: '4/21/2021, 8:30 AM', parkTest: 1, variance: .94 },
      { name: 'Mehmet', surname: 'Baran', upload: '4/21/2021, 8:30 AM', parkTest: 1, variance: .94 },

    ],
  });

  return (
    <MaterialTable
      title="PARK Test Video Uploads"
      columns={state.columns}
      data={state.data}

      options={{
        actionsColumnIndex: -1,
        exportButton: true
    }}
    actions={[
      {
          icon: 'info',
          tooltip: 'Information',
          onClick: (event, rowData) => alert("You saved " + rowData.name)
        },
        {
          icon: 'Assignment',
          tooltip: 'Save User',
          onClick: (event, rowData) => alert("You saved " + rowData.name)
        },
         {
          icon: 'add',
          tooltip: 'Add User',
          isFreeAction: true,
          onClick: (event) => alert("You want to add a new row")
        },
        
        ]}


    />
  );
}
