import React from 'react';
import './TopNav.css';


export const TopNav = ({ Logo, AppName, children }) => {
  return (
    <div className="topnav">
      <div className="topnav-left">
        <div className="topnav-left-logo">{ Logo }</div>
        <div className="topnav-left-app-name">{ AppName }</div>
      </div>
        { children }
    </div>
  );
};
