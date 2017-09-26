import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';

import BlankSlate from '@cjdev/visual-stack/lib/components/BlankSlate';

export default () =>
    <Demo srcFile="/samples/src/containers/Components/Docs/blankslate.js">
    { snippets => {
      return (
        <div>
          <Panel>
            <Header>
              Blank Slate
            </Header>
            <Body>
              { /* s1:start */ }
              <BlankSlate />
              { /* s1:end */ }
              <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>;
