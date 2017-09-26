import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';

import Spinner from '@cjdev/visual-stack/lib/components/Spinner';

export default () =>
  <Demo srcFile="/samples/src/containers/Components/Docs/spinner.js">
    { snippets => {
      return (
        <div>
          <Panel>
            <Header>
              Spinner
            </Header>
            <Body>
              { /* s1:start */ }
              <Spinner />
              <Spinner size="large"/>
              <Spinner size="extra-large"/>
              <Spinner size="button"/>
              { /* s1:end */ }
              <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>;
