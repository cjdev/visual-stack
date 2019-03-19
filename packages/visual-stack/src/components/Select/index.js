import React from 'react';
import ReactSelect from 'react-select';
import './Select.css';

const Select = ({className, error, disabled, ...otherProps}) => (
  <ReactSelect className={(error ? "vs-input-error" : "") + " vs-default-react-select " + (className ? className : "")}
               classNamePrefix={"vs-react-select"}
               isDisabled={disabled}
               {...otherProps}/>
);

export default Select;
