import React from 'react';
import './Table.css';

export const Table = ({ children }) => <table className="table-style">{children}</table>;

export const Th = ({ children }) => <th className="cell table-header">{children}</th>;

export const Tr = ({ children }) => <tr className="cell">{children}</tr>;

export const TrHead = ({ children }) => <thead><Tr>{children}</Tr></thead>;

export const Td = ({ children }) => <td className="cell">{children}</td>;

export const TdRight = ({ children }) => <td className="cell right-align">{children}</td>;

export const TableContainer = ({ children }) => <div className="panel">{children}</div>;

export const TableTitle = ({ children }) => <div className="panelTitle">{children}</div>;
