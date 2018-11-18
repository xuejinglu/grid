import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import React from 'react';
import PropTypes from 'prop-types'
import {AgGridReact} from 'ag-grid-react';
import './grid.css';

const DEFAULT_CLASSNAME = 'grid ag-theme-material';

export default class Grid extends React.Component {
  static displayName = 'Grid';
  static propTypes = {
    columnDefs: PropTypes.array,
    rowData: PropTypes.array,
  };

  render() {
    const {
      columnDefs,
      rowData,
      ...props
    } = this.props;

    return (
      <div className={DEFAULT_CLASSNAME} >
        <AgGridReact
          {...props}
          columnDefs={columnDefs}
          rowData={rowData}
        />
      </div>
    )
  }
}