import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';
/* s1:start */
import { Table, TableContainer, Th, Tr, Td, TdRight, TableTitle, TrHead } from '@cjdev/visual-stack/lib/components/Table';
/* s1:end */

export default () =>
    <Demo srcFile="/samples/src/containers/Components/Docs/table.js">
    { snippets => {
      return (
        <div>
          <Panel>
            <Header>
              Simple Table Example
            </Header>
            <Body>
            { /* s2:start */ }
            <TableContainer>
              <TableTitle>Title of your Table</TableTitle>
              <Table>
                <TrHead>
                    <Th>Header Section 1</Th>
                    <Th>Header Section 2</Th>
                    <Th>Header Section 3</Th>
                    <Th>Header Section 4</Th>
                    <Th>Header Section 5</Th>
                    <Th>Header Section 6</Th>
                </TrHead>
                <tbody>
                  <Tr>
                    <TdRight>1</TdRight>
                    <Td>2</Td>
                    <Td>3</Td>
                    <Td>4</Td>
                    <Td>5</Td>
                    <Td>6</Td>
                  </Tr>
                  <Tr>
                    <Td>no</Td>
                    <Td>yes</Td>
                    <Td>no</Td>
                    <Td>yes</Td>
                    <Td>no</Td>
                    <Td>yes</Td>
                  </Tr>
                </tbody>
              </Table>
            </TableContainer>
            { /* s2:end */ }
            <Snippet tag="s1" src={snippets} />
            <Snippet tag="s2" src={snippets} />
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>;
