import React from 'react';
import { Panel, Body, Header as PanelHeader } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';

import { List, Header, Rows, Row, Cell } from '@cjdev/visual-stack/lib/components/List';

export default () =>
  <Demo srcFile="/samples/src/containers/Components/Docs/list.js">
    { snippets => {
      return (
        <div>
          <Panel>
            <PanelHeader>
              List
            </PanelHeader>
            <Body>
              { /* s1:start */ }
              <List>
                <Header labels={[
                  { alignment: 'left', text: 'HeaderA',  width: 2 },
                  { alignment: 'left', text: 'HeaderB',  width: 3 },
                  { alignment: 'left', text: 'HeaderC',  width: 2 },
                  { alignment: 'left', text: 'HeaderD',  width: 3 },
                  { alignment: 'left', text: 'HeaderF',  width: 2 },
                ]} />
                <Rows>
                  <Row>
                    <Cell width={2}>1267</Cell>
                    <Cell width={3}>456</Cell>
                    <Cell width={2}>1011</Cell>
                    <Cell width={3}>1011</Cell>
                    <Cell width={2}>789</Cell>
                  </Row>
                </Rows>
              </List>
              { /* s1:end */ }
              <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>;
