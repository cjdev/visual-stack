import React from 'react';
import { TopNav } from '@cjdev/visual-stack/lib/components/TopNav';
import CJLogo from '@cjdev/visual-stack/lib/components/CJLogo';
import Layout from '@cjdev/visual-stack/lib/layouts/ApplicationLayout';
import AppSideNav from './SideNav';
import './styles.css';

const AppTopNav = () =>
  <TopNav appName="VISUAL stack" logo={<CJLogo />} />;

export default ({ children }) =>
  <Layout
    topNav={<AppTopNav />}
    sideNav={<AppSideNav />} >
    { children }
  </Layout>;

