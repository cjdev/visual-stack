import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './SlidingPanel.css';
import FilterVariantIcon from 'mdi-react/FilterVariantIcon';
import ArrowRightIcon from 'mdi-react/ArrowRightIcon';

export const ToggleIcon = ({ onClick, hoverText, toggleIconState, className, ...restProps }) => {
  const Icon = toggleIconState ? ArrowRightIcon : FilterVariantIcon;

  return (
    <a className={`vs-sliding-panel-toggle-icon ${className}`} onClick={onClick} title={hoverText} {...restProps}>
      <div className="vs-sliding-panel-section-icon-btn"><Icon className="vs-sliding-panel-section-icon" /></div>
    </a>
  );
};
ToggleIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  toggleIconState: PropTypes.bool,
  hoverText: PropTypes.string,
  label: PropTypes.string,
};

export const SlidingPanel = ({ children, active }) => {
  return (
    <div className={classNames('vs-sliding-panel', { 'vs-active': active })}>
      <ul className="vs-force-sliding-panel-width">
        {children}
      </ul>
    </div>
  );
};
SlidingPanel.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool,
};

export const SlidingPanelHeader = ({ className = '', children }) => {
  return (<li className={`${className} vs-sliding-panel-header`}>{children}</li>);
};
SlidingPanelHeader.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export const SlidingPanelSection = ({ children }) => {
  return (<li className="vs-sliding-panel-section">{children}</li>);
};
SlidingPanelSection.propTypes = {
  children: PropTypes.any,
};

export const SlidingPanelDropdown = ({ label, children, onClick, expanded }) => {
  const containerClasses = classNames('vs-sliding-panel-section-container', { 'vs-expanded': expanded });
  const optionsClasses = classNames('vs-sliding-panel-section-options', { 'vs-expanded': expanded });
  return (
    <ul className={containerClasses}>
      <a className="vs-sliding-panel-section-container-label" onClick={onClick}>
        <div>{label}</div>
        <i className="fa fa-chevron-right"></i>
      </a>
      <ul>
        <div className={optionsClasses}>
          {children}
        </div>
      </ul>
    </ul>
  );
};
SlidingPanelDropdown.propTypes = {
  children: PropTypes.any,
  label: PropTypes.any,
  onClick: PropTypes.func,
  expanded: PropTypes.bool,
};
