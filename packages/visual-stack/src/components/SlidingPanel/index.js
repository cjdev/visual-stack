import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './SlidingPanel.css';
import FilterIcon from 'mdi-react/FilterIcon';

export const ToggleIcon = ({ onClick, hoverText, toggleIconState, label }) => {
  const iconState = (toggleIconState) ? ' active' : '';
  return (
    <a className={'vs-sliding-panel-toggle-icon' + iconState} onClick={onClick} title={hoverText}>
        <div className="vs-filter-icn-btn"><FilterIcon className="filterIcon"/><span>{ label || 'Show Filters' }</span></div>
    </a>
  );
};
ToggleIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  toggleIconState: PropTypes.bool,
  hoverText: PropTypes.string,
  label: PropTypes.string,
};

export const SlidingPanelHeader = ({ children }) => {
  return (
    <li className="vs-sliding-panel-header">
      { children }
    </li>
  );
};

export const SlidingPanelSection = ({ children }) => {
  return (
    <li className="vs-sliding-panel-section">
      { children }
    </li>
  );
};

export const SlidingPanel = ({ children, active }) => {
  return (
    <div className={ classNames('vs-sliding-panel', { active })}>
      <ul>
        { children }
      </ul>
    </div>
  );
};

export const SlidingPanelDropdown = ({ label, children, onClick, expanded }) => {
  const containerClasses = classNames('vs-filter-container', { expanded });
  const optionsClasses = classNames('vs-filter-options', { expanded });
  return (
    <ul className={containerClasses}>
      <a className="vs-filter-container-label" onClick={onClick}>
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
