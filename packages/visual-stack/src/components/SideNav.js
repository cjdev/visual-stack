import React, { PropTypes } from 'react';
import './SideNav.css';

export const ToggleIcon = ({ onClick }) => {
  return (
    <a className=" sidenav-toggle-icon" onClick={onClick}>
      <i className="fa fa-bars"></i>
    </a>
  );
};

export const Header = ({ children }) =>
  <li className="sidenav-entry sidenav-header">{children}</li>;
Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export const LinkGroup = ({ label, icon, children, expanded, onClick }) => {
  const classes = 'sidenav-entry sidenav-container' + (expanded ? ' expanded' : '');
  return (
    <li className={classes}>
      <a className="sidenav-container-row" onClick={e => onClick(e, label)}>
        <div className="sidenav-container-row-left">
          { icon }
          <span className="sidenav-container-label">{ label }</span>
        </div>
        <i className="fa fa-chevron-right sidenav-container-chevron"></i>
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

export const SideNavIcon = ({ type }) => {
  return <i className={`fa fa-${type} sidenav-icon`}></i>;
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

