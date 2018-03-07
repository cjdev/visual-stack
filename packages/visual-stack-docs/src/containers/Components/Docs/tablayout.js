import React from 'react';
import { TabLayout, Tab } from '@cjdev/visual-stack/lib/components/TabLayout';
import { Demo, Snippet } from '../../../components/Demo';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';

export default () => (
  <Demo srcFile="/samples/src/containers/Components/Docs/tablayout.js">
    {
      snippets => {
        return (
          <Panel>
            <Header>Simple Tab</Header>
            <Body>
              {/* s1:start */}
              <TabLayout>
                <Tab label={<div>Tab1</div>} content={<div>TibityTab1</div>} />
                <Tab label={<div>Tab1</div>} content={<div>TibityTab1</div>} />
              </TabLayout>
              {/* s1:end */}
              <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>
        );
      }
    }
  </Demo>
);
