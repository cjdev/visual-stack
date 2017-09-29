/* eslint-disable no-alert */
/** @prettier */
import React from 'react';
import R from 'ramda';
import { Link as RRLink } from 'react-router';
import LayoutIcon from 'mdi-react/TelevisionGuideIcon';
import ComponentIcon from 'mdi-react/HexagonMultipleIcon';
import IconsIcon from 'mdi-react/ShapePlusIcon';

import {
  SideNav,
  Link,
  LinkGroup,
  LinkContentWrapper,
} from '@cjdev/visual-stack-redux/lib/components/SideNav';
import CJLogo from '@cjdev/visual-stack/lib/components/CJLogo';
import { UserIcon } from '@cjdev/visual-stack/lib/components/UserMenu';
import { routeComponentMap } from '../Components/Docs/';

const componentLinks = R.pipe(
  R.mapObjIndexed((val, key) => ({ key, ...val })),
  R.values,
  R.sortBy(R.prop('linkName'))
)(routeComponentMap);

const AppUserMenu = ({ onLogout }) => (
  <LinkGroup
    className="sidenav-user-menu"
    label="Sally Jones"
    icon={<UserIcon firstInitial="S" lastInitial="J" />}
  >
    <Link>
      <a onClick={onLogout}>
        <LinkContentWrapper icon={<IconsIcon />} label="Logout" />
      </a>
    </Link>
  </LinkGroup>
);

export default class AppSideNav extends React.Component {
  /* s1:start */
  handleLogout() {
    alert('handleLogout');
  }
  /* s1:end */

  render() {
    return (
    <div>
    {/* s2:start */}
      <SideNav
        userMenu={<AppUserMenu onLogout={this.handleLogout} />}
        initializedCollapsed={false}
        logoBackground="#00AF66"
        logo={<CJLogo />}
        appName="VISUAL STACK"
      >
        <LinkGroup label="Components" svgIcon={<ComponentIcon />}>
          {componentLinks.map(link => (
            <Link key={link.key}>
              <RRLink to={`/components/${link.key}`}>
                <LinkContentWrapper label={link.linkName} />
              </RRLink>
            </Link>
          ))}
        </LinkGroup>
        <Link hoverText="Icons">
          <RRLink to="/icons">
            <LinkContentWrapper icon={<IconsIcon />} label="Icons" />
          </RRLink>
        </Link>
        <Link hoverText="Layouts">
          <RRLink to="/layouts">
            <LinkContentWrapper icon={<LayoutIcon />} label="Layouts" />
          </RRLink>
        </Link>
      </SideNav>
    {/* s2:end */}
    </div>
    );
  }
}
