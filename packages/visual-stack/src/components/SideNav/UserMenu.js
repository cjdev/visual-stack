/** @prettier */
import React from 'react';
import { Link, LinkContentWrapper } from './Link';
import { LogoutIcon, SettingsIcon } from './Icons';

export const UserIcon = ({ firstInitial, lastInitial, color }) => (
  <div className="user-icon-circle" style={{ backgroundColor: color }}>
    <span className="user-icon-first">{firstInitial}</span>
    <span className="user-icon-last">{lastInitial}</span>
  </div>
);

export const LogoutLink = ({ onLogout }) => {
  return (
    <Link>
      <a onClick={onLogout}>
        <LinkContentWrapper icon={<LogoutIcon />} label="Logout" />
      </a>
    </Link>
  );
};

export const SettingsLink = ({ onSettingsClick }) => {
  return (
    <Link>
      <a onClick={onSettingsClick}>
        <LinkContentWrapper icon={<SettingsIcon />} label="Settings" />
      </a>
    </Link>
  );
};
