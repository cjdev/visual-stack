import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';
/* s1:start */
import Pagination from '@cjdev/visual-stack/lib/components/Pagination';
/* s1:end */

export default () => (
  <Demo srcFile="/samples/src/containers/Components/Docs/pagination.js">
    {snippets => {
      return (
        <div>
          <Panel>
            <Header>Pagination</Header>
            <Body>
              <Snippet tag="s1" src={snippets} />
              <Snippet tag="s2" src={snippets} />
              {/* s2:start */}
              <Pagination
                numberOfRows={201}
                onPageChange={console.log}
                onRowsPerPageChange={console.log}
              />
              {/* s2:end */}
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>
);
