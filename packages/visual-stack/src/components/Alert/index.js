import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';
import CloseIcon from 'mdi-react/CloseIcon';
import { concat, reduce, unapply } from 'ramda';
import IconSuccess from '../IconSuccess';
import IconInfo from '../IconInfo';
import IconWarning from '../IconWarning';
import { Button } from '../Button';

const concatAll = unapply(reduce(concat, []));

const makeAlert = () => ({
  children,
  className,
  type,
  closeType,
  onClose,
  closeButtonText,
  ...restProps
}) => {
  const classes = concatAll(
    ['vs-alert-d', `vs-${type}-alert`],
    className ? [className] : []
  );

  const iconMap = {
    success: <IconSuccess className="vs-alert-icon" />,
    info: <IconInfo className="vs-alert-icon" />,
    warning: <IconWarning className="vs-alert-icon" />,
  };

  const closeButtonMap = {
    icon: (
      <CloseIcon className="vs-alert-close-icon" onClick={() => onClose()} />
    ),
    button: (
      <Button
        type="outline-secondary"
        className={'vs-alert-close-button'}
        onClick={() => onClose()}
      >
        {closeButtonText}
      </Button>
    ),
  };

  return (
    <div {...restProps} className={classes.join(' ')}>
      <div className="vs-alert-icon-container">
        {iconMap[type] || iconMap.info}
      </div>
      <div className="vs-alert-content">{children}</div>
      <div className="vs-alert-close-container">
        {closeButtonMap[closeType]}
      </div>
    </div>
  );
};

export const Alert = makeAlert();

Alert.propTypes = {
  type: PropTypes.oneOf(['info', 'warning', 'success']),
  closeType: PropTypes.oneOf(['icon', 'button']),
};
