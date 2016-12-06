import React, { Component } from 'react';
import { Link as RRLink } from 'react-router';
import './App.css';
import { SideNav, Header, LinkGroup, Link } from '../../lib/components/SideNav';
import { TopNav, IconGroup, UserMenu } from '../../lib/components/TopNav'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "Dashboards": false,
      "Sprints": false,
      sidenavActive: false
    };

    // This binding is necessary to make `this` work in the callback
    this.onLinkGroupClick = this.onLinkGroupClick.bind(this);
    this.onSideNavActiveClick = this.onSideNavActiveClick.bind(this);
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
      sidenavActive: !this.state.sidenavActive
    });
  }

  render() {
    const logoComponent = <span>[VV]</span>;
    const userMenu = <UserMenu> </UserMenu>;
    const iconGroup =
      <IconGroup>

        <a onClick={this.onSideNavActiveClick}><i className="fa fa-bars"></i></a>
      </IconGroup>;

    return (
      <div className="app">
        <TopNav
          logo={logoComponent}
          userMenu={userMenu}
          iconGroup={iconGroup}
          appName="visual stack">



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
