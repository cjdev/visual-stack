import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';
import { Button } from '@cjdev/visual-stack/lib/components/Button';

export default () =>
    <Demo srcFile="/samples/src/containers/Components/Docs/button.js">
    { snippets => {
      return (
        <div>
          <Panel>
            <Header>
              Default Buttons
            </Header>
            <Body>
              { /* s2:start */ }
              <Button type="solid-primary">Solid Primary</Button>
              <Button type="primary">Primary</Button>
              <Button type="success">Success</Button>
              <Button type="info">Info</Button>
              <Button type="default">Default</Button>
              <Button type="warning">Warning</Button>
              <Button type="danger">Danger</Button>
              { /* s2:end */ }
              <Snippet tag="s2" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Header>
              Large Buttons
            </Header>
            <Body>
              { /* s1:start */ }
              <Button type="primary" large={true}>Primary</Button>
              { /* s1:end */ }
              <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>;

