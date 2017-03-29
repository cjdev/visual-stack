import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import { TopNav } from '@cjdev/visual-stack/lib/components/TopNav';
import Layout from '@cjdev/visual-stack/lib/layouts/ApplicationLayout';
import AppSideNav from './SideNav';
import './styles.css';
import logoSvg from '../../new-cj-logo-icon.svg';

const logo = <ReactSVG
  path={logoSvg}
  className="cj-logo"
/>;

const AppTopNav = () =>
  <TopNav
    appName="VISUAL stack"
    logo={logo}
  />;

export default class App extends Component {
  render() {
    return (
      <Layout
        topNav={<AppTopNav />}
        sideNav={<AppSideNav/>} >
        { this.props.children }
      </Layout>
    );
  }
}

