import React from 'react';
import './Filters.css';
import R from 'ramda';

export const MultiSelectFilter = ({ values, onFilterChange, selectAllCheckbox, defaultChecked }) => {
  const domCheckboxes = [];
  let allCheckbox = null;

  const onAllChange = event => {
    const isAllChecked = event.target.checked;
    R.forEach(checkbox => (checkbox.checked = isAllChecked), domCheckboxes);

    return isAllChecked
      ? onFilterChange(values)
      : onFilterChange([]);
  };
  const onOptionChange = event => {
    if (selectAllCheckbox) {
      if (!event.target.checked) {
        allCheckbox.checked = false;
      }
      allCheckbox.checked = R.all(domCheckbox => domCheckbox.checked, domCheckboxes);
    }

    const selectedValuesAsStrings =
      R.pipe(
        R.filter(checkbox => checkbox.checked),
          R.map(checkbox => checkbox.value)
    )(domCheckboxes);
    const selectedValues = R.filter(({ value }) => R.contains('' + value, selectedValuesAsStrings), values);
    return onFilterChange(selectedValues);
  };

  const createCheckboxes = (val, idx) => {
    return (
      <label key={idx}>
        <input ref={ checkbox => domCheckboxes.push(checkbox) } key={idx} type="checkbox" value={val.value}
          onChange={ onOptionChange } defaultChecked={defaultChecked} />{ val.label }
      </label>);
  };

  const mapIndexes = R.addIndex(R.map);
  const checkboxes = mapIndexes(createCheckboxes, values);
  const selectAll = () => {
    let selectDiv = <div></div>;
    if (!R.isEmpty(values)) {
      if (selectAllCheckbox) {
        selectDiv = (
          <div className="select-all">
            <label>
              <input ref={ checkbox => (allCheckbox = checkbox)} type="checkbox" value="" onChange={ onAllChange } defaultChecked={defaultChecked} />All
            </label>
          </div>);
      }
    } else {
      selectDiv = (<div className="filter-error">No Filters Available</div>);
    }
    return selectDiv;
  };

  return (
    <div className="selection">
      { selectAll() }
      <div className="checkboxes">{ checkboxes }</div>
     </div>
  );
};
