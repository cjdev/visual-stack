import React, { Component, PropTypes } from 'react';
import R from 'ramda';
import { connect } from 'react-redux';
import {
  SideNav as BaseSideNav,
  Header as BaseHeader,
  SideNavIcon as BaseIcon,
  Link as BaseLink,
  LinkGroup as BaseLinkGroup,
} from '@cjdev/visual-stack/lib/components/SideNav';
import { toggleSideNavLinkGroup, toggleSideNav } from '../actions';

export class InternalSideNav extends Component {
  static propTypes = {
    collapsed: PropTypes.bool,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const mappedChildren =
      React.Children.map(this.props.children,
                         child => React.cloneElement(child, { toggleSideNav: this.props.toggleSideNav, collapsed: this.props.collapsed }));
    return (
      <BaseSideNav
        collapsed={this.props.collapsed}
        onClick={this.props.toggleSideNav}
        logo={this.props.logo}
        >
        { mappedChildren }
      </BaseSideNav>
    );
  }
}

export const SideNav = connect(state => ({ collapsed: state.visualStack.sideNav.collapsed }), { toggleSideNav })(InternalSideNav);

export class InternalLinkGroup extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const expanded = R.view(R.lensPath([this.props.label, 'expanded']), this.props.linkGroups) || false;
    return (
      <BaseLinkGroup
        expanded={expanded}
        onClick={ this.props.toggleSideNavLinkGroup }
        { ...this.props}
      >
        { this.props.children }
      </BaseLinkGroup>
    );
  }
}

const mapState = state => ({ linkGroups: state.visualStack.sideNav.linkGroups });

export const LinkGroup = connect(mapState, { toggleSideNavLinkGroup })(InternalLinkGroup);


export const Header = BaseHeader;
export const Link = BaseLink;
export const SideNavIcon = BaseIcon;

