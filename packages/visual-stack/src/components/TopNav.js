import React from 'react';
import R from 'ramda';
import { ToggleIcon } from './SideNav';
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
        <span className="fa-stack fa-lg user-menu-icon">
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className="fa fa-user fa-stack-1x fa-inverse"></i>
        </span>
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

const MainNav = ({ logo, appName, userMenu, hasSecondaryNav, onSideNavToggle, onSecondNavToggle }) => {
  const capAppName = appName ? appName.toUpperCase() : '';
  return (
    <div className="topnav topnav-main">
      <ul className="topnav-nav topnav-app-header">
        <li className="topnav-left-logo">{ logo }</li>
        <li className="topnav-left-app-name"><span className="logo-pipe"/>{ capAppName }</li>
        { onSideNavToggle &&
          <li className="topnav-icon"><ToggleIcon onClick={onSideNavToggle} /></li>
        }
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

export const TopNav = ({ logo, appName, userMenu, onSideNavToggle, secondaryNav, onSecondNavToggle }) => {
  return (
    <div className="topnav-wrapper">
      <MainNav
        logo={logo}
        appName={appName}
        onSideNavToggle={onSideNavToggle}
        hasSecondaryNav={!R.isNil(secondaryNav)}
        onSecondNavToggle={onSecondNavToggle}
        userMenu={userMenu}
      />
      { secondaryNav }

    </div>
  );
};
