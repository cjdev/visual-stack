import React from 'react';
import PropTypes from 'prop-types';
import './Panel.css';

export const Panel = ({ children }) =>
  <div className="panel panel-default">
    {children}
  </div>;

export const Footer = ({ children }) =>
  <div className="panel-footer">
    {children}
  </div>;

export const Body = ({ children }) =>
  <div className="panel-body">
    {children}
  </div>;

export const Header = ({ title, children }) =>
  <div className="panel-heading">
    {title && <legend>{title}</legend>}
    {children}
  </div>;
Header.propTypes = {
  title: PropTypes.string,
};
