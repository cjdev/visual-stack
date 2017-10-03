import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { always } from 'ramda';
import './MenuBar.css';

export const MenuBarItem = ({ children }) =>
  <li>
    <span className="navbar-menu--title">{children}</span>
  </li>;

export const MenuBarDropdown = ({ children, title, open }) =>
  <li className={`dropdown ${open ? 'open' : ''}`}>
    <span className="navbar-menu--title">
      <a href="#" className="dropdown-toggle" onClick={e => { e.preventDefault(); }}>
        {title}
        <span className="caret" />
      </a>
    </span>
    <ul className="dropdown-menu user-menu">
      {children}
    </ul>
  </li>;
MenuBarDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

export const MenuBarDropdownItem = ({ children }) =>
  <li>{children}</li>;

export const MenuBar = ({ children, leftItems, rightItems, onTitleClick }) =>
  <nav className="navbar navbar-default navbar-container">
    <div className="container-fluid">
      <div className="row">
        <div className="navbar-header navbar-header--logo">
          <span onClick={onTitleClick || always(undefined)} className={`navbar-brand ${onTitleClick && 'navbar-brand--button'}`} />
          <span className="navbar-divider" />

          {/* silence missing `key` warnings by using spread with createElement instead of interpolating an array */}
          {createElement('ul', { className: 'nav navbar-nav' }, ...(leftItems || children || []))}
          {createElement('ul', { className: 'nav navbar-nav navbar-right' }, ...(rightItems || []))}
        </div>
      </div>
    </div>
  </nav>;
MenuBar.propTypes = {
  leftItems: PropTypes.arrayOf(PropTypes.element),
  rightItems: PropTypes.arrayOf(PropTypes.element),
  onTitleClick: PropTypes.func,
};
