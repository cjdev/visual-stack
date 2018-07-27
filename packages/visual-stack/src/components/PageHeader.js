import React from 'react';
import './PageHeader.css';

export const PageTitle = ({ children }) =>
  <div className="vs-page-heading--title">
    {children}
  </div>;

export const PageHeaderSection = ({ children }) =>
  <div className="vs-page-heading--section">
    {children}
  </div>;

export const PageDescription = ({ children }) =>
  <span className="vs-page-heading--description">
    {children}
  </span>;

export const PageHeader = ({ children }) =>
  <div className="vs-page-heading">
    {children}
  </div>;
