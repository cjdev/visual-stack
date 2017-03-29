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
import { toggleSideNavLinkGroup } from '../actions';

export class InternalSideNav extends Component {
  static propTypes = {
    active: PropTypes.bool,
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BaseSideNav active={this.props.active} >
        { this.props.children }
      </BaseSideNav>
    );
  }
}
export const SideNav = connect(
  state => ({ active: state.visualStack.sideNav.active }),
)(InternalSideNav);

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
        icon={this.props.icon}
        label={this.props.label}
        expanded={expanded}
        onClick={() => this.props.toggleSideNavLinkGroup(this.props.label) }
      >
        { this.props.children }
      </BaseLinkGroup>
    );
  }
}

export const LinkGroup = connect(
  state => ({ linkGroups: state.visualStack.sideNav.linkGroups }),
  { toggleSideNavLinkGroup }
)(InternalLinkGroup);


export const Header = BaseHeader;
export const Link = BaseLink;
export const SideNavIcon = BaseIcon;

