import React from 'react';
import { connect } from 'react-redux';
import Pagination from '@cjdev/visual-stack/lib/components/Pagination';

export class PaginationPure extends React.Component {
  componentDidMount() {
    const { paginationId, numberOfRows, initializePagniation } = this.props;
    initializePagniation({
      paginationId,
      numberOfRows,
    });
  }

  render() {
    const { rowsPerPage, page } = this.props;
    return (
      <Pagination rowsPerPage={rowsPerPage} page={page} onChange={() => {}} />
    );
  }
}

export default connect()(PaginationPure);
