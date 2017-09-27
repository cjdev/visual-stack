import React from 'react';
import R from 'ramda';
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

export const SecondaryNav = ({ active, children }) => {
  return (
    <div className={`topnav topnav-secondary ${active ? 'active' : ''}`}>
      <div className="topnav-secondary-left">
        {children}
      </div>
    </div>
  );
};

const MainNav = ({ appName, hasSecondaryNav, onSecondNavToggle, sideNavState }) => {
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
      </ul>
    </div>
  );
};

export const TopNav = ({ appName, secondaryNav, onSecondNavToggle, sideNavState }) => {
  return (
    <div className="topnav-wrapper">
      <MainNav
        appName={appName}
        hasSecondaryNav={!R.isNil(secondaryNav)}
        onSecondNavToggle={onSecondNavToggle}
        sideNavState={sideNavState}
      />
      { secondaryNav }

    </div>
  );
};
