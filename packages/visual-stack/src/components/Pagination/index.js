import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Select';
import { Button } from '../Button';
import LeftIcon from 'mdi-react/ChevronLeftIcon';
import RightIcon from 'mdi-react/ChevronRightIcon';
import { groupBy, head, prop, pipe } from 'ramda';
import { withErrorBoundary } from '../ErrorBoundary';
import './style.css';

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

const Pagination = ({ numberOfRows, rowsPerPage, page, onChange }) => {
  const maxPage = Math.ceil(numberOfRows / rowsPerPage);

  const handleRowsPerPage = ({ value: nextRowsPerPage }) => {
    const nextMaxPage = Math.ceil(numberOfRows / nextRowsPerPage);
    const paginationValue = {
      page: page,
      rowsPerPage: nextRowsPerPage,
    };
    if (page > nextMaxPage) {
      paginationValue.page = nextMaxPage;
    }
    onChange(paginationValue);
  };

  const handlePreviousPage = () => {
    const nextPage = page - 1;
    if (nextPage > 0) {
      onChange({ page: nextPage, rowsPerPage });
    }
  };

  const handleNextPage = () => {
    const nextPage = page + 1;
    if (nextPage <= maxPage) {
      onChange({ page: nextPage, rowsPerPage });
    }
  };

  return (
    <div className="vs-pagination">
      <div className="vs-rows-per-page-container">
        <Select
          name="rows-per-page"
          value={getRowsPerPageOption(rowsPerPage)}
          options={rowsPerPageOptions}
          onChange={handleRowsPerPage}
        />
      </div>
      <div className="vs-page-control">
        <Button
          type="icon"
          className="vs-previous-page"
          onClick={handlePreviousPage}
        >
          <LeftIcon />
        </Button>
        <div className="vs-pagination-paging">
          {page}/{maxPage}
        </div>
        <Button type="icon" className="vs-next-page" onClick={handleNextPage}>
          <RightIcon />
        </Button>
      </div>
      <div className="vs-pagination-total-records">
        {numberOfRows} total records
      </div>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  numberOfRows: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withErrorBoundary(Pagination);
