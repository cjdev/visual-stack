/* eslint-disable no-invalid-this */
import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';

/* s1:start */
import Pagination from '@cjdev/visual-stack-redux/lib/components/Pagination';
/* s1:end */

class PaginationDocs extends React.Component {
  state = {};

  letTheServerKnow = paginationValue => {
    this.setState(paginationValue);
  };

  render() {
    const letTheServerKnow = this.letTheServerKnow;

    return (
      <Demo srcFile="/samples/src/containers/Components/Docs/pagination.js">
        {snippets => {
          return (
            <div>
              <Panel>
                <Header>Pagination</Header>
                <Body>
                  <Snippet tag="s1" src={snippets} />
                  <Snippet tag="s2" src={snippets} />
                  <pre>Server Received: {JSON.stringify(this.state)}</pre>
                  {/* s2:start */}
                  <Pagination
                    paginationId="pagination-example"
                    numberOfRows={200}
                    onChange={paginationValue => {
                      letTheServerKnow(paginationValue);
                    }}
                  />
                  {/* s2:end */}
                </Body>
              </Panel>
            </div>
          );
        }}
      </Demo>
    );
  }
}

export default PaginationDocs;
