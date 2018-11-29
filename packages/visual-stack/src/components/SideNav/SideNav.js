/** @prettier */
import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import R from 'ramda';

import { ToggleIcon } from './Icons';

export class SideNav extends React.Component {
  render() {
    return (
      <MediaQuery maxWidth={1224}>
        {matches => (
          <SideNavP matches={matches} {...this.props}>
            {this.props.children}
          </SideNavP>
        )}
      </MediaQuery>
    );
  }
}

class SideNavP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavPreviousState:
        this.props.initializedCollapsed || this.props.matches,
    };
  }

  componentWillMount() {
    this.props.onClick(this.props.initializedCollapsed || this.props.matches);
  }

  componentWillReceiveProps(nextProps) {
    const resizePage = R.not(R.equals(this.props.matches, nextProps.matches));
    if (resizePage) {
      this.setState({
        sideNavPreviousState: nextProps.collapsed,
      });
      const resizeVar =
        !nextProps.matches && this.state.sideNavPreviousState
          ? nextProps.collapsed
          : nextProps.matches;
      this.props.onClick(resizeVar);
    }
  }

  render() {
    const {
      logoBackground,
      appName,
      onClick,
      collapsed,
      children,
      userMenu,
      homeLink
    } = this.props;

    const logoBg = logoBackground ? logoBackground : 'transparent';
    const toggle = () => onClick(!collapsed);
    const capAppName = appName ? appName.toUpperCase() : '';
    const userMenuWithColor = (userMenu) ?  React.cloneElement(userMenu, { color: "#49c5b1" }) : null;
    return (
      <ul className={'vs-sidenav' + (collapsed ? ' collapsed' : ' active')}>
        <li className="vs-sideNav-left-logo">
          <a href={`${(homeLink) ? homeLink : '\/'}`} className="vs-sidenav-container-row">
            <div className="vs-logo">{this.props.logo}</div>
            <span className="vs-app-name">{capAppName}</span>
          </a>
        </li>
        {children}
        {userMenuWithColor}
        <li className="vs-toggle-icon">
          <ToggleIcon onClick={toggle} sideNavState={collapsed} />
        </li>
      </ul>
    );
  }
}

SideNav.propTypes = {
  active: PropTypes.bool,
};
