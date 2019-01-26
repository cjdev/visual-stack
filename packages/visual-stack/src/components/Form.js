import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

export const Input = ({ className, type, ...otherProps }) =>
  <input
    type={type || 'text'}
    className={`form-control ${className || ''}`}
    {...otherProps} />;
Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

export const Label = ({ children, className, required, vertical, ...otherProps }) =>
  <label className={`form-label control-label form-label-${vertical ? 'vertical' : 'horizontal'} ${className || ''}`} {...otherProps}>
    {children}
    {required && <span className="form-group-required-sign">*</span>}
  </label>;
Label.propTypes = {
  className: PropTypes.string,
  required: PropTypes.bool,
};

export const Legend = ({ children, ...otherProps }) =>
  <legend {...otherProps}>{children}</legend>;

export const Form = ({ children, vertical, ...otherProps }) =>
  <form className={vertical ? 'form-vertical' : 'form-horizontal'} {...otherProps}>{children}</form>;

export const FormGroup = ({ children, error, label, required, vertical, classes }) =>
  <div className={`form-group ${classes ? classes : ''} ${error ? 'has-error' : ''}`}>
    {label ? <Label vertical={vertical} className={!vertical ? 'col-sm-3' : ''} required={required}>{label}</Label>
           : <div className={!vertical ? 'col-sm-3' : ''} />}
    <div className={!vertical ? 'col-sm-5' : ''}>
      {children}
    </div>
    <div className={`error-container ${!vertical ? 'col-xs-4' : ''}`}>
      {error && <div className="form-group-error-span">{error}</div>}
    </div>
  </div>;
FormGroup.propTypes = {
  error: PropTypes.node,
  label: PropTypes.node,
  required: PropTypes.bool,
};

// Component that renders a label and error/help message
export const LabeledComponent = ({label, error, help, optional, optionalLabel = "Optional", className, children}) => (
  <div className="vs-labeled-component">
    <Label>{label} <span className="vs-labeled-component-optional">{optional ? `- ${optionalLabel}` : null}</span></Label>
    <div className={className}>
      {children}
    </div>
    {error ? <div className="vs-validation-error">{error}</div> : <div className="vs-labeled-component-help">{help}</div>}
  </div>
);

// Input with label and error/help message
export const InputField = ({name, label, error, help, value, ...otherProps}) => (
  <LabeledComponent label={label} error={error} help={help} {...otherProps}>
    <Input className={ error ? "input-error" : ""} name={name} value={value} {...otherProps}/>
  </LabeledComponent>
);

// Just radio button and label
export const ChoiceField = ({type = "radio", name, value, label, error, help, checked, className, style, ...otherProps}) => (
  <div className={className} style={style}>
    <Label>
      <Input type={type} name={name} value={value} checked={checked} {...otherProps}/>
      {label}
    </Label>
  </div>
);
