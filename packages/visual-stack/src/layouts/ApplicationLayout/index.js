import React from 'react';
import R from 'ramda';
import './style.css';

const ApplicationLayout = ({ sideNav, sideNavState, slidingPanelState, children }) => {
  const sideNavStyles = (sideNavState || R.isNil(sideNavState)) ? 'vs-application-layout-side' : 'vs-application-layout-side-collapsed';
  const filterStyles = (slidingPanelState) ? 'vs-application-layout-filter' : 'vs-application-layout-filter-collapsed';
  return (
      <div className="vs-application-layout">
        <div className="vs-application-layout-container">
          <div className={sideNavStyles}>
            { sideNav }
          </div>
          <div className="vs-application-layout-content">
            { children }
          </div>
          <div className={filterStyles}>
          </div>
        </div>
    </div>
  );
};

export default ApplicationLayout;

