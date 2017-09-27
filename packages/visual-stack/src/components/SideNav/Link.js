/** @prettier */
import React from 'react';
import R from 'ramda';
import { SideNavSvgIcon, makeDefaultIcon } from './Icons';

export const LinkContentWrapper = ({ icon, label }) => {
  return (
    <div className="sidenav-link-content-wrapper">
      <SideNavSvgIcon>{icon}</SideNavSvgIcon>
      <div className="sidenav-link-label sidenav-container-label">{label}</div>
    </div>
  );
};

export const Link = ({ hoverText, children, inLinkGroup }) => {
  const childrenWithProps = React.Children.map(children, child => {
    const children = child.props.children;
    const mappedChildren =
      !inLinkGroup && React.Children.count(children) === 1
        ? R.pair(makeDefaultIcon(children.props.children), children)
        : child.props.children;
    return React.cloneElement(child, { children: mappedChildren });
  });

  return (
    <li className="sidenav-entry sidenav-link" title={hoverText}>
      {childrenWithProps}
    </li>
  );
};
