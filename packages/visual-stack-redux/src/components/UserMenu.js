import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import R from 'ramda';
import { connect } from 'react-redux';
import {
  UserMenu as BaseUserMenu,
  UserDropdownItem as BaseUserDropdownItem,
} from '@cjdev/visual-stack/lib/components/UserMenu';
import { openTopNavDropdown, closeTopNavDropdown } from '../actions';

export { UserIcon } from '@cjdev/visual-stack/lib/components/UserMenu';

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
          <BaseUserMenu title={this.props.title} open={this.isOpen()} >
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

export const UserDropdownItem = BaseUserDropdownItem;

