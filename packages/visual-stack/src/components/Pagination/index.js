import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Select';
import { Button } from '../Button';
import LeftIcon from 'mdi-react/ChevronLeftIcon';
import RightIcon from 'mdi-react/ChevronRightIcon';
import { groupBy, head, prop, pipe } from 'ramda';

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

const rowsPerPageOptionsMap = groupBy(({ value }) => value)(rowsPerPageOptions);
const getRowsPerPageOption = pageValue =>
  pipe(
    prop(pageValue),
    head
  )(rowsPerPageOptionsMap);

const Pagination = ({
  numberOfRows,
  onPageChange,
  rowsPerPage,
  currentPage,
  onRowsPerPageChange,
}) => {
  const maxPage = Math.ceil(numberOfRows / rowsPerPage);
  return (
    <div>
      <Select
        name="rows-per-page"
        value={getRowsPerPageOption(rowsPerPage)}
        options={rowsPerPageOptions}
        onChange={({ value }) => onRowsPerPageChange(value)}
      />
      <div className="vs-pagination-total-records">
        {numberOfRows} total records
      </div>
      <Button
        type="icon"
        className="vs-previous-page"
        onClick={() => {
          const nextPage = currentPage - 1;
          if (nextPage > 0) {
            onPageChange(nextPage);
          }
        }}
      >
        <LeftIcon />
      </Button>
      <div className="vs-pagination-paging">
        {currentPage}/{maxPage}
      </div>
      <Button
        type="icon"
        className="vs-next-page"
        onClick={() => {
          const nextPage = currentPage + 1;
          if (nextPage <= maxPage) {
            onPageChange(nextPage);
          }
        }}
      >
        <RightIcon />
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  rowsPerPage: PropTypes.number,
  numberOfRows: PropTypes.number.isRequired,
  onRowsPerPageChange: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  currentPage: 1,
  rowsPerPage: defaultRowsPerPage.value,
};

export default Pagination;
