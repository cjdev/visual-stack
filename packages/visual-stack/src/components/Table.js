import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './Table.css';

export const Table = ({ children }) =>
  <table className="table">
    { children }
  </table>;

export const Row = ({ children, selected, onClick }) => {
  const cnames = {
    'table-row': true,
    'table-row-selected': selected,
    'table-row-selectable': onClick !== undefined,
  };
  return (
    <tr className={classnames(cnames)} onClick={onClick}>
      { children }
    </tr>
  );
};
Row.propTypes = {
  selected: PropTypes.bool,
};

export const Cell = ({ children }) =>
  <td className="table-cell">
    { children }
  </td>;
