import React from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ children }) =>
   <div className="modal" style={{ display: 'block' }}>
     {children}
   </div>;

export const Header = ({ title, children }) =>
  <div className="modal-header">
    {title && <legend>{title}</legend>}
    {children}
  </div>;
Header.propTypes = {
  title: PropTypes.string,
};

export const Dialog = ({ children }) =>
  <div className="modal-dialog">
    {children}
  </div>;

export const Content = ({ children }) =>
  <div className="modal-content">
    {children}
  </div>;

export const Body = ({ children }) =>
  <div className="modal-body">
    {children}
  </div>;

export const Footer = ({ children }) =>
  <div className="modal-footer">
    {children}
  </div>;

export const Backdrop = () =>
  <div className="modal-backdrop fade in"/>;
