import React from 'react';
import { TopNav, UserMenu, UserDropdownItem, DropdownItem } from '@cjdev/visual-stack-redux/lib/components/TopNav';
import { LogoutIcon } from '@cjdev/visual-stack/lib/components/Icons/Nav';
import Layout from '@cjdev/visual-stack-redux/lib/layouts/ApplicationLayout/index';
import AppSideNav from './SideNav';
import './styles.css';

const AppUserMenu = () =>
  <UserMenu>
    <UserDropdownItem name="Visual Stack" firstInitial="V" lastInitial="S" email="visualstack@cj.com" />
    <DropdownItem icon={LogoutIcon} title="Dropdown Item" />
  </UserMenu>;

const AppTopNav = () => <TopNav appName="VISUAL stack" userMenu={<AppUserMenu />} />;

export default ({ children }) =>
  <Layout
    topNav={<AppTopNav />}
    sideNav={<AppSideNav />} >
    { children }
  </Layout>;

