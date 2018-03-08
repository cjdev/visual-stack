import React from 'react';
import { TabLayout, Tab } from '@cjdev/visual-stack/lib/components/TabLayout';
import { Demo, Snippet } from '../../../components/Demo';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';

export default () => (
  <Demo srcFile="/samples/src/containers/Components/Docs/tablayout.js">
    {
      snippets => {
        /* s2:start */
        const TabLabelContent = ({ ...props }) => <div style={{ padding: '15px 32px 11px', textAlign: 'center' }}>{props.children}</div>;
        /* s2:end */

        /* s3:start */
        const TabContent = ({ ...props }) => <div style={{
          padding: '20px',
        }}>{props.children}</div>;
        /* s3:end */

        return (
          <div>
            <Panel>
              <Header>Base TabLayout</Header>
              <Body>
                <Snippet tag="s1" src={snippets} />
                {/* s1:start */}
                <TabLayout>
                  <Tab label={<div>Disabled</div>} content={<div>Tab Content 0</div>} disabled={true}/>
                  <Tab label={<div>Default</div>} content={<div>Tab Content 1</div>} />
                  <Tab label={<div>Inactive</div>} content={<div>Tab Content 2</div>} />
                </TabLayout>
                {/* s1:end */}
              </Body>
            </Panel>
            <Panel>
              <Header>Tab can accept any component for label / content</Header>
              <Body>
                <div>Simple Label / Content Examples</div>
                <Snippet tag="s2" src={snippets} />
                <Snippet tag="s3" src={snippets} />
                <Snippet tag="s4" src={snippets} />
                {/* s4:start */}
                <div style={{ border: '1px solid #e1e1e1' }}>
                  <TabLayout>
                    <Tab label={<TabLabelContent>Tab 1</TabLabelContent>} content={<TabContent>Tab Content 1</TabContent>} />
                    <Tab label={<TabLabelContent>Tab 2</TabLabelContent>} content={<TabContent>Tab Content 2</TabContent>} />
                    <Tab label={<TabLabelContent>Tab 3</TabLabelContent>} content={<TabContent>Tab Content 3</TabContent>} />
                  </TabLayout>
                </div>
                {/* s4:end */}
              </Body>
            </Panel>
            <Panel>
              <Header>TabLayout can take an additional onTabClick function prop</Header>
              <Body>
                <Snippet tag="s5" src={snippets} />
                {/* s5:start */}
                <div style={{ border: '1px solid #e1e1e1' }}>
                  <TabLayout onTabClick={() => { /* function body */ }}>
                    <Tab label={<TabLabelContent>Tab 1</TabLabelContent>} content={<TabContent>Tab Content 1</TabContent>} />
                    <Tab label={<TabLabelContent>Tab 2</TabLabelContent>} content={<TabContent>Tab Content 2</TabContent>} />
                    <Tab label={<TabLabelContent>Tab 3</TabLabelContent>} content={<TabContent>Tab Content 3</TabContent>} />
                  </TabLayout>
                </div>
                {/* s5:end */}
              </Body>
            </Panel>
          </div>
        );
      }
    }
  </Demo>
);
