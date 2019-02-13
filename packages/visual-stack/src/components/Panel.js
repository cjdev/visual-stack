import React from 'react';
import PropTypes from 'prop-types';
import './Panel.css';

export const Panel = ({ children }) =>
  <div className="cj-panel panel panel-default">
    {children}
  </div>;

export const Footer = ({ children }) =>
  <div className="cj-panel panel-footer">
    {children}
  </div>;

export const Body = ({ children, paddingSize}) =>
  <div className={`cj-panel panel-body ${paddingSize ? `cj-panel-body-padding-${paddingSize}` : ""}`}>
    {children}
  </div>;

export const Header = ({ title, children }) =>
  <div className="cj-panel panel-heading">
    {title && <legend>{title}</legend>}
    {children}
  </div>;
Header.propTypes = {
  title: PropTypes.string,
};
