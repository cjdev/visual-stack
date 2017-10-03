import React from 'react';
import PropTypes from 'prop-types';
import { map, omit } from 'ramda';

import './List.css';

export const List = ({ children }) =>
  <div>{children}</div>;

export const Toolbar = ({ title, children }) =>
  <div className="list-toolbar toolbar-widget-header">
    {title && <span className="list-toolbar-title">{title}</span>}
    {children}
  </div>;
Toolbar.propTypes = {
  title: PropTypes.string,
};

export const ActionButton = ({ icon, className, onClick }) => {
  return (
    <span className={`${icon} ${className}`} onClick={onClick} ></span>
  );
};
ActionButton.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
ActionButton.defaultProps = {
  className: '',
};


const renderHeaderCell = ({ width, alignment, text }) =>
  <Cell key={text} width={width}>
    <div className={`list-header-label text-${alignment || 'left'}`}>
      {text}
    </div>
  </Cell>;

export const Header = ({ labels }) =>
  <div className="list-header">
    <Row>{map(renderHeaderCell, labels)}</Row>
  </div>;
Header.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.shape({
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    width: PropTypes.number,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export const Rows = ({ children }) =>
  <div className="list-rows">
    {children}
  </div>;

export const Row = props =>
  <div className="list-row" {...omit(['children', 'expansion'], props)}>
    <div className="container-fluid">
      <div className="row">
        {props.children}
      </div>
      {props.expansion && <ExpandedRowPanel>{props.expansion}</ExpandedRowPanel>}
    </div>
  </div>;

const ExpandedRowPanel = ({ children }) =>
  <div className="list-row-expanded">
    {children}
  </div>;

export const Cell = ({ width, children }) =>
  <div className={`list-cell col-xs-${width || 1}`}>
    {children}
  </div>;
Cell.propTypes = {
  width: PropTypes.number,
};
