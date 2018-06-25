/* eslint-disable no-alert */
/** @prettier */
import React from 'react';
import R from 'ramda';

import { Link as RRLink } from 'react-router';
import DesignSystemIcon from 'mdi-react/PaletteAdvancedIcon';
import LayoutIcon from 'mdi-react/TelevisionGuideIcon';
import ComponentIcon from 'mdi-react/HexagonMultipleIcon';
import IconsIcon from 'mdi-react/ShapePlusIcon';

/* s3:start */
import {
  Link,
  LinkContentWrapper,
  LinkGroup,
  SideNav,
  UserMenu,
  SettingsIcon,
  UserMenuLink,
} from '@cjdev/visual-stack-redux/lib/components/SideNav';
import CJLogo from '@cjdev/visual-stack/lib/components/CJLogo';
/* s3:end */
import { routeComponentMap } from '../Components/Docs/';


const componentLinks = R.pipe(
  R.mapObjIndexed((val, key) => ({ key, ...val })),
  R.values,
  R.sortBy(R.prop('linkName'))
)(routeComponentMap);

export default class AppSideNav extends React.Component {
  render() {
  /* s1:start */
    const userMenu =
      <UserMenu
        onLogout={() => { alert('handleLogout'); }}
        label="Victoria Smith"
        firstInitial="V"
        lastInitial="S">
            <UserMenuLink
                onClicked={() => {alert('handleSettings');}}
                linkIcon={<SettingsIcon />}
                linkLabel="Settings"
            />;
      </UserMenu>;
  /* s1:end */
    return (
    <div>
    {/* s2:start */}
      <SideNav
        userMenu={userMenu}
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
        <Link hoverText="Design System">
          <RRLink to="/design-system">
            <LinkContentWrapper icon={<DesignSystemIcon />} label="Design System" />
          </RRLink>
        </Link>
      </SideNav>
    {/* s2:end */}
    </div>
    );
  }
}
