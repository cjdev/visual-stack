import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';
import { SideNav } from '../../lib/components/SideNav';


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="app-header-left">
            <div className="app-logo">[vs]</div>
            <div className="app-name">visual stack</div>
          </div>
          <div className="app-header-right"></div>
        </div>
        <div className="app-container">

          <SideNav>
            <Link to="/">home</Link>
            <Link to="/components/button">button</Link>
            <Link to="/about">about</Link>
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
