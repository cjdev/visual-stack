import React, { Component } from 'react';
import { TopNav } from '@cjdev/visual-stack/lib/components/TopNav';
import Layout from '@cjdev/visual-stack/lib/layouts/ApplicationLayout';
import AppSideNav from './SideNav';
import './styles.css';

const AppTopNav = () =>
  <TopNav appName="VISUAL stack" />;

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

