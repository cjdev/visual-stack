/** @prettier */
import React from 'react';
import PropTypes from 'prop-types';
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
      `${this.props.className || ''} vs-sidenav-entry vs-sidenav-container` +
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

    return (
      <li className={classes}>
        <a
          className="vs-sidenav-container-row"
          onClick={expandRow}
          title={this.props.label}
        >
          <div className="vs-sidenav-container-row-left">
            {icon}
            <span className="vs-sidenav-container-label">{this.props.label}</span>
          </div>
          <i className="fa fa-chevron-right vs-sidenav-container-chevron" />
        </a>
        <ul className="vs-link-group-children">{this.props.children}</ul>
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
