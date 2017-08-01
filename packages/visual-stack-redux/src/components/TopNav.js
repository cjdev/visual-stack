import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import R from 'ramda';
import { connect } from 'react-redux';
import {
  TopNav as BaseTopNav,
  UserMenu as BaseUserMenu,
  DropdownItem as BaseDropdownItem,
  UserDropdownItem as BaseUserDropdownItem,
} from '@cjdev/visual-stack/lib/components/TopNav';
import { toggleSecondNav, openTopNavDropdown, closeTopNavDropdown } from '../actions';

export class InternalTopNav extends Component {
  render() {
    return (
        <BaseTopNav
          appName={this.props.appName}
          logo={this.props.logo}
          onSecondNavToggle={this.props.toggleSecondNav}
          secondaryNav={this.props.secondaryNav}
          userMenu={this.props.userMenu}>
        </BaseTopNav>
    );
  }
}

export const TopNav = connect(
  state => ({ secondNavActive: state.visualStack.topNav.secondNavActive }),
  { toggleSecondNav }
)(InternalTopNav);

export class InternalUserMenu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = e => {
      const node = ReactDOM.findDOMNode(this.menu);
      const { closeTopNavDropdown, openTopNavDropdown } = this.props;
      if (node.contains(e.target) && !this.isOpen()) {
        openTopNavDropdown('userMenu');
      } else {
        closeTopNavDropdown('userMenu');
      }
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  isOpen() {
    return R.view(R.lensPath(['open']), this.props.userMenuState) || false;
  }

  render() {
    return (
        <div ref={menu => { this.menu = menu; }} >
          <BaseUserMenu
            title={this.props.title}
            open={this.isOpen()}
            >
              { this.props.children}
          </BaseUserMenu>
      </div>
    );
  }
}

export const UserMenu = connect(
  state => ({ userMenuState: state.visualStack.topNav.userMenu }),
  { openTopNavDropdown, closeTopNavDropdown }
)(InternalUserMenu);

export const DropdownItem = BaseDropdownItem;
export const UserDropdownItem = BaseUserDropdownItem;

