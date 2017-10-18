/** @prettier */
import React from 'react';

import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';

export default () => (
  <Demo srcFile="/samples/src/containers/App/SideNav.js">
    {snippets => {
      return (
        <Panel>
          <Header>SideNav</Header>
          <Body>
            <Snippet tag="s3" src={snippets} />
            <Snippet tag="s1" src={snippets} />
            <Snippet tag="s2" src={snippets} />
          </Body>
        </Panel>
      );
    }}
  </Demo>
);
