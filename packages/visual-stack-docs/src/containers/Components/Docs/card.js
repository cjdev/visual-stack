import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';

import Card from '@cjdev/visual-stack/lib/components/Card';

export default () =>
  <Demo srcFile="/samples/src/containers/Components/Docs/card.js">
    { snippets => {
      return (
        <div>
          <Panel>
            <Header>
              Spinner
            </Header>
            <Body>
              { /* s1:start */ }
              <Card href="https://cj.com">Go to cj.com</Card>
              { /* s1:end */ }
              <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>;
