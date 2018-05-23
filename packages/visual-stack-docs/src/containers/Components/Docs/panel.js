import React from 'react';
import { Panel, Body, Header, Footer } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';
import './panel.css'; // for custom styles

export default () =>
  <Demo srcFile="/samples/src/containers/Components/Docs/panel.js">
    { snippets => {
      return (
        <div>
          { /* s1:start */ }
          <Panel>
            <Header>
              Panel Header
            </Header>
            <Body>
              <p>This is the Panel Body.</p>
              <Snippet tag="s1" src={snippets} />
            </Body>
            <Footer>
              Panel Footer
            </Footer>
          </Panel>
          { /* s1:end */ }
        </div>
      );
    }}
  </Demo>;
