import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';

import { SlidingPanel, SlidingPanelSection, SlidingPanelHeader, ToggleIcon } from '@cjdev/visual-stack/lib/components/SlidingPanel';
/* s5:start */
// import { SlidingPanel as VSRSlidingPanel, ToggleIcon as VSRToggleIcon } from '@cjdev/visual-stack-redux/lib/components/SlidingPanel';
import { ChangeMeLater, Filter } from '@cjdev/visual-stack/lib/components/SlidingPanelFilter';
/* s5:end */

class SlidingPanelFilterDemo extends React.Component {
    constructor() {
        super();
        /* s1:start */
        this.state = {
            panelActive: false,
            filterActive: false,
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
                                        <div>
                                            <ChangeMeLater
                                                label="CLICK ME"
                                                onClick={() => this.setState({filterActive: !this.state.filterActive})}
                                            >
                                                <Filter
                                                    active={this.state.filterActive}
                                                />
                                            </ChangeMeLater>
                                        </div>
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

/*
class VSRSlidingPanelDemo extends React.Component {
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
                                    { /!* s4:start *!/ }
                                    <VSRToggleIcon />
                                    <VSRSlidingPanel>
                                        <SlidingPanelHeader>
                                            reduxified sliding panel header
                                        </SlidingPanelHeader>
                                    </VSRSlidingPanel>
                                    { /!* s4:end *!/ }
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
*/

export default () =>
    <div>
        <SlidingPanelFilterDemo />
    </div>;
