import React, { PropTypes } from 'react';
import MediaQuery from 'react-responsive';
import R from 'ramda';
import './SideNav.css';

export const SideNavIcon = ({ type, text }) => {
  return (R.isNil(text))
    ? <i className={`fa fa-${type} sidenav-icon`}></i>
    : <div className="fa-stack stacked-icon class">
        <i className={`fa fa-${type} sidenav-icon`}>
          <span className="fa fa-stack-1x single-text">{text}</span>
        </i>
      </div>;
};

export const SideNavSvgIcon = ({ children }) => {
  return (
    <div className="sidenav-svg-icon">{children}</div>
  );
};

const makeDefaultIcon = label => <SideNavIcon type="circle-thin custom" text={R.head(label)} />;

export const ToggleIcon = ({ sideNavState, onClick }) => {
  const sideNavIcon = (sideNavState) ? 'fa fa-chevron-right' : 'fa fa-chevron-left';
  return (
    <a className="sidenav-toggle-icon" onClick={onClick}>
      <i className={sideNavIcon}></i>
    </a>
  );
};

export const Header = ({ children }) =>
  <li className="sidenav-entry sidenav-header">{children}</li>;

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export class LinkGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavState: this.props.collpased,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.expanded) {
      this.setState({ sideNavState: nextProps.collpased });
    }
    if ((nextProps.collpased !== this.props.collpased) && (!this.props.collpased)) {
      this.props.onClick(false, this.props.label);
    }
  }

  render() {
    const classes = 'sidenav-entry sidenav-container' + (this.props.expanded ? ' expanded' : '');
    const expandRow = () => {
      this.props.onClick(!this.props.expanded, this.props.label);
      if (!this.props.expanded) {
        this.props.toggleSideNav(this.props.expanded);
      } else {
        this.props.toggleSideNav(this.state.sideNavState);
      }
    };

    const icon = !R.isNil(this.props.svgIcon)
      ? <SideNavSvgIcon>{this.props.svgIcon}</SideNavSvgIcon>
      : !R.isNil(this.props.icon)
        ? this.props.icon
        : makeDefaultIcon(this.props.label);

    const mappedChildren = React.Children.map(this.props.children, child => React.cloneElement(child, { inLinkGroup: true }));
    return (
      <li className={classes}>
        <a className="sidenav-container-row" onClick={expandRow} title={this.props.label}>
          <div className="sidenav-container-row-left">
            { icon }
            <span className="sidenav-container-label">{ this.props.label }</span>
          </div>
          <i className="fa fa-chevron-right sidenav-container-chevron"></i>
        </a>
        <ul className="link-group-children">
          { mappedChildren }
        </ul>
      </li>
    );
  }
}

LinkGroup.propTypes = {
  expanded: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export const Link = ({ hoverText, children, inLinkGroup }) => {
  const childrenWithProps = React.Children.map(children, child => {
    const children = child.props.children;
    const mappedChildren = (!inLinkGroup && React.Children.count(children) === 1)
      ? R.pair(makeDefaultIcon(children.props.children), children)
      : child.props.children;
    return React.cloneElement(child, { children: mappedChildren });
  });
  return (
    <li className="sidenav-entry sidenav-link" title={hoverText}>
      {childrenWithProps}
    </li>
  );
};

export const LinkContentWrapper = ({ icon, label }) => {
  return (
    <div className="sidenav-link-content-wrapper">
      <SideNavSvgIcon>
        {icon}
      </SideNavSvgIcon>
      <div className="sidenav-link-label sidenav-container-label">{label}</div>
    </div>
  );
};


export class SideNav extends React.Component {
  render() {
    return (
      <MediaQuery maxWidth={1224}>
        {
          matches =>
            <SideNavP
              matches={matches}
              {...this.props}
              >
              {this.props.children}
            </SideNavP>
        }
      </MediaQuery>
      );
  }

}

class SideNavP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavPreviousState: (this.props.initializedCollapsed || this.props.matches),
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
      const resizeVar = (!nextProps.matches && this.state.sideNavPreviousState) ? nextProps.collapsed : nextProps.matches;
      this.props.onClick(resizeVar);
    }
  }

  render() {
    const { logoBackground, appName, onClick, collapsed, children, userMenu } = this.props;

    const logoBg = logoBackground ? logoBackground : 'transparent';
    const toggle = () => onClick(!collapsed);
    const capAppName = appName ? appName.toUpperCase() : '';
    const mappedChildren =
      React.Children.map(children, child =>
        React.cloneElement(child, { collpased: collapsed, toggleSideNav: onClick })
      );
    return (
        <ul className={'sidenav' + (collapsed ? ' collapsed' : ' active')}>

          <li className="sideNav-left-logo" style={{ backgroundColor: logoBg }} >
            <div className="sidenav-container-row">
              <div className="logo">
                { this.props.logo }
              </div>
              <span className="app-name">{capAppName}</span>
            </div>
          </li>
          { mappedChildren }
          { userMenu }
          <li className="toggle-icon"><ToggleIcon onClick={toggle} sideNavState={collapsed}/></li>
        </ul>
    );
  }
}

SideNav.propTypes = {
  active: PropTypes.bool,
};

