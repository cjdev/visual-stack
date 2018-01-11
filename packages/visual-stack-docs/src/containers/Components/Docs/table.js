import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';
/* s1:start */
import { Table, TableContainer, Th, Tr, Td, TableTitle, TrHead } from '@cjdev/visual-stack/lib/components/Table';
import './table.css';
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
            <TableContainer className="custom-table-container">
              <div>Custom container with a extra top padding</div>
              <TableTitle className="custom-table-title">Title Table</TableTitle>
              <Table className="custom-table">
                <TrHead>
                    <Th>Header Section 1</Th>
                    <Th>Header Section 2</Th>
                    <Th>Header Section 3</Th>
                    <Th>Header Section 4</Th>
                    <Th>Header Section 5</Th>
                    <Th className="custom-th">Header with className</Th>
                </TrHead>
                <tbody>
                  <Tr>
                    <Td>1</Td>
                    <Td>2</Td>
                    <Td>3</Td>
                    <Td>4</Td>
                    <Td>5</Td>
                    <Td className="custom-td">Cell with className</Td>
                  </Tr>
                  <Tr className="custom-tr">
                    <Td>no</Td>
                    <Td>yes</Td>
                    <Td>no</Td>
                    <Td>yes</Td>
                    <Td>with className on Row</Td>
                    <Td right className="custom-td">Right aligned with className</Td>
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
