import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';
import { TopNav } from '@cjdev/visual-stack/lib/components/TopNav';

const AppTopNav = () => { //eslint-disable-line
  return (
    <div>
      { /* s1:start */ }
      <TopNav appName="VISUAL STACK" />
      { /* s1:end */ }
    </div>
  );
};

export default () =>
  <Demo srcFile="/samples/src/containers/Components/Docs/topnav.js">
    {
      snippets => {
        return (
          <Panel>
            <Header>
              TopNav
            </Header>
            <Body>
              <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>
        );
      }
    }
  </Demo>;

