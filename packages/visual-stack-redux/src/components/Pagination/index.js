import React from 'react';
import { connect } from 'react-redux';
import Pagination from '@cjdev/visual-stack/lib/components/Pagination';
import PropTypes from 'prop-types';
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
      onChange,
    } = this.props;
    return (
      <Pagination
        rowsPerPage={rowsPerPage}
        page={page}
        numberOfRows={numberOfRows}
        onChange={paginationValue => {
          onChange(paginationValue);
          setPaginationValue({ ...paginationValue, paginationId });
        }}
      />
    );
  }
}

PaginationPure.propTypes = {
  paginationValue: PropTypes.object.isRequired,
  numberOfRows: PropTypes.number.isRequired,
  setPaginationValue: PropTypes.func.isRequired,
  paginationId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = { initializePagination, setPaginationValue };

const mapStateToProps = (state, ownProps) => ({
  paginationValue: selectPaginationValue(state, ownProps),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationPure);
