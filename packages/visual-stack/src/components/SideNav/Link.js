/** @prettier */
import React from 'react';
import { SideNavSvgIcon } from './Icons';

export const LinkContentWrapper = ({ icon, label }) => {
  const finalIcon = icon ? icon : <div className="placeholder-icon" />;

  return (
    <div className="sidenav-link-content-wrapper">
      <SideNavSvgIcon>{finalIcon}</SideNavSvgIcon>
      <div className="sidenav-link-label sidenav-container-label">{label}</div>
    </div>
  );
};

export const Link = ({ hoverText, children }) => {
  return (
    <li className="sidenav-entry sidenav-link" title={hoverText}>
      {children}
    </li>
  );
};
