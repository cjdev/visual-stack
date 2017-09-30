/** @prettier */
import React from 'react';
import { Link, LinkContentWrapper } from './Link';
import { LogoutIcon } from './Icons';

export const UserIcon = ({ firstInitial, lastInitial }) => (
  <div className="user-icon-circle">
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

