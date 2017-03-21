import React from 'react';
import classNames from 'classnames';
import './SlidingPanelFilter.css';
import R from 'ramda';

export const MultiSelectFilter = ({ active, values, onSelect }) => {
  const classes = classNames('filter-options', { active });
  const domCheckboxes = [];
  const createCheckboxes = (val, idx) => {
    return (
      <label key={idx}>
        <input ref={ checkbox => domCheckboxes.push(checkbox) } key={idx} type="checkbox" value={val.value} onChange={ () => { onSelect([val]); } }/>{ val.label }
      </label>);
  };
  const mapIndexes = R.addIndex(R.map);
  const checkboxes = mapIndexes(createCheckboxes, values);
  const checkAll = element => {
    const isSelectAll = element.target.checked;

    R.forEach(checkbox => {
      checkbox.checked = isSelectAll;
    }, domCheckboxes);

    return isSelectAll ? onSelect(values)
      : onSelect([]);
  };
  return (
    <div className={classes}>
      <div className="select-all"><label><input type="checkbox" value="" onClick={ e => checkAll(e)} />All</label></div>
      <div className="checkboxes">
        { checkboxes }
      </div>
    </div>
  );
};
