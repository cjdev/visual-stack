import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';

import { Table, Row, Cell } from '@cjdev/visual-stack/lib/components/Table';

export default () =>
  <Demo srcFile="/samples/table.js">
    { snippets => {
      return (
        <div>
          <Panel>
            <Header>
              Table
            </Header>
            <Body>
              { /* s1:start */ }
              <Table>
                <Row
                  onClick={() => { alert('click'); }}
                  selected={true}
                >
                  <Cell>123456789</Cell>
                  <Cell>456</Cell>
                  <Cell>789</Cell>
                </Row>
                <Row
                  onClick={() => { alert('click'); }}
                >
                  <Cell>321</Cell>
                  <Cell>987654321</Cell>
                  <Cell>987</Cell>
                </Row>
                <Row
                  onClick={() => { alert('click'); }}
                >
                  <Cell>321</Cell>
                  <Cell>654</Cell>
                  <Cell>987654321</Cell>
                </Row>
              </Table>
              { /* s1:end */ }
              <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>;
