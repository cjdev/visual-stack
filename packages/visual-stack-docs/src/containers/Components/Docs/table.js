/** @prettier */
import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';
/* s1:start */
import {
  TableContainer,
  TableTitle,
  Table,
  THead,
  TBody,
  TFoot,
  Tr,
  Th,
  Td,
} from '@cjdev/visual-stack/lib/components/Table';
import './table.css'; // for custom styles
/* s1:end */

export default () => (
  <Demo srcFile="/samples/src/containers/Components/Docs/table.js">
    {snippets => {
      return (
        <div>
          <Panel>
            <Header>Simple Table</Header>
            <Body>
              <div className="docs">The basics.</div>
              {/* s2:start */}
              <TableContainer>
                <TableTitle>Table Title</TableTitle>
                <Table>
                  <THead>
                    <Tr>
                      <Th>Header 1</Th>
                      <Th>Header 2</Th>
                      <Th>Header 3</Th>
                    </Tr>
                  </THead>
                  <TBody>
                    <Tr>
                      <Td>1</Td>
                      <Td>2</Td>
                      <Td>3</Td>
                    </Tr>
                    <Tr>
                      <Td>1</Td>
                      <Td>2</Td>
                      <Td>3</Td>
                    </Tr>
                  </TBody>
                  <TFoot>
                    <Tr>
                      <Th>Footer Section 1</Th>
                      <Th>Footer Section 2</Th>
                      <Th>Footer Section 3</Th>
                    </Tr>
                  </TFoot>
                </Table>
              </TableContainer>
              {/* s2:end */}
              <Snippet tag="s1" src={snippets} />
              <Snippet tag="s2" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Header>HTML Table Props and className</Header>
            <Body>
              <div className="docs">
                All components accept valid DOM props and a{' '}
                <code>className</code> for application-specific styling.
              </div>
              {/* s3:start */}
              <TableContainer>
                <TableTitle>Table Title</TableTitle>
                <Table>
                  <THead>
                    <Tr>
                      <Th>Header 1</Th>
                      <Th>Header 2</Th>
                      <Th>Header 3</Th>
                    </Tr>
                  </THead>
                  <TBody>
                    <Tr>
                      <Td className="custom-td-colspan" colSpan={2}>
                        1 (colSpan 2)
                      </Td>
                      <Td className="custom-td-rowspan" rowSpan={2}>
                        3 (rowSpan 2)
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>1</Td>
                      <Td>2</Td>
                    </Tr>
                  </TBody>
                  <TFoot>
                    <Tr>
                      <Th>Footer Section 1</Th>
                      <Th>Footer Section 2</Th>
                      <Th>Footer Section 3</Th>
                    </Tr>
                  </TFoot>
                </Table>
              </TableContainer>
              {/* s3:end */}
              <Snippet tag="s3" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Header>
              Cells with <code>nowrap</code>
            </Header>
            <Body>
              <div className="docs">
                <code>Td</code> and <code>Th</code> components accept a shortcut
                prop for <code>nowrap</code>.
              </div>
              {/* s6:start */}
              <TableContainer>
                <TableTitle>Table Title</TableTitle>
                <Table>
                  <THead>
                    <Tr>
                      <Th>Header 1 - This column will push others to wrap</Th>
                      <Th nowrap>Header 2 - This column will not wrap</Th>
                      <Th>Header 3 wrap</Th>
                    </Tr>
                  </THead>
                  <TBody>
                    <Tr>
                      <Td>
                        long wrapping cell that pushes the other cells to the
                        point of wrapping. long wrapping cell that pushes the
                        other cells to the point of wrapping. long wrapping cell
                        that pushes the other cells to the point of wrapping.
                        long wrapping cell that pushes the other cells to the
                        point of wrapping. long wrapping cell that pushes the
                        other cells to the point of wrapping. long wrapping cell
                        that pushes the other cells to the point of wrapping.
                        long wrapping cell that pushes the other cells to the
                        point of wrapping. long wrapping cell that pushes the
                        other cells to the point of wrapping.
                      </Td>
                      <Td nowrap>no wrap</Td>
                      <Td>wrap wrap wrap</Td>
                    </Tr>
                    <Tr>
                      <Td>1</Td>
                      <Td nowrap>2</Td>
                      <Td>3</Td>
                    </Tr>
                  </TBody>
                  <TFoot>
                    <Tr>
                      <Th>Footer Section 1</Th>
                      <Th nowrap>Footer Section 2</Th>
                      <Th>Footer Section 3</Th>
                    </Tr>
                  </TFoot>
                </Table>
              </TableContainer>
              {/* s6:end */}
              <Snippet tag="s6" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Header>Cell Alignment</Header>
            <Body>
              <div className="docs">
                <code>Th</code> and <code>Td</code> components accept this
                shorthand props <code>center</code> and <code>right</code> for
                text alignment. Left is the default.
              </div>
              {/* s4:start */}
              <TableContainer>
                <TableTitle>Table Title</TableTitle>
                <Table>
                  <THead>
                    <Tr>
                      <Th>Header Left</Th>
                      <Th center>Header Center</Th>
                      <Th right>Header Right</Th>
                    </Tr>
                  </THead>
                  <TBody>
                    <Tr>
                      <Td>1</Td>
                      <Td center>2</Td>
                      <Td right>3</Td>
                    </Tr>
                    <Tr>
                      <Td>1</Td>
                      <Td center>2</Td>
                      <Td right>3</Td>
                    </Tr>
                  </TBody>
                  <TFoot>
                    <Tr>
                      <Th>Footer Section Left</Th>
                      <Th center>Footer Section Center</Th>
                      <Th right>Footer Section Right</Th>
                    </Tr>
                  </TFoot>
                </Table>
              </TableContainer>
              {/* s4:end */}
              <Snippet tag="s4" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Header>Complex Table Example</Header>
            <Body>
              <div className="docs">
                This demonstrates all the features of the table components.
              </div>
              {/* s5:start */}
              <TableContainer className="custom-table-container">
                <TableTitle className="custom-table-title">
                  Table Title w/ Custom Color
                </TableTitle>
                <Table className="custom-table">
                  <THead className="custom-header">
                    <Tr>
                      <Th>Header 1</Th>
                      <Th>Header 2</Th>
                      <Th>Header 3 wrap wrap</Th>
                      <Th center>Header 4 centered</Th>
                      <Th nowrap>Header w/ nowrap nowrap nowrap</Th>
                      <Th right className="custom-th">
                        Header with className
                      </Th>
                    </Tr>
                  </THead>
                  <TBody>
                    <Tr>
                      <Td>1</Td>
                      <Td>2</Td>
                      <Td>wrap wrap</Td>
                      <Td center>4</Td>
                      <Td>5</Td>
                      <Td right>6</Td>
                    </Tr>

                    <Tr>
                      <Td>1</Td>
                      <Td>2</Td>
                      <Td>wrap wrap</Td>
                      <Td center>4</Td>
                      <Td nowrap>this will not wrap this will not wrap</Td>
                      <Td right className="custom-td">
                        Cell with className
                      </Td>
                    </Tr>
                    <Tr className="custom-tr">
                      <Td>1</Td>
                      <Td>2</Td>
                      <Td>wrap wrap</Td>
                      <Td center>4</Td>
                      <Td>with className on Row</Td>
                      <Td right>6</Td>
                    </Tr>
                    <Tr>
                      <Td>1</Td>
                      <Td>
                        long wrapping cell that pushes the other cells to the
                        point of wrapping. long wrapping cell that pushes the
                        other cells to the point of wrapping. long wrapping cell
                        that pushes the other cells to the point of wrapping.
                        long wrapping cell that pushes the other cells to the
                        point of wrapping. long wrapping cell that pushes the
                        other cells to the point of wrapping. long wrapping cell
                        that pushes the other cells to the point of wrapping.
                        long wrapping cell that pushes the other cells to the
                        point of wrapping. long wrapping cell that pushes the
                        other cells to the point of wrapping.
                      </Td>
                      <Td>wrap wrap</Td>
                      <Td className="custom-td-colspan" colSpan={2}>
                        colspan 2 with className
                      </Td>
                      <Td right>6</Td>
                    </Tr>
                  </TBody>
                  <TFoot className="custom-footer">
                    <Tr>
                      <Th>Footer Section 1</Th>
                      <Th>Footer Section 2</Th>
                      <Th>Footer Section 3</Th>
                      <Th center>Footer Section 4 centered</Th>
                      <Th>Footer Section 5</Th>
                      <Th right>Footer Section 6</Th>
                    </Tr>
                  </TFoot>
                </Table>
              </TableContainer>
              {/* s5:end */}
              <Snippet tag="s5" src={snippets} />
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>
);
