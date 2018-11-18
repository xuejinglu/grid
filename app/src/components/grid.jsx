import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import React from 'react';
import PropTypes from 'prop-types'
import {AgGridReact} from 'ag-grid-react';

const DEFAULT_CLASSNAME = 'grid';

export default class Grid extends React.Component {
  static displayName = 'Grid';
  static propTypes = {
    columnDefs: PropTypes.array,
    page: PropTypes.number,
    pageSize: PropTypes.number,
    pagination: PropTypes.bool,
    rowModelType: PropTypes.string,
    rowData: PropTypes.array,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.api) {
      /* Adjusting grid columns to fit in the screen */
      window.addEventListener('resize', this.api.sizeColumnsToFit);
    }
  }

  componentWillUnmount() {
    this._clean();
  }

  _onGridReady = (params) => {
    /* Bind available grid api to this */
    this.api = params.api;
    this.columnApi = params.columnApi;
    window.addEventListener('resize', this.api.sizeColumnsToFit);
  }

  _clean = () => {
    if (this.api) {
      window.removeEventListener('resize', this.api.sizeColumnsToFit);
    }
  }

  render() {
    const {
      columnDefs,
      rowData,
      rowModelType,
      ...props
    } = this.props;

    return (
      <div className={DEFAULT_CLASSNAME}>
        <AgGridReact
          {...props}
          columnDefs={columnDefs}
          onGridReady={this._onGridReady}
          rowModelType={rowModelType}
          rowData={rowData}
        />
      </div>
    )
  }
}