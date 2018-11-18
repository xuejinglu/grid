import Grid from '../components/grid.jsx';
import React, { Component } from 'react';
import { rowData } from '../constants/row_data';

class SimpleGrid extends Component {
  static displayName = 'SimpleGrid';

  render() {

    const columnDefs = [
      {headerName: "First Name", field: "firstName"},
      {headerName: "Last Name", field: "lastName"},
      {headerName: "Age", field: "age"}
    ];

    return (
      <Grid
        rowData={rowData}
        columnDefs={columnDefs}
      />
    );
  }
}

export default SimpleGrid;