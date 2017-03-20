import React from 'react';
import classNames from 'classnames';
import './SlidingPanelFilter.css';
import R from 'ramda';

export const FilterDropdown = ({ label, children, onClick, expanded, active}) => {
    const classes = classNames('filter-container', { active });
    return (
      <li className={classes}>
            <a className="filter-container-label" onClick={onClick}>
                <div>{ label }</div>
                <i className="fa fa-chevron-down"></i>
            </a>
            <ul>
              { R.map(children)}
            </ul>
        </li>
    );
};

export const Filter = ({ active, values }) => {
    const classes = classNames('filter-options', { active });
    const createCheckboxes = (val) => {
      return <input type="checkbox" value="{val.value}"><label>{val.label}</label></input>;
    };
    const names = R.map(createCheckboxes, values);
    return (
      <div className={classes}>
        { names }
      </div>
    );
};
