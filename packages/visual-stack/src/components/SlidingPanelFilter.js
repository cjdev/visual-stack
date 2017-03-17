import React from 'react';
import classNames from 'classnames';
import './SlidingPanelFilter.css';

export const ChangeMeLater = ({ label, children, onClick, expanded, active}) => {
    return (
        <li>
            <a className="filters-container-label" onClick={onClick}>
                <div>{ label }</div>
            </a>
            <ul>
                { children }
            </ul>
        </li>
    );
};

export const Filter = ({ active }) => {
    const classes = classNames('filter-panel', { active });
    console.log(classes);
    return (
        <div className={classes}>WOW COOL FILTER</div>
    );
};