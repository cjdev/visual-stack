/** @prettier */
import React, { PropTypes } from 'react';
import R from 'ramda';

import { SideNavSvgIcon, makeDefaultIcon } from './Icons';

export class LinkGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavState: this.props.collapsed,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.expanded) {
      this.setState({ sideNavState: nextProps.collapsed });
    }
    if (nextProps.collapsed !== this.props.collapsed && !this.props.collapsed) {
      this.props.onClick(false, this.props.label);
    }
  }

  render() {
    const classes =
      `${this.props.className || ''} sidenav-entry sidenav-container` +
      (this.props.expanded ? ' expanded' : '');
    const expandRow = () => {
      this.props.onClick(!this.props.expanded, this.props.label);
      if (this.props.expanded) {
        this.props.toggleSideNav(this.state.sideNavState);
      } else {
        this.props.toggleSideNav(this.props.expanded);
      }
    };

    const icon = !R.isNil(this.props.svgIcon) ? (
      <SideNavSvgIcon>{this.props.svgIcon}</SideNavSvgIcon>
    ) : !R.isNil(this.props.icon) ? (
      this.props.icon
    ) : (
      makeDefaultIcon(this.props.label)
    );

    const mappedChildren = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { inLinkGroup: true })
    );
    return (
      <li className={classes}>
        <a
          className="sidenav-container-row"
          onClick={expandRow}
          title={this.props.label}
        >
          <div className="sidenav-container-row-left">
            {icon}
            <span className="sidenav-container-label">{this.props.label}</span>
          </div>
          <i className="fa fa-chevron-right sidenav-container-chevron" />
        </a>
        <ul className="link-group-children">{mappedChildren}</ul>
      </li>
    );
  }
}
LinkGroup.propTypes = {
  expanded: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  toggleSideNav: PropTypes.func.isRequired,
};
