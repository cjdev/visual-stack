import React from 'react';
import Layout from '@cjdev/visual-stack-redux/lib/layouts/ApplicationLayout/index';
import AppSideNav from './SideNav';
import './styles.css';

export default ({ children }) =>
  <Layout
    sideNav={<AppSideNav />} >
    { children }
  </Layout>;


