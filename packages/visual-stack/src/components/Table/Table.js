import React from 'react';
import cn from 'classnames';
import './Table.css';

export const Table = ({ className, children }) =>
  <table className={cn('vs-table', className)}>{children}</table>;

export const Th = ({ className, children }) =>
  <th className={cn('vs-cell', 'vs-table-header', className)}>{children}</th>;

export const Tr = ({ className, children }) =>
  <tr className={cn(className)}>{children}</tr>;

export const TrHead = ({ children }) => <thead><Tr>{children}</Tr></thead>;

export const Td = ({ right, className, children }) =>
  <td className={
    cn('vs-cell', className, { 'vs-cell-right': right })
  }>{children}</td>;

export const TdRight = ({ className, children }) =>
  <Td className={cn('vs-cell-right', className)}>{children}</Td>;

export const TableContainer = ({ className, children }) =>
  <div className={cn('vs-table-container', className)}>{children}</div>;

export const TableTitle = ({ className, children }) =>
  <div className={cn('vs-table-title', className)}>{children}</div>;

