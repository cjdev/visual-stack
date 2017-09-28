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

class AppSideNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleLogout.bind(this);
  }

  handleLogout() {
    // eslint-disable-next-line
    alert('handleLogout called');
  }

  render() {
    return (
      <SideNav
        userMenu={<AppUserMenu onLogout={this.handleLogout} />}
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
              <Link key={val.key}>
                <RRLink to={`/components/${val.key}`}>
                  <LinkContentWrapper label={val.linkName} />
                </RRLink>
              </Link>
            ))
          )(routeComponentMap)}
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
    );
  }
}
export default AppSideNav;
