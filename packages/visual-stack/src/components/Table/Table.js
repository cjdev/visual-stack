import React from 'react';
import cn from 'classnames';
import './Table.css';

export const TableContainer = ({ className, children, ...rest }) =>
  <div className={cn('vs-table-container', className)} {...rest}>{children}</div>;

export const TableTitle = ({ className, children, ...rest }) =>
  <div className={cn('vs-table-title', className)} {...rest}>{children}</div>;

export const Table = ({ className, children, ...rest }) =>
  <table className={cn('vs-table', className)} {...rest}>{children}</table>;

export const TBody = ({ className, children, ...rest }) =>
  <tbody className={cn('vs-tbody', className)} {...rest}>{children}</tbody>;

export const THead = ({ className, children, ...rest }) =>
  <thead className={cn('vs-thead', className)} {...rest}>{children}</thead>;

export const TFoot = ({ className, children, ...rest }) =>
  <tfoot className={cn('vs-tfoot', className)} {...rest}>{children}</tfoot>;

export const Tr = ({ className, children, ...rest }) =>
  <tr className={cn('vs-row', className)} {...rest}>{children}</tr>;

const buildCellClasses = (center, className, nowrap, right) => {
  return cn(
    'vs-cell',
    className,
    { 'vs-cell-right': right },
    { 'vs-cell-center': center },
    { 'vs-cell-nowrap': nowrap }
  );
};

export const Th = ({ center, className, nowrap, right, children, ...rest }) =>
  <th className={`${buildCellClasses(center, className, nowrap, right)} vs-table-header`} {...rest}>{children}</th>;

export const Td = ({ center, className, nowrap, right, children, ...rest }) =>
  <td className={buildCellClasses(center, className, nowrap, right)} {...rest}>
    {children}
  </td>;

