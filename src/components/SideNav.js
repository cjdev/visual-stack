import React, { PropTypes } from 'react';
import './SideNav.css';

export const Header = ({ children }) =>
  <li className="sidenav-entry sidenav-header">{children}</li>;
Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export const LinkGroup = ({ label, children, expanded, onClick }) => {
  const classes = 'sidenav-entry sidenav-container' + (expanded ? ' expanded' : '');
  return (
    <li className={classes}>
      <a className="sidenav-container-label" onClick={e => onClick(e, label)}>
        <div>{ label }</div>
        <i className="fa fa-chevron-right"></i>
      </a>
      <ul>
        { children }
      </ul>
    </li>
  );
};
LinkGroup.propTypes = {
  expanded: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export const Link = ({ children }) => {
  return (
  <li className="sidenav-entry sidenav-link">
    {children}
  </li>
  );
};

export const SideNav = ({ children, active }) => {
  return (
      <ul className={'sidenav' + (active ? ' active' : '')}>
        { children }
      </ul>
  );
};
SideNav.propTypes = {
  active: PropTypes.bool,
};

