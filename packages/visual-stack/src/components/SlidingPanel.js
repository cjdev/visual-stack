import React from 'react';
import classNames from 'classnames';
import './SlidingPanel.css';

export const ToggleIcon = ({ onClick }) => {
  return (
    <a className="sliding-panel-toggle-icon" onClick={onClick}>
        <span className="fa-stack fa-lg">
          <i className="fa fa-circle fa-stack-2x toggle-icon-circle"></i>
          <i className="fa fa-sliders fa-stack-1x toggle-icon-fg"></i>
        </span>
    </a>
  );
};
ToggleIcon.propTypes = {
  onClick: React.PropTypes.func.isRequired,
};

export const SlidingPanelHeader = ({ children }) => {
  return (
    <li className="sliding-panel-header">
      { children }
    </li>
  );
};

export const SlidingPanelSection = ({ children }) => {
  return (
    <li className="sliding-panel-section">
      { children }
    </li>
  );
};

export const SlidingPanel = ({ children, active }) => {
  return (
    <div className={ classNames('sliding-panel', { active })}>
      <ul>
        { children }
      </ul>
    </div>
  );
};

export const SlidingPanelDropdown = ({ label, children, onClick, expanded }) => {
  const containerClasses = classNames('filter-container', { expanded });
  const optionsClasses = classNames('filter-options', { expanded });
  return (
    <ul className={containerClasses}>
      <a className="filter-container-label" onClick={onClick}>
        <div>{ label }</div>
        <i className="fa fa-chevron-right"></i>
      </a>
      <ul>
        <div className={optionsClasses}>
          { children }
        </div>
      </ul>
    </ul>
  );
};

SlidingPanel.propTypes = {
  active: React.PropTypes.bool,
};
