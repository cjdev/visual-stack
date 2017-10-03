import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './SlidingPanel.css';

export const ToggleIcon = ({ onClick, hoverText, toggleIconState }) => {
  const iconState = (toggleIconState) ? ' active' : '';
  return (
    <a className={'sliding-panel-toggle-icon' + iconState} onClick={onClick} title={hoverText}>
        <span className="fa-stack fa-lg">
          <i className="fa fa-circle fa-stack-2x toggle-icon-circle"></i>
          <i className="fa fa-sliders fa-stack-1x toggle-icon-fg"></i>
        </span>
    </a>
  );
};
ToggleIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
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
  active: PropTypes.bool,
};
