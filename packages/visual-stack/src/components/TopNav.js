import React from 'react';
import R from 'ramda';
import { AccountIcon } from '../components/Icons/Nav';
import './TopNav.css';

export const DropdownItem = ({ logo, title, onClick }) => {
  return (
    <li className="dropdown-item">
      <a onClick={onClick}>
        <div className="topnav-dropdown-logo">{ logo }</div>
        <div className="topnav-dropdown-title">{ title }</div>
      </a>
    </li>
  );
};

export const UserDropdownItem = ({ name, firstInitial, lastInitial, email }) => {
  return (
      <li className="user-dropdown-item">
        <div className="circle">
          <span className="first">{firstInitial.toUpperCase()}</span>
          <span className="last">{lastInitial.toUpperCase()}</span>
        </div>
        <ul className="user-info">
          <li className="name">{name}</li>
          <li className="email">{email}</li>
        </ul>
      </li>
  );
};

export const UserMenu = ({ title, open, onClick, children }) => {
  return (
    <li className={`user-menu ${open ? 'active' : ''}`}>
      <a onClick={onClick}>

        <AccountIcon className="mdi-account" />

        <span className="username">{title}</span>
        <i className="fa fa-chevron-down"></i>
      </a>
      <ul className="topnav-dropdown">
        {children}
      </ul>
    </li>
  );
};

export const SecondaryNav = ({ active, children }) => {
  return (
    <div className={`topnav topnav-secondary ${active ? 'active' : ''}`}>
      <div className="topnav-secondary-left">
        {children}
      </div>
    </div>
  );
};

const MainNav = ({ appName, userMenu, hasSecondaryNav, onSecondNavToggle, sideNavState }) => {
  const capAppName = appName ? appName.toUpperCase() : '';
  const topNavClasses = (sideNavState) ? 'topnav topnav-collapsed' : 'topnav topnav-expanded';
  return (
    <div className={topNavClasses}>
      <ul className="topnav-nav topnav-app-header">
        <li className="topnav-left-app-name">{ capAppName }</li>
      </ul>
      <ul className="topnav-nav">
      </ul>
      <ul className="topnav-nav topnav-nav-right">
        { hasSecondaryNav &&
          <li className="secondarynav-toggle-icon topnav-icon">
            <a onClick={onSecondNavToggle}><i className="fa fa-ellipsis-v"></i></a>
          </li>
        }
        {userMenu}
      </ul>
    </div>
  );
};

export const TopNav = ({ appName, userMenu, secondaryNav, onSecondNavToggle, sideNavState }) => {
  return (
    <div className="topnav-wrapper">
      <MainNav
        appName={appName}
        hasSecondaryNav={!R.isNil(secondaryNav)}
        onSecondNavToggle={onSecondNavToggle}
        userMenu={userMenu}
        sideNavState={sideNavState}
      />
      { secondaryNav }

    </div>
  );
};
