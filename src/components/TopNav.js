import React from 'react';
import { ToggleIcon } from './SideNav';
import './TopNav.css';

export const IconGroup = ({ children }) => {
  return (
    <div className="topnav-icongroup">
      { children }
    </div>
  );
};

export const UserMenu = () => {
  return (
    <div>UserMenu</div>
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

const MainNav = ({ logo, appName, iconGroup, userMenu, onSideNavToggle, onSecondNavToggle }) => {
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
        <div className="topnav-right-right">
          <IconGroup>
            <div className="secondarynav-toggle-icon">
              <a onClick={onSecondNavToggle}><i className="fa fa-ellipsis-v"></i></a>
            </div>
          </IconGroup>
          { userMenu }
        </div>
      </div>
    </div>
  );
};

export const TopNav = ({ logo, appName, iconGroup, userMenu, onSideNavToggle, secondNavActive, onSecondNavToggle }) => {
  return (
    <div className="topnav-wrapper">
      <MainNav
        logo={logo}
        appName={appName}
        iconGroup={iconGroup}
        onSideNavToggle={onSideNavToggle}
        onSecondNavToggle={onSecondNavToggle}
        userMenu={userMenu} />
      <SecondaryNav active={secondNavActive} />
    </div>
  );
};
