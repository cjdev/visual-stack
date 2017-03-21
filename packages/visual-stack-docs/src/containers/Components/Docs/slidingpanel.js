import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';

import { SlidingPanel, SlidingPanelSection, SlidingPanelHeader, ToggleIcon, SlidingPanelDropdown } from '@cjdev/visual-stack/lib/components/SlidingPanel';
/* s5:start */
import { SlidingPanel as VSRSlidingPanel, ToggleIcon as VSRToggleIcon, SlidingPanelDropdown as VSRSlidingPanelDropdown } from '@cjdev/visual-stack-redux/lib/components/SlidingPanel';
import { MultiSelectFilter } from '@cjdev/visual-stack/lib/components/SlidingPanelFilter';
/* s5:end */

class SlidingPanelDemo extends React.Component {
  constructor() {
    super();
    /* s1:start */
    this.state = {
      panelActive: false,
      filterActive: false,
      companies: [
        { label: '1234 - my company', value: 1234 },
        { label: '5667 - my other company', value: 5667 },
      ],
    };
    /* s1:end */
  }

  render() {
    return (
      <Demo srcFile="/samples/slidingpanel.js">
        { snippets => {
          return (
            <div>
              <Panel>
                <Header>
                  <div>
                    The SlidingPanel displays and hides based on the <code>active</code> prop.
                  </div>
                </Header>
                <Body>

                  { /* s2:start */ }
                  <ToggleIcon
                    onClick={() => {
                      this.setState({ panelActive: !this.state.panelActive });
                    }}
                  />
                  { /* s2:end */ }
                  { /* s3:start */ }
                  <SlidingPanel active={this.state.panelActive}>
                    <SlidingPanelHeader>
                      sliding panel header
                    </SlidingPanelHeader>
                    <SlidingPanelSection>
                      <SlidingPanelDropdown
                        label="My CIDs"
                        active={this.state.filterActive}
                        onClick={() => this.setState({ filterActive: !this.state.filterActive })}
                        >
                        <MultiSelectFilter
                          active={this.state.filterActive}
                          values={this.state.companies}
                          onSelect={val => console.log(val)}
                        />
                      </SlidingPanelDropdown>
                    </SlidingPanelSection>
                    <SlidingPanelSection>
                      <div>
                        Section #3 in div
                      </div>
                    </SlidingPanelSection>
                  </SlidingPanel>
                  { /* s3:end */ }
                  <Snippet tag="s1" src={snippets} />
                  <Snippet tag="s2" src={snippets} />
                  <Snippet tag="s3" src={snippets} />
                </Body>
              </Panel>
            </div>
            );
        }}
      </Demo>
    );
  }
}


class VSRSlidingPanelDemo extends React.Component {
  constructor() {
    super();
    /* s4:start */
    this.state = {
      panelActive: false,
      filterActive: true,
      companies: [
        { label: '1234 - my company', value: 1234 },
        { label: '5667 - my other company', value: 5667 },
      ],
    };
    /* s4:end */
  }
  render() {
    return (
      <Demo srcFile="/samples/slidingpanel.js">
        {
          snippets => {
            return (
              <div>
                <Panel>
                  <Header>
                    SlidingPanel (redux)
                  </Header>
                  <Body>
                    { /* s6:start */ }
                    <VSRToggleIcon />
                    <VSRSlidingPanel>
                      <SlidingPanelHeader>
                        reduxified sliding panel header
                      </SlidingPanelHeader>
                      <VSRSlidingPanelDropdown
                        label="My Redux CIDs"
                        >
                        <MultiSelectFilter
                          active={this.state.filterActive}
                          values={this.state.companies}
                          onSelect={val => console.log(val)}
                        />
                      </VSRSlidingPanelDropdown>
                    </VSRSlidingPanel>
                    { /* s6:end */ }
                    <Snippet tag="s5" src={snippets} />
                    <Snippet tag="s4" src={snippets} />
                  </Body>
                </Panel>
              </div>
            );
          }
        }
      </Demo>
    );
  }
}

export default () =>
<div>
  <SlidingPanelDemo />
  <VSRSlidingPanelDemo />
</div>;

