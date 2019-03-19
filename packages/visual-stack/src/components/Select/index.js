import React from 'react';
import ReactSelect from 'react-select';
import cn from 'classnames';
import './Select.css';

const Select = ({className, error, disabled, ...otherProps}) => (
  <ReactSelect className={cn({"vs-input-error": error}, "vs-default-react-select", className)}
               classNamePrefix={"vs-react-select"}
               isDisabled={disabled}
               {...otherProps}/>
);

export default Select;
