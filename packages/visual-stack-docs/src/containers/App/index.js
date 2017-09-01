import React from 'react';
import { TopNav } from '@cjdev/visual-stack-redux/lib/components/TopNav';
import Layout from '@cjdev/visual-stack-redux/lib/layouts/ApplicationLayout/index';
import AppSideNav from './SideNav';
import './styles.css';

const AppTopNav = () => <TopNav appName="VISUAL stack" />;

export default ({ children }) =>
  <Layout
    topNav={<AppTopNav />}
    sideNav={<AppSideNav />} >
    { children }
  </Layout>;

