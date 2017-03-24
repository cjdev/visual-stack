import React from 'react';
import './Filters.css';
import R from 'ramda';

export const MultiSelectFilter = ({ values, onFilterChange }) => {
  const domCheckboxes = [];
  const onChangeCheckbox = () => {
    const selectedValues =
      R.pipe(
        R.filter(checkbox => checkbox.checked),
        R.map(checkbox => checkbox.value)
      )(domCheckboxes);

    return onFilterChange(
              R.map(({ value }) => value,
                R.filter(({ value }) => R.contains('' + value, selectedValues), values)));
  };

  const createCheckboxes = (val, idx) => {
    return (
      <label key={idx}>
        <input ref={ checkbox => domCheckboxes.push(checkbox) } key={idx} type="checkbox" value={val.value} onChange={ onChangeCheckbox }/>{ val.label }
      </label>);
  };

  const mapIndexes = R.addIndex(R.map);
  const checkboxes = mapIndexes(createCheckboxes, values);
  const checkAll = element => {
    const isSelectAll = element.target.checked;
    R.forEach(checkbox => (checkbox.checked = isSelectAll), domCheckboxes);
    return isSelectAll
      ? onFilterChange(R.map(({ value }) => value, values))
      : onFilterChange([]);
  };

  return (
    <div>
      <div className="select-all"><label><input type="checkbox" value="" onChange={ checkAll } />All</label></div>
      <div className="checkboxes">
        { checkboxes }
      </div>
    </div>
  );
};
