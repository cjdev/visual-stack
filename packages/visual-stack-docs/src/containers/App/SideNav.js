import React from 'react';
import R from 'ramda';
import { Link } from 'react-router';
import { SideNav, SideNavIcon, Link as SideNavLink, LinkGroup } from '@cjdev/visual-stack-redux/lib/components/SideNav';
import { routeComponentMap } from '../Components/Docs/';

const componentIcon = <SideNavIcon type="square" />;
const iconIcon = <SideNavIcon type="font-awesome" />;
const layoutIcon = <SideNavIcon type="th-list" />;

export default () =>
  <SideNav>
    <LinkGroup label="Components" icon={componentIcon}>
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
    <SideNavLink>
      <Link to="/icons">
        {iconIcon}
        <span>Icons</span>
      </Link>
    </SideNavLink>
    <SideNavLink>
      <Link to="/layouts">
        {layoutIcon}
        <span>Layouts</span>
      </Link>
    </SideNavLink>
  </SideNav>;
