import React, { Component } from 'react';
import { Link as RRLink } from 'react-router';
import './App.css';
import { SideNav, Header, Container, Link } from '../../lib/components/SideNav';


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="app-header-left">
            <div className="app-logo">[VV]</div>
            <div className="app-name">visual stack</div>
          </div>
          <div className="app-header-right"></div>
        </div>
        <div className="app-container">

          <SideNav>
            <Header label="First Things"/>
            <Link><RRLink to="/components/button">Top Level Link</RRLink></Link>
            <Container label="Dashboards">
              <Link><RRLink to="/">Program Overview</RRLink></Link>
            </Container>
            <Container label="Sprints">
              <Link><RRLink to="/">Eagle Eye</RRLink></Link>
              <Link><RRLink to="/">Dogs (woof!)</RRLink></Link>
            </Container>
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
