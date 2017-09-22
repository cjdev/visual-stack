import React from 'react';
import R from 'ramda';
import { Link } from 'react-router';
import CJLogo from '@cjdev/visual-stack/lib/components/CJLogo';
import { SideNav, Link as SideNavLink, LinkGroup, LinkContentWrapper } from '@cjdev/visual-stack-redux/lib/components/SideNav';
import { routeComponentMap } from '../Components/Docs/';

import LayoutIcon from 'mdi-react/TelevisionGuideIcon';
import ComponentIcon from 'mdi-react/HexagonMultipleIcon';
import IconsIcon from 'mdi-react/ShapePlusIcon';

export default () =>
<SideNav
  initializedCollapsed={false}
  logoBackground="#00AF66"
  logo={<CJLogo />}
  appName="VISUAL STACK"
>
    <LinkGroup label="Components" svgIcon={<ComponentIcon />}>
      {
        R.pipe(
          R.mapObjIndexed((val, key) => ({ key, ...val })),
          R.values,
          R.sortBy(R.prop('linkName')),
          R.map(val =>
            <SideNavLink key={val.key}>
              <Link to={`/components/${val.key}`}>
                { val.linkName }
              </Link>
            </SideNavLink>)
        )(routeComponentMap)
      }
    </LinkGroup>
    <SideNavLink hoverText="Icons">
      <Link to="/icons">
        <LinkContentWrapper icon={<IconsIcon/>} label="Icons"/>
        <span/>
      </Link>
    </SideNavLink>
    <SideNavLink hoverText="Layouts">
      <Link to="/layouts">
        <LinkContentWrapper icon={<LayoutIcon/>} label="Layouts"/>
        <span/>
      </Link>
    </SideNavLink>
  </SideNav>;
