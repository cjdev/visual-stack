import React from 'react';
import { Panel, Body, Header, Footer } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';

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
            <Body paddingSize="wide">
            This is the Panel Body with 32px padding.
            <Snippet tag="s1" src={snippets}/>
            </Body>
            <Body>
            This is the Panel Body.
            <Snippet tag="s1" src={snippets}/>
            </Body>
            <Body paddingSize="none">
            This is the Panel Body.
            <Snippet tag="s1" src={snippets}/>
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
