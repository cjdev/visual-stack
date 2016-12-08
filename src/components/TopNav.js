import React from 'react';
import { ToggleIcon } from './SideNav';
import './TopNav.css';

export const IconGroup = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  );
};

export const UserMenu = () => {
  return (
    <div>UserMenu</div>
  );
};

export const TopNav = ({ logo, appName, iconGroup, userMenu, onSideNavToggle }) => {
  return (
    <div className="topnav">
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
          <div className="topnav-icon">
            <a ><i className="fa fa-ellipsis-v"></i></a>
          </div>
          { userMenu }
        </div>
      </div>
    </div>
  );
};
