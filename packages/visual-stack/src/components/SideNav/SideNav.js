/** @prettier */
import React, { PropTypes } from 'react';
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
    } = this.props;

    const logoBg = logoBackground ? logoBackground : 'transparent';
    const toggle = () => onClick(!collapsed);
    const capAppName = appName ? appName.toUpperCase() : '';
    const mappedChildren = React.Children.map(children, child =>
      React.cloneElement(child, {
        collapsed: collapsed,
        toggleSideNav: onClick,
      })
    );
    return (
      <ul className={'sidenav' + (collapsed ? ' collapsed' : ' active')}>
        <li className="sideNav-left-logo" style={{ backgroundColor: logoBg }}>
          <div className="sidenav-container-row">
            <div className="logo">{this.props.logo}</div>
            <span className="app-name">{capAppName}</span>
          </div>
        </li>
        {mappedChildren}
        {userMenu}
        <li className="toggle-icon">
          <ToggleIcon onClick={toggle} sideNavState={collapsed} />
        </li>
      </ul>
    );
  }
}

SideNav.propTypes = {
  active: PropTypes.bool,
};
