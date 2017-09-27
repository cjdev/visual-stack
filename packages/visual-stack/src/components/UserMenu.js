import React from 'react';
import { AccountIcon } from '../components/Icons';
import { Link, LinkGroup, LinkContentWrapper } from '../components/SideNav';
import './UserMenu.css';
import { LogoutIcon } from '../components/Icons';

export const UserMenu = ({ name }) => {
  return (
    <LinkGroup label={name} expanded={true}>
      <Link>
        <a href="">child link</a>
      </Link>
      <LinkContentWrapper icon={<LogoutIcon />} label="Logout" />
    </LinkGroup>
  );
};

export const UserIcon = ({ firstInitial, lastInitial }) => (
  <div className="user-icon-circle">
    <span className="user-icon-first">{firstInitial}</span>
    <span className="user-icon-last">{lastInitial}</span>
  </div>
);

// export const UserMenu2 = ({ title, open, onClick, children }) => {
//   return (
//     <div className={`sidenav-user-menu ${open ? 'active' : ''}`}>
//       <a onClick={onClick}>
//         <AccountIcon className="mdi-account" />
//         USERMENU
//         <span className="username">{title}</span>
//         <i className="fa fa-chevron-down"></i>
//       </a>
//       <ul className="topnav-dropdown">
//         {children}
//       </ul>
//     </div>
//   );
// };

// export const UserDropdownItem = ({ name, firstInitial, lastInitial, email }) => {
//   return (
//       <li className="user-dropdown-item">
//         <div className="circle">
//           <span className="first">{firstInitial.toUpperCase()}</span>
//           <span className="last">{lastInitial.toUpperCase()}</span>
//         </div>
//         <ul className="user-info">
//           <li className="name">{name}</li>
//           <li className="email">{email}</li>
//         </ul>
//       </li>
//   );
// };

