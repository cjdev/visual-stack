import React from 'react';
import ReactSelect from 'react-select';
import './Select.css';

const Select = ({name, className, error, value, onChange, onBlur, disabled, ...otherProps}) => (
  <ReactSelect className={(error ? "input-error" : "") + " default-react-select " + (className ? className : "")}
               classNamePrefix={"react-select"}
               name={name}
               value={value}
               onChange={onChange}
               isDisabled={disabled}
               onBlur={onBlur}
               {...otherProps}/>
);

export default Select;
