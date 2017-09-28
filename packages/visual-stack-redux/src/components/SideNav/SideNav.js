/** @prettier */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { SideNav as BaseSideNav } from '@cjdev/visual-stack/lib/components/SideNav';
import { toggleSideNav } from '../../actions';

export class InternalSideNav extends Component {
  static propTypes = {
    collapsed: PropTypes.bool,
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BaseSideNav
        collapsed={this.props.collapsed}
        onClick={this.props.toggleSideNav}
        logo={this.props.logo}
        {...this.props}
      >
        {this.props.children}
      </BaseSideNav>
    );
  }
}

export const SideNav = connect(
  state => ({
    collapsed: state.visualStack.sideNav.collapsed,
  }),
  {
    toggleSideNav,
  }
)(InternalSideNav);
