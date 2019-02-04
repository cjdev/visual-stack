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
export const Field = ({className, label, error, help, optional, optionalLabel, children}) => (
  <div className={`vs-field ${className ? className : ''}`}>
    <Label>{label} <span className="vs-field-optional">{optional ? `- ${optionalLabel}` : null}</span></Label>
      {children}
    {error ? <div className="vs-validation-error">{error}</div> : <div className="vs-field-help">{help}</div>}
  </div>
);

export const FieldContent = ({className, children}) => (
    <div className={`vs-field-content ${className ? className : ''}`}>
        {children}
    </div>
);

// Input with label and error/help message
export const TextField = ({className, name, value, label, error, help, optional, optionalLabel, ...otherProps}) => (
  <Field classes={`vs-text-field ${className ? className : ''}`} label={label} error={error} help={help} optional={optional} optionalLabel={optionalLabel} {...otherProps}>
    <FieldContent>
        <Input className={ error ? "input-error" : ""} name={name} value={value} {...otherProps}/>
    </FieldContent>
  </Field>
);

// Just radio button and label
export const ChoiceInput = ({className, type = "radio", name, value, label, error, help, checked, style, ...otherProps}) => (
  <div className={`vs-choice-input ${className ? className : ''}`} style={style}>
    <Label>
      <Input type={type} name={name} value={value} checked={checked} {...otherProps}/>
      {label}
    </Label>
  </div>
);
