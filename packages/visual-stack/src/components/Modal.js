import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const backgroundClick = (event, onBackgroundClick) => {
  if (event.target.matches('.modal')) {
    onBackgroundClick();
  }
};

export const Modal = ({ children, onBackgroundClick }) =>
  <div className="modal" style={{ display: 'block' }} onClick={event => onBackgroundClick ? backgroundClick(event, onBackgroundClick) : {} }>
    {children}
  </div>;

export const Header = ({ title, children }) =>
  <div className="modal-header">
    {title && <h1>{title}</h1>}
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
