import React from 'react';
import './SideNav.css';

export const Header = ({ label }) =>
  <li className="sidenav-entry sidenav-header">{label}</li>;

export const Container = ({ label, children, active, onClick }) => {
  //console.log('active?', label, active);
  const classes = "sidenav-entry sidenav-container" + (active ? " active" : "");
  return (
    <li className={classes}>
      <a className="sidenav-container-label" onClick={(e) => onClick(e, label)}>
        <div>{ label }</div>
        <i className="fa fa-chevron-right"></i>
      </a>
      <ul>
        { children }
      </ul>
    </li>
  );
}

export const Link = ({ children }) => {
  return (
  <li className="sidenav-entry sidenav-link">
    {children}
  </li>
  );
};

  export const SideNav = ({ children }) => {
    return (
      <ul className="sidenav">
        { children }
      </ul>
    );
}
