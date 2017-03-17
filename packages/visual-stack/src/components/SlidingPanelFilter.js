import React from 'react';
import classNames from 'classnames';
import './SlidingPanelFilter.css';

export const ChangeMeLater = ({ label, children, onClick, expanded, active}) => {
    const classes = classNames('filter-container', { active });
    console.log(classes);
    return (
      <li className={classes}>
            <a className="filter-container-label" onClick={onClick}>
                <div>{ label }</div>
                <i className="fa fa-chevron-down"></i>
            </a>
            <ul>
                { children }
            </ul>
        </li>
    );
};

export const Filter = ({ active }) => {
    const classes = classNames('filter-options', { active });
    return (
        <div className={classes}>WOW COOL FILTER</div>
    );
};
