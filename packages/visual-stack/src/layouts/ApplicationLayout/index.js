import React from 'react';
import R from 'ramda';
import './style.css';

const ApplicationLayout = ({ sideNav, sideNavState, children }) => {
  const contentStyles = (sideNavState || R.isNil(sideNavState)) ? 'application-layout-side' : 'application-layout-side-collapsed';
  return (
      <div className="application-layout">
        <div className="application-layout-container">
          <div className={contentStyles}>
            { sideNav }
          </div>
          <div className="application-layout-content">
            { children }
          </div>
        </div>
    </div>
  );
};

export default ApplicationLayout;

