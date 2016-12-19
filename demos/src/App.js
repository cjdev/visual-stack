import React, { Component } from 'react';
import { Link as RRLink } from 'react-router';
import './App.css';
import { SideNav, Header, LinkGroup, Link } from '../../lib/components/SideNav';
import { TopNav, UserMenu, DropdownItem, UserDropdownItem } from '../../lib/components/TopNav'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "Dashboards": false,
      "Sprints": false,
      sidenavActive: false,
      secondNavActive: false,
      userMenuOpen: false
    };

    // This binding is necessary to make `this` work in the callback
    this.onLinkGroupClick = this.onLinkGroupClick.bind(this);
    this.onSideNavActiveClick = this.onSideNavActiveClick.bind(this);
    this.onSecondNavActiveClick = this.onSecondNavActiveClick.bind(this);
    this.onUserMenuClick = this.onUserMenuClick.bind(this);
  }

  onLinkGroupClick(e, label) {
    e.preventDefault();
    this.setState({
      [label]: !this.state[label]
    });
  }

  onSideNavActiveClick(e) {
    e.preventDefault();
    this.setState({
      sidenavActive: !this.state.sidenavActive,
      secondNavActive: false
    });
  }

  onSecondNavActiveClick(e) {
    e.preventDefault();
    this.setState({
      sidenavActive: false,
      secondNavActive: !this.state.secondNavActive
    });
  }

  onUserMenuClick(e) {
    e.preventDefault();
    this.setState({
      userMenuOpen: !this.state.userMenuOpen
    });
  }

  render() {
    const logoComponent = <span>[VV]</span>;
    const settingsIcon = <i className="fa fa-cog" aria-hidden="true"></i>
    const logoutIcon = <i className="fa fa-sign-in" aria-hidden="true"></i>
    const userMenu = (
      <UserMenu onClick={this.onUserMenuClick} open={this.state.userMenuOpen} title="First Last" name="First Name" email="email@cj.com">
        <UserDropdownItem name="First Name" email="email@cj.com"></UserDropdownItem>
        <DropdownItem logo={settingsIcon} title='Account Settings'></DropdownItem>
        <DropdownItem logo={logoutIcon} title='Logout'></DropdownItem>
      </UserMenu>
    );

    return (
      <div className="app">
        <TopNav
          logo={logoComponent}
          appName="visual stack"
          onSideNavToggle={this.onSideNavActiveClick}

          secondNavActive={this.state.secondNavActive}
          onSecondNavToggle={this.onSecondNavActiveClick}

          userMenu={userMenu}
        >
        </TopNav>






        <div className="app-container">
          <SideNav active={this.state.sidenavActive}>
            <Header>First Things</Header>
            <Link><RRLink to="/components/button">Top Level Link</RRLink></Link>
            <LinkGroup expanded={this.state["Dashboards"]} label="Dashboards" onClick={this.onLinkGroupClick}>
              <Link><RRLink to="/">Program Overview</RRLink></Link>
            </LinkGroup>
            <LinkGroup expanded={this.state["Sprints"]} label="Sprints" onClick={this.onLinkGroupClick}>
              <Link><RRLink to="/">Eagle Eye</RRLink></Link>
              <Link><RRLink to="/">Dogs (woof!)</RRLink></Link>
            </LinkGroup>
            <Header>Other Things</Header>
            <Link><RRLink to="/about">About</RRLink></Link>
            <Link><a href="http://www.google.com" target="_blank">Google</a></Link>
          </SideNav>



          <div className="app-content-container">
            <div className="app-content">
              { this.props.children }
            </div>

            <div className="app-footer">
              @cjdev
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
