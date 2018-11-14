import './External__AgGrid.css';
import './External__AgGrid--ThemeMaterial.css';
import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import ImmutablePropTypes from 'react-immutable-proptypes';

const DEFAULT_CLASSNAME = 'grid';

class Grid extends React.Component {
  static displayName = 'Grid';
  static propTypes = {
    columnDefs: ImmutablePropTypes.list.isRequired,
    page: React.PropTypes.number,
    pageSize: React.PropTypes.number,
    pagination: React.PropTypes.bool,
    rowModelType: React.PropTypes.string,
    rowData: ImmutablePropTypes.list,
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