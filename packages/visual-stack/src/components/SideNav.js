import React, { PropTypes } from 'react';
import MediaQuery from 'react-responsive';
import R from 'ramda';
import './SideNav.css';

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
    if(nextProps.expanded === false) {
      this.setState({ sideNavState: nextProps.collpased });
    }
    if((nextProps.collpased !== this.props.collpased) && (this.props.collpased === false)) {
      this.props.onClick(false, this.props.label);
    }
  }

  render() {
    const classes = 'sidenav-entry sidenav-container' + (this.props.expanded ? ' expanded' : '');
    const expandRow = e => {
      this.props.onClick(!this.props.expanded, this.props.label);
      if (this.props.expanded === false) {
        this.props.toggleSideNav(this.props.expanded);
      } else {
        this.props.toggleSideNav(this.state.sideNavState);
      }
    };
    const renderIcon = (R.isNil(this.props.icon)) ? <SideNavIcon type="circle-thin custom" text={R.head(this.props.label)} /> : this.props.icon;
    const mappedChildren = React.Children.map(this.props.children, child => React.cloneElement(child, { inLinkGroup: true }));
    return (
      <li className={classes}>
        <a className="sidenav-container-row" onClick={expandRow}>
          <div className="sidenav-container-row-left">
            { renderIcon }
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

export const Link = ({ children, inLinkGroup }) => {
  const childrenWithProps = React.Children.map(children, child => {
    const children = child.props.children;
    const mappedChildren = (!inLinkGroup && React.Children.count(children) === 1)
      ? R.pair(<SideNavIcon type="circle-thin custom" text={R.head(children.props.children)} />, children)
      : child.props.children;
    return React.cloneElement(child, { children: mappedChildren });
  });
  return (
    <li className="sidenav-entry sidenav-link">
      {childrenWithProps}
    </li>
  );
};

export const SideNavIcon = ({ type, text }) => {
  return (R.isNil(text))
    ? <i className={`fa fa-${type} sidenav-icon`}></i>
    : <div className="fa-stack stacked-icon class">
        <i className={`fa fa-${type} sidenav-icon`}>
          <span className="fa fa-stack-1x single-text">{text}</span>
        </i>
      </div>;
};


export class SideNav extends React.Component {
  render() {
    return (
      <MediaQuery maxWidth={640} minDeviceWidth={640}>
        {
          matches => {
            return (
              <SideNavP
                matches={matches}
                onClick={this.props.onClick}
                collapsed={this.props.collapsed}
                >
                {this.props.children}
              </SideNavP>
            );
          }
        }
      </MediaQuery>
      );
  }

}

class SideNavP extends React.Component {
  constructor(props) {
    super(props);
    this.props.onClick(this.props.matches);
  }

  componentWillReceiveProps(nextProps) {
    const resizeSet = R.not(R.equals(this.props.matches, nextProps.matches));
    if (resizeSet) {
      this.props.onClick(nextProps.matches);
    }
  }

  render() {
    const toggle = () => this.props.onClick(!this.props.collapsed);
    const mappedChildren =
      React.Children.map(this.props.children, child => React.cloneElement(child, { collpased: this.props.collapsed, toggleSideNav: this.props.onClick }));
    return (
        <ul className={'sidenav' + (this.props.collapsed ? ' collapsed' : ' active')}>
          { mappedChildren }
          <ul className="toggle-icon"><ToggleIcon onClick={toggle} sideNavState={this.props.collapsed}/></ul>
        </ul>
    );
  }
}

SideNav.propTypes = {
  active: PropTypes.bool,
};

