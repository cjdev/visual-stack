/** @prettier */
import React from 'react';
import R from 'ramda';
import { Link } from 'react-router';
import CJLogo from '@cjdev/visual-stack/lib/components/CJLogo';
import {
  SideNav,
  Link as SideNavLink,
  LinkGroup,
  LinkContentWrapper,
} from '@cjdev/visual-stack-redux/lib/components/SideNav';
import { UserIcon } from '@cjdev/visual-stack-redux/lib/components/UserMenu';
import { routeComponentMap } from '../Components/Docs/';

// import { DropdownItem } from '@cjdev/visual-stack-redux/lib/components/TopNav';
// import { UserMenu, UserDropdownItem } from '@cjdev/visual-stack-redux/lib/components/UserMenu';
import LayoutIcon from 'mdi-react/TelevisionGuideIcon';
import ComponentIcon from 'mdi-react/HexagonMultipleIcon';
import IconsIcon from 'mdi-react/ShapePlusIcon';

const AppUserMenu = () => (
  <LinkGroup
    className="sidenav-user-menu"
    label="Visual Stack"
    icon={<UserIcon firstInitial="V" lastInitial="S" />}
  >
    <SideNavLink>
      <a>Logout</a>
    </SideNavLink>
  </LinkGroup>
);

export default () => (
  <SideNav
    userMenu={<AppUserMenu />}
    initializedCollapsed={false}
    logoBackground="#00AF66"
    logo={<CJLogo />}
    appName="VISUAL STACK"
  >
    <LinkGroup label="Components" svgIcon={<ComponentIcon />}>
      {R.pipe(
        R.mapObjIndexed((val, key) => ({ key, ...val })),
        R.values,
        R.sortBy(R.prop('linkName')),
        R.map(val => (
          <SideNavLink key={val.key}>
            <Link to={`/components/${val.key}`}>{val.linkName}</Link>
          </SideNavLink>
        ))
      )(routeComponentMap)}
    </LinkGroup>
    <SideNavLink hoverText="Icons">
      <Link to="/icons">
        <LinkContentWrapper icon={<IconsIcon />} label="Icons" />
        <span />
      </Link>
    </SideNavLink>
    <SideNavLink hoverText="Layouts">
      <Link to="/layouts">
        <LinkContentWrapper icon={<LayoutIcon />} label="Layouts" />
        <span />
      </Link>
    </SideNavLink>
  </SideNav>
);
