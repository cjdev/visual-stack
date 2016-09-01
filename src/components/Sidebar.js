import classNames from 'classnames';
import React, { PropTypes } from 'react';
import './Sidebar.css';

export const NavItem = ({ label, grouped = false, expanded = false, linkTo }) => {
  const classes = classNames({
    indent: grouped,
    collapse: grouped && !expanded,
    toplevel: !grouped,
  });
  return (
    <div className="nav-item">
      <button className={classes}>
        {label}
      </button>
    </div>
  );
};


export const NavGroup = ({ label, open, children, onNavGroupClick }) => {
  const arrowClasses = 'fa fa-fw fa-caret-' + (open? 'down' : 'right');
  let navOptions;
  if (open) {
    navOptions = children;
  }

  return (
    <div className="nav-group">
      <button onClick={onNavGroupClick}>
        <i className={arrowClasses}></i>
        {label}
      </button>
      {navOptions}
    </div>
  );
};

NavGroup.propTypes = {
  open: PropTypes.bool,
};

export const Sidebar = ({ children }) => {
  return (
    <div className="side-nav">
      { children }
    </div>
  );
};

