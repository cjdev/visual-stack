import React from 'react';
import Layout from '@cjdev/visual-stack-redux/lib/layouts/ApplicationLayout/index';
import AppSideNav from './SideNav';
import AppSlidingPanel from './SlidingPanel';
import './styles.css';

export default ({ children }) =>
  <Layout
    slidingPanel={<AppSlidingPanel/>}
    sideNav={<AppSideNav />} >
    { children }
  </Layout>;


