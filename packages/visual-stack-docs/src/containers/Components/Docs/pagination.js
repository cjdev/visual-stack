import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';

/* s1:start */
import Pagination from '@cjdev/visual-stack-redux/lib/components/Pagination';
/* s1:end */

class PaginationDocs extends React.Component {
  state = {
    numberOfRows: 200,
    currentPage: 1,
    rowsPerPage: 10,
  };

  render() {
    return (
      <Demo srcFile="/samples/src/containers/Components/Docs/pagination.js">
        {snippets => {
          return (
            <div>
              <Panel>
                <Header>Pagination</Header>
                <Body>
                  <Snippet tag="s1" src={snippets} />
                  <pre>{JSON.stringify(this.state, null, 2)}</pre>
                  <Snippet tag="s2" src={snippets} />
                  {/* s2:start */}
                  <Pagination
                    numberOfRows={this.state.numberOfRows}
                    onPageChange={nextPage => {
                      this.setState({ currentPage: nextPage });
                    }}
                    currentPage={this.state.currentPage}
                    onRowsPerPageChange={rowsPerPage =>
                      this.setState({ rowsPerPage })
                    }
                    rowsPerPage={this.state.rowsPerPage}
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
