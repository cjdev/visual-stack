/** @prettier */
import React from 'react';
import R from 'ramda';

export { LogoutIcon, SettingsIcon } from '../../components/Icons';

export const makeDefaultIcon = label => (
  <SideNavIcon type="circle-thin custom" text={R.head(label)} />
);

export const ToggleIcon = ({ sideNavState, onClick }) => {
  const sideNavIcon = sideNavState
    ? 'fa fa-chevron-right'
    : 'fa fa-chevron-left';
  return (
    <a className="vs-sidenav-toggle-icon" onClick={onClick}>
      <i className={sideNavIcon} />
    </a>
  );
};

export const SideNavIcon = ({ type, text }) => {
  return R.isNil(text) ? (
    <i className={`fa fa-${type} vs-sidenav-icon`} />
  ) : (
    <div className="fa-stack vs-stacked-icon class">
      <i className={`fa fa-${type} vs-sidenav-icon`}>
        <span className="fa fa-stack-1x single-text">{text}</span>
      </i>
    </div>
  );
};

export const SideNavSvgIcon = ({ children }) => {
  return <div className="vs-sidenav-svg-icon">{children}</div>;
};
