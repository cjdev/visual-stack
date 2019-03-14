import React from 'react';
import PropTypes from 'prop-types';
import {concat, reduce, unapply} from 'ramda';
import './Button.css';

const concatAll = unapply(reduce(concat, []));

const mkButton = buttonType => ({ children, className, type, large, ...otherProps }) => {
  const classes = concatAll(
    ['vs-btn-d', `vs-${type}-btn`],
    large ? ['vs-lrg-btn'] : [],
    className ? [className] : []
  );

  return (
    <button
      type={buttonType}
      {...otherProps}
      className={classes.join(' ')}>
      {children}
    </button>
  );
};

export const Button = mkButton('button');
export const SubmitButton = mkButton('submit');

Button.propTypes = SubmitButton.propTypes = {
  type: PropTypes.oneOf(['primary', 
    'success', 
    'info', 
    'default', 
    'warning', 
    'danger', 
    'solid-primary', 
    'solid-secondary', 
    'outline-primary', 
    'outline-secondary',
    'rounded-solid',
    'rounded-outline',
    'icon',
    'text',
    'text-link',
  ]).isRequired,
  large: PropTypes.bool,
};
