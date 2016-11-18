import React from 'react';
import './SideNav.css';

export const Header = ({ label }) =>
  <li className="sidenav-entry sidenav-header">{label}</li>;

export const Container = ({ label, children }) =>
  <li className="sidenav-entry sidenav-container">
    <a>{ label }</a>
    <ul>
      { children }
    </ul>
  </li>;

export const Link = ({ children, active }) => {
  console.log(active);
  return (
  <li className="sidenav-entry sidenav-link">
    {active}
    {children}
  </li>
  );
};

  export const SideNav = ({ children }) => {
    console.log(children);
    return (
      <ul className="sidenav">
        { children }
      </ul>
    );
}
