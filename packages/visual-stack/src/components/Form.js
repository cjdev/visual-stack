import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

export const Input = ({ className, type, ...otherProps }) =>
  <input
    type={type || 'text'}
    className={`vs-form-control ${className || ''}`}
    {...otherProps} />;
Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

export const Label = ({ children, className, required, vertical, ...otherProps }) =>
  <label className={`vs-form-label vs-control-label vs-form-label-${vertical ? 'vertical' : 'horizontal'} ${className || ''}`} {...otherProps}>
    {children}
    {required && <span className="vs-form-group-required-sign">*</span>}
  </label>;
Label.propTypes = {
  className: PropTypes.string,
  required: PropTypes.bool,
};

export const Legend = ({ children, ...otherProps }) =>
  <legend {...otherProps}>{children}</legend>;

export const Form = ({ children, vertical, ...otherProps }) =>
  <form className={vertical ? 'vs-form-vertical' : 'vs-form-horizontal'} {...otherProps}>{children}</form>;

export const FormGroup = ({ children, error, label, required, vertical }) =>
  <div className={`vs-form-group ${error ? 'vs-has-error' : ''}`}>
    {label ? <Label vertical={vertical} className={!vertical ? 'col-sm-3' : ''} required={required}>{label}</Label>
           : <div className={!vertical ? 'col-sm-3' : ''} />}
    <div className={!vertical ? 'col-sm-5' : ''}>
      {children}
    </div>
    <div className={`vs-error-container ${!vertical ? 'col-xs-4' : ''}`}>
      {error && <div className="vs-form-group-error-span">{error}</div>}
    </div>
  </div>;
FormGroup.propTypes = {
  error: PropTypes.node,
  label: PropTypes.node,
  required: PropTypes.bool,
};
