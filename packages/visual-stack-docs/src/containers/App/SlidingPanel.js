/** @prettier */
import React from 'react';

/* s0:start */
import { SlidingPanel, SlidingPanelHeader, SlidingPanelDropdown } from '@cjdev/visual-stack-redux/lib/components/SlidingPanel';
/* s0:end */

export default class AppSideNav extends React.Component {
  render() {
    return (
    /* s1:start */
          <SlidingPanel
              initialActive={false}
          >
            <SlidingPanelHeader>
              reduxified sliding panel header
            </SlidingPanelHeader>
            <SlidingPanelDropdown
              id="id1"
              label="My Redux CIDs"
              initialActive={true}
              >
              <div>something</div>
            </SlidingPanelDropdown>
          </SlidingPanel>
    /* s1:end */
    );
  }
}
