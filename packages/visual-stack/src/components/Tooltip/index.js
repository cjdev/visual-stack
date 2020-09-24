import React from 'react';
import cn from 'classnames';
import { HoverPopover } from '../Popover';
import './styles.css';

export const Tooltip = ({ className, placement = 'top', ...restProps }) => (
  <HoverPopover
    placement={placement}
    className={cn(className, 'vs-tooltip')}
    {...restProps}
  />
);
