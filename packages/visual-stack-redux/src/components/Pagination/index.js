import React from 'react';
import { connect } from 'react-redux';
import Pagination from '@cjdev/visual-stack/lib/components/Pagination';
import {
  initializePagination,
  setPaginationValue,
  selectPaginationValue,
} from '../../actions';

export class PaginationPure extends React.Component {
  componentDidMount() {
    const { paginationId, initializePagination } = this.props;
    initializePagination({
      paginationId,
    });
  }

  render() {
    const {
      paginationValue: { rowsPerPage, page },
      numberOfRows,
      setPaginationValue,
      paginationId,
    } = this.props;
    return (
      <Pagination
        rowsPerPage={rowsPerPage}
        page={page}
        numberOfRows={numberOfRows}
        onChange={paginationValue => {
          setPaginationValue({ ...paginationValue, paginationId });
        }}
      />
    );
  }
}

const mapDispatchToProps = { initializePagination, setPaginationValue };

const mapStateToProps = (state, ownProps) => ({
  paginationValue: selectPaginationValue(state, ownProps),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationPure);
