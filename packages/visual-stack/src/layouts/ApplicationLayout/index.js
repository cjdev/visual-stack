import React from 'react';
import './style.css';

const ApplicationLayout = ({ topNav, sideNav, children }) => {
  return (
      <div className="application-layout">
        <div>
          { topNav }
        </div>
        <div className="application-layout-container">
          <div className="application-layout-side">
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
