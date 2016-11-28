import React, { Component } from 'react';
import { Link as RRLink } from 'react-router';
import './App.css';
import { SideNav, Header, LinkGroup, Link } from '../../lib/components/SideNav';


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
    return (
      <div className="app">
        <div className="app-header">
          <div className="app-header-left">
            <div className="app-logo">[VV]</div>
            <div className="app-name">visual stack</div>

          </div>
          <div className="app-header-right">
              <button onClick={this.onSideNavActiveClick}> Come back sidenav!  </button>
          </div>
        </div>
        <div className="app-container">

          <SideNav active={this.state.sidenavActive}>
            <Header label="First Things"/>
            <Link><RRLink to="/components/button">Top Level Link</RRLink></Link>
            <LinkGroup expanded={this.state["Dashboards"]} label="Dashboards" onClick={this.onLinkGroupClick}>
              <Link><RRLink to="/">Program Overview</RRLink></Link>
            </LinkGroup>
            <LinkGroup expanded={this.state["Sprints"]} label="Sprints" onClick={this.onLinkGroupClick}>
              <Link><RRLink to="/">Eagle Eye</RRLink></Link>
              <Link><RRLink to="/">Dogs (woof!)</RRLink></Link>
            </LinkGroup>
            <Header label="Other Things"/>
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
