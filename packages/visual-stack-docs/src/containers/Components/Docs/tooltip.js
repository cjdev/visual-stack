import React from 'react';
import { Body, Header, Panel } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';
import InformationOutlineIcon from 'mdi-react/InformationOutlineIcon';
/* s1:start */
import { Tooltip } from '@cjdev/visual-stack/lib/components/Tooltip';
/* s1:end */

export default () => (
  <Demo srcFile="/samples/src/containers/Components/Docs/tooltip.js">
    {snippets => {
      return (
        <div>
          <Panel>
            <Header>Tooltip</Header>
            <Body>
              <div>
                {/* s2:start */}
                <Tooltip content="I'm a tooltip!">
                  <InformationOutlineIcon />
                </Tooltip>
                {/* s2:end */}
              </div>
              <Snippet tag="s1" src={snippets} />
              <Snippet tag="s2" src={snippets} />
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>
);
