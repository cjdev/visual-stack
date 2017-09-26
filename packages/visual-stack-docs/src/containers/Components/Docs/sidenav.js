import React from 'react';
import { Link } from 'react-router';

import ComponentIcon from 'mdi-react/HexagonMultipleIcon';
import CJLogo from '@cjdev/visual-stack/lib/components/CJLogo';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';
import { SideNav, Link as SideNavLink, LinkGroup, LinkContentWrapper } from '@cjdev/visual-stack-redux/lib/components/SideNav';
import IconsIcon from 'mdi-react/ShapePlusIcon';

const AppTopNav = () => { //eslint-disable-line
  return (
    <div>
      { /* s1:start */ }
      <SideNav
        initializedCollapsed={false}
        logoBackground="#00AF66"
        logo={<CJLogo />}
        appName="visual stacked">
        <SideNavLink hoverText="Icons">
          <LinkGroup label="Components" svgIcon={<ComponentIcon />}>
              <Link to={ `/components/somewhere` }>somewhere</Link>
          </LinkGroup>
          <Link to="/icons">
            <LinkContentWrapper icon={<IconsIcon/>} label="Icons"/>
            <span/>
          </Link>
        </SideNavLink>
      </SideNav>
      { /* s1:end */ }
    </div>
  );
};

export default () =>
  <Demo srcFile="/samples/src/containers/Components/Docs/sidenav.js">
    {
      snippets => {
        return (
          <Panel>
            <Header>
              SideNav
            </Header>
            <Body>
              <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>
        );
      }
    }
  </Demo>;

