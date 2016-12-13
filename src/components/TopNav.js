import React from 'react';
import { ToggleIcon } from './SideNav';
import './TopNav.css';

export const DropdownItem = ({ children }) =>
  <li>{children}</li>;

export const UserMenu = ({ title, children }) => {
  return (
    <li>
      <a>
        <i className="fa fa-user-circle"></i>
        {title}
        <i className="fa fa-chevron-down"></i>
      </a>
      <ul className="topnav-dropdown topnav-dropdown-active">
        {children}
      </ul>
    </li>
  );
};

const SecondaryNav = ({ active }) => {
  return (
    <div className={`topnav topnav-secondary ${active ? 'active' : ''}`}>
      <div className="topnav-secondary-left">
        Secondary Nav
      </div>
    </div>
  );
};

const MainNav2 = ({ logo, appName, iconGroup, userMenu, onSideNavToggle, onSecondNavToggle }) => {
  return (
    <div className="topnav topnav-main">
      <div className="topnav-left">
        <div className="topnav-left-logo">{ logo }</div>
        <div className="topnav-left-app-name">{ appName }</div>
        { onSideNavToggle &&
          <IconGroup>
            <ToggleIcon onClick={onSideNavToggle} />
          </IconGroup>
        }
      </div>
      <div className="topnav-right">
        <div className="topnav-right-left">
          { iconGroup }
        </div>


        <div className="topnav-right">
          <IconGroup>
            <div className="secondarynav-toggle-icon">
              <a onClick={onSecondNavToggle}><i className="fa fa-ellipsis-v"></i></a>
            </div>
          </IconGroup>
          { userMenu }
        </div>

        <ul>
          <li>
              <a onClick={onSecondNavToggle}><i className="fa fa-ellipsis-v"></i></a>
          </li>
          <li>
            usermenu
          </li>
        </ul>



      </div>
    </div>
  );
};

const MainNav = ({ logo, appName, userMenu, onSideNavToggle, onSecondNavToggle }) => {
  return (
    <div className="topnav topnav-main">
      <ul className="topnav-nav topnav-app-header">
        <li className="topnav-left-logo">{ logo }</li>
        <li className="topnav-left-app-name">{ appName }</li>
        { onSideNavToggle &&
          <li className="topnav-icon"><ToggleIcon onClick={onSideNavToggle} /></li>
        }
      </ul>
      <ul className="topnav-nav">
        <li className="topnav-icon"><i className="fa fa-bell"></i></li>
        <li className="topnav-icon"><i className="fa fa-envelope"></i></li>
      </ul>

      <ul className="topnav-nav topnav-nav-right">
        <li className="secondarynav-toggle-icon topnav-icon">
          <a onClick={onSecondNavToggle}><i className="fa fa-ellipsis-v"></i></a>
        </li>
        {userMenu}
      </ul>
    </div>

  );
};

export const TopNav = ({ logo, appName, userMenu, onSideNavToggle, secondNavActive, onSecondNavToggle }) => {
  return (
    <div className="topnav-wrapper">
      <MainNav
        logo={logo}
        appName={appName}
        onSideNavToggle={onSideNavToggle}
        onSecondNavToggle={onSecondNavToggle}
        userMenu={userMenu}
      />
      <SecondaryNav active={secondNavActive} />
    </div>
  );
};

