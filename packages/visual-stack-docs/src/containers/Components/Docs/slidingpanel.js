/* eslint-disable no-console */
import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';

/* s7:start */
import { SlidingPanel, SlidingPanelSection, SlidingPanelHeader, ToggleIcon, SlidingPanelDropdown } from '@cjdev/visual-stack/lib/components/SlidingPanel';
/* s7:end */
/* s5:start */
import { SlidingPanel as VSRSlidingPanel, ToggleIcon as VSRToggleIcon, SlidingPanelDropdown as VSRSlidingPanelDropdown } from '@cjdev/visual-stack-redux/lib/components/SlidingPanel';
/* s5:end */
import { MultiSelectFilter } from '@cjdev/visual-stack/lib/components/Filters';

class SlidingPanelDemo extends React.Component {
  constructor() {
    /* s1:start */
    // mock state for 'visual-stack' sliding component
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
                        expanded={this.state.filterActive}
                        onClick={() => this.setState({ filterActive: !this.state.filterActive })}
                        >
                        { /* example of a Filter to populate the Dropdown */ }
                        <MultiSelectFilter
                          values={this.state.companies}
                          onSelect={val => console.log(val)}
                        />
                      </SlidingPanelDropdown>
                    </SlidingPanelSection>
                  </SlidingPanel>
                  { /* s3:end */ }
                  <div>
                    Import from visual-stack
                  </div>
                  <Snippet tag="s7" src={snippets} />
                  <div>
                    Set up mock state for 'visual stack' sliding component and dropdown
                  </div>
                  <Snippet tag="s1" src={snippets} />
                  <div>Implement Toggle icon for Sliding Panel</div>
                  <Snippet tag="s2" src={snippets} />
                  <div>Mock structure of Panel, with Dropdown</div>
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
    this.state = {
      panelActive: false,
      filterActive: true,
      companies: [
        { label: '1234 - my company', value: 1234 },
        { label: '5667 - my other company', value: 5667 },
      ],
    };
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
                          values={this.state.companies}
                          onSelect={val => console.log(val)}
                        />
                      </VSRSlidingPanelDropdown>
                    </VSRSlidingPanel>
                    { /* s6:end */ }
                    <div>Import Sliding Panel component from visual-stack-redux</div>
                    <Snippet tag="s5" src={snippets} />
                    <div>Implementation (similar to presentational components)</div>
                    <Snippet tag="s6" src={snippets} />
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

