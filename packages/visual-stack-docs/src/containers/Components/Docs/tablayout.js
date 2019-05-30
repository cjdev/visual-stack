import React from 'react';
/* s1:start */
import {
  TabLayout,
  Tab,
  TabLabelContent,
  TabContent,
} from '@cjdev/visual-stack-redux/lib/components/TabLayout';
/* s1:end */
import { Demo, Snippet } from '../../../components/Demo';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';

export default () => (
  <Demo srcFile="/samples/src/containers/Components/Docs/tablayout.js">
    {snippets => {
      const FullPageWrapper = ({ ...props }) => (
        <div style={{ margin: '-24px' }}>{props.children}</div>
      );
      const DivWithBorder = props => (
        <div style={{ border: '1px solid #e1e1e1' }}>{props.children}</div>
      );
      return (
        <FullPageWrapper>
          {/* s7:start */}
          <TabLayout
            tabLayoutId={'floatingTabLayout'}
            floatingHeader={true}
            headerHeight={'48px'}
            headerWidth={'100%'}
          >
            {/* s7:end */}
            <Tab
              label={<TabLabelContent>Tab 1</TabLabelContent>}
              content={
                <TabContent>
                  <Panel>
                    <Header>Imports</Header>
                    <Body>
                      <div>
                        <Snippet tag="s1" src={snippets} />
                      </div>
                    </Body>
                  </Panel>
                  <Panel>
                    <Header>Base TabLayout</Header>
                    <Body>
                      <div>
                        Note: tabLayoutId is a required prop used to identify a
                        distinct TabLayout within the redux store.
                      </div>
                      <Snippet tag="s2" src={snippets} />
                      {/* s2:start */}
                      <TabLayout tabLayoutId={'tabLayout1'}>
                        <Tab
                          label={<div>Disabled</div>}
                          content={<div>Tab Content 0</div>}
                          disabled={true}
                        />
                        <Tab
                          label={<div>Default</div>}
                          content={<div>Tab Content 1</div>}
                        />
                        <Tab
                          label={<div>Inactive</div>}
                          content={<div>Tab Content 2</div>}
                        />
                      </TabLayout>
                      {/* s2:end */}
                    </Body>
                  </Panel>
                  <Panel>
                    <Header>
                      Tab can accept any component for label / content
                    </Header>
                    <Body>
                      <div>Standard Label / Content Example</div>
                      <Snippet tag="s5" src={snippets} />
                      {/* s5:start */}
                      <DivWithBorder>
                        <TabLayout tabLayoutId={'tabLayout2'}>
                          <Tab
                            label={<TabLabelContent>Tab 1</TabLabelContent>}
                            content={<TabContent>Tab Content 1</TabContent>}
                          />
                          <Tab
                            label={<TabLabelContent>Tab 2</TabLabelContent>}
                            content={<TabContent>Tab Content 2</TabContent>}
                          />
                          <Tab
                            label={<TabLabelContent>Tab 3</TabLabelContent>}
                            content={<TabContent>Tab Content 3</TabContent>}
                          />
                        </TabLayout>
                      </DivWithBorder>
                      {/* s5:end */}
                    </Body>
                  </Panel>
                  <Panel>
                    <Header>
                      <div>
                        TabLayout can take additional props: onTabClick,
                        themeColor
                      </div>
                    </Header>
                    <Body>
                      <Snippet tag="s6" src={snippets} />
                      {/* s6:start */}
                      <DivWithBorder>
                        <TabLayout
                          tabLayoutId={'tabLayout3'}
                          onTabClick={() => {
                            /* function body */
                          }}
                          themeColor={'#ff00ff'}
                        >
                          <Tab
                            label={<TabLabelContent>Tab 1</TabLabelContent>}
                            content={<TabContent>Tab Content 1</TabContent>}
                          />
                          <Tab
                            label={<TabLabelContent>Tab 2</TabLabelContent>}
                            content={<TabContent>Tab Content 2</TabContent>}
                          />
                          <Tab
                            label={<TabLabelContent>Tab 3</TabLabelContent>}
                            content={<TabContent>Tab Content 3</TabContent>}
                          />
                        </TabLayout>
                      </DivWithBorder>
                      {/* s6:end */}
                    </Body>
                  </Panel>
                  <Panel>
                    <Header>
                      <div>
                        Floating Header (as seen at the top of this page)
                      </div>
                    </Header>
                    <Body>
                      <Snippet tag="s7" src={snippets} />
                      <div>
                        The headerHeight prop does not set the height of the
                        header. It specifies the vertical offset for tab body
                        content.
                      </div>
                    </Body>
                  </Panel>
                </TabContent>
              }
            />
            <Tab
              label={<TabLabelContent>Tab 2</TabLabelContent>}
              content={<TabContent>Tab Content 2</TabContent>}
            />
            <Tab
              label={<TabLabelContent>Tab 3</TabLabelContent>}
              content={<TabContent>Tab Content 3</TabContent>}
            />
          </TabLayout>
        </FullPageWrapper>
      );
    }}
  </Demo>
);
