import React from 'react';
import cn from 'classnames';
import { HoverPopover } from '../Popover';
import './styles.css';
import { PropTypes } from 'prop-types';

export const Tooltip = ({ className, ...restProps }) => (
  <HoverPopover
    placement="top"
    modifiers={{
      preventOverflow: {
        boundariesElement: 'viewport',
      },
      offset: {
        offset: '0, 4',
      },
    }}
    className={cn(className, 'vs-tooltip')}
    {...restProps}
  />
);

Tooltip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  content: PropTypes.node,
};
