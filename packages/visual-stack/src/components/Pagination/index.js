import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Select';

const defaultRowsPerPage = {
  value: 10,
  label: '10 per page',
};

const rowsPerPageOptions = [
  defaultRowsPerPage,
  {
    value: 25,
    label: '25 per page',
  },
  {
    value: 50,
    label: '50 per page',
  },
];

const Pagination = ({ numberOfRows, onPageChange }) => (
  <div>
    <Select
      name="rows-per-page"
      value={defaultRowsPerPage}
      options={rowsPerPageOptions}
      onChange={({ value }) => onPageChange(value)}
    />
    <div className="vs-pagination-total-records">
      {numberOfRows} total records
    </div>
    <div className="vs-pagination-paging">
      1/{Math.ceil(numberOfRows / defaultRowsPerPage.value)}
    </div>
  </div>
);

Pagination.propTypes = {
  numberOfRows: PropTypes.number.isRequired,
};

export default Pagination;
