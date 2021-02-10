import React, { Component } from 'react';
import { DataTable as VSDataTable } from '@cjdev/visual-stack/lib/components/Table/DataTable';
import { connect } from 'react-redux';
import {
  initializeDataTable,
  setDataTablePage,
  setDataTableSortingOption,
  selectDataTable,
  setDataTableRows,
} from '../../actions';
import * as R from 'ramda';
import PropTypes from 'prop-types';
export {
  ASCENDING,
  DESCENDING,
} from '@cjdev/visual-stack/lib/components/Table/DataTable/sortingHelper';
export {
  renderNoTrending,
  renderTrendingUp,
  renderTrendingDown,
} from '@cjdev/visual-stack/lib/components/Table/DataTable/Trend';

export class DataTablePure extends Component {
  componentDidMount() {
    const initialPayload = R.pick(['id', 'data', 'sortingOption', 'columns'])(
      this.props
    );
    this.props.initializeDataTable(initialPayload);
  }

  componentDidUpdate(prevProps) {
    const selectProps = R.pick(['data', 'sortingOption', 'id']);
    const previousProps = selectProps(prevProps);
    const currentProps = selectProps(this.props);
    if (!R.equals(previousProps.data, currentProps.data)) {
      this.props.setDataTableSortingOption(currentProps);
    }
  }

  render() {
    const {
      sortable,
      columns,
      caption,
      description,
      noDataLabel,
      dataTable,
      pagination,
      id,
      setDataTablePage,
      setDataTableSortingOption,
      setDataTableRows,
      onClick,
      renderToolbar,
      rowsPerPageTemplate,
      totalRecordsTemplate,
      isLoading,
      loadingMessage,
      selectable,
    } = this.props;
    return (
      <div>
        <VSDataTable
          onClick={onClick}
          caption={caption}
          description={description}
          noDataLabel={noDataLabel}
          sortable={sortable}
          selectable={selectable}
          pagination={pagination}
          data={dataTable.data}
          isLoading={isLoading}
          loadingMessage={loadingMessage}
          columns={columns}
          page={dataTable.pagination.page}
          rowsPerPage={dataTable.pagination.rowsPerPage}
          sortingOption={dataTable.sortingOption}
          onPageChange={pagination => {
            setDataTablePage({ id, pagination });
          }}
          onSort={({ data, sortingOption }) => {
            setDataTableSortingOption({ id, sortingOption });
            setDataTableRows({ id, data });
          }}
          renderToolbar={renderToolbar}
          rowsPerPageTemplate={rowsPerPageTemplate}
          totalRecordsTemplate={totalRecordsTemplate}
          onSelect={({ data }) => {
            setDataTableRows({ id, data });
          }}
        />
      </div>
    );
  }
}

DataTablePure.propTypes = {
  caption: PropTypes.string,
  description: PropTypes.string,
  noDataLabel: PropTypes.string,
  sortable: PropTypes.bool,
  pagination: PropTypes.bool,
  data: PropTypes.array,
  columns: PropTypes.array,
  dataTable: PropTypes.shape({
    data: PropTypes.array,
    sortingOption: PropTypes.shape({
      label: PropTypes.string,
      order: PropTypes.string,
    }),
    pagination: PropTypes.shape({
      page: PropTypes.number,
      rowsPerPage: PropTypes.number,
    }),
  }),
  initializeDataTable: PropTypes.func.isRequired,
  setDataTablePage: PropTypes.func,
  setDataTableSortingOption: PropTypes.func,
  onClick: PropTypes.func,
  renderToolBar: PropTypes.func,
  rowsPerPageTemplate: PropTypes.string,
  totalRecordsTemplate: PropTypes.string,
  isLoading: PropTypes.bool,
  loadingMessage: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
  dataTable: selectDataTable(ownProps.id)(state),
});

const mapDispatchToProps = {
  initializeDataTable,
  setDataTablePage,
  setDataTableSortingOption,
  setDataTableRows,
};

export const DataTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataTablePure);
