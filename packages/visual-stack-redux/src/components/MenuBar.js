import { omit } from 'ramda';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { MenuBar as Base } from '@cjdev/visual-stack';

import { openDropdown, closeDropdown } from '../actions.js';

export class MenuBar extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };
  static childContextTypes = {
    menuBarName: PropTypes.string,
  };

  getChildContext() {
    return {
      menuBarName: this.props.name,
    };
  }

  render() {
    const { children, name: _name, ...otherProps } = this.props;
    return <Base.MenuBar {...otherProps}>{children}</Base.MenuBar>;
  }
}

export class InternalMenuBarDropdown extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };
  static contextTypes = {
    menuBarName: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.handleClick = e => {
      const node = ReactDOM.findDOMNode(this);
      const { menuBarName } = this.context;
      const { name, closeDropdown, openDropdown } = this.props;

      if (node.contains(e.target) && !this.isOpen()) {
        openDropdown(menuBarName, name);
      } else {
        // close dropdown if clicking outside
        closeDropdown(menuBarName, name);
      }
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  render() {
    const { children } = this.props;
    const otherProps = omit(['children', 'menuBars', 'name', 'closeDropdown', 'openDropdown'], this.props);
    return (
      <Base.MenuBarDropdown open={this.isOpen()} {...otherProps}>
        {children}
      </Base.MenuBarDropdown>
    );
  }

  isOpen() {
    const { menuBars, name: dropdownName } = this.props;
    const { menuBarName } = this.context;
    const menuBarState = menuBars[menuBarName] || {};
    const dropdownState = menuBarState[dropdownName] || {};
    return !!dropdownState.open;
  }
}

export const MenuBarDropdown = connect(
  state => ({ menuBars: state.visualStack.menuBar }),
  { openDropdown, closeDropdown }
)(InternalMenuBarDropdown);

export const MenuBarItem = Base.MenuBarItem;
export const MenuBarDropdownItem = Base.MenuBarDropdownItem;
