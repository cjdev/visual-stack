/** @prettier */
import React from 'react';
import { Link, LinkContentWrapper } from './Link';
import { LogoutIcon } from './Icons';

export const UserIcon = ({ firstInitial, lastInitial, color }) => (
  <div className="vs-user-icon-circle" style={{ backgroundColor: color }}>
    <span className="vs-user-icon-first">{firstInitial}</span>
    <span className="vs-user-icon-last">{lastInitial}</span>
  </div>
);

export const LogoutLink = ({ onLogout, label }) => {
  return (
    <Link>
      <a onClick={onLogout}>
        <LinkContentWrapper icon={<LogoutIcon />} label={ label || 'Logout' } />
      </a>
    </Link>
  );
};

export const UserMenuLink = ({ onClicked, linkIcon, linkLabel }) => {
  return (
    <Link>
      <a onClick={onClicked}>
        <LinkContentWrapper icon={linkIcon} label={linkLabel} />
      </a>
    </Link>
  );
};
