import React from 'react';
import cn from 'classnames';
import CJLogo from '../../components/CJLogo';
import PropTypes from 'prop-types';

export const TopNav = ({
  className,
  title,
  subtitle,
  actionChildren,
  children,
  contentSize,
  ...restProps
}) => {
  return (
    <div {...restProps} className={cn(`vs-topnav`, className)}>
      <div className="vs-topnav-header vs-topnav-page-title">
        <div className="vs-topnav-logo-title-container">
          <div className="vs-topnav-logo-container">
            <span>{<CJLogo />}</span>
          </div>
          <h1 className="vs-topnav-title">{title}</h1>
        </div>
        {subtitle ? <div className={'vs-topnav-text'}>{subtitle}</div> : ''}
        <div className="vs-topnav-button-bar">{actionChildren}</div>
      </div>
      <div
        className={cn(
          'vs-topnav-content',
          `vs-topnav-content-${contentSize ? contentSize : 'normal'}`
        )}
      >
        {children}
      </div>
    </div>
  );
};

TopNav.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  actionChildren: PropTypes.object,
  children: PropTypes.object,
  subtitle: PropTypes.string,
  contentSize: PropTypes.string,
};
