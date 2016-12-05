import React from 'react';
import './TopNav.css';

export const LeftTopNav = ({ children }) => {
  return (
    <ul className="topnav left">
      { children }
    </ul>
  );
};

export const TopNav = ({ children }) => {
  return (
    <ul className="topnav">
      { children }
    </ul>
  );
};
