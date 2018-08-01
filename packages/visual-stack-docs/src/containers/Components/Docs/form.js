/* eslint */
import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';
/* s3:start */
import { Form, FormGroup, Label, Input, Legend } from '@cjdev/visual-stack/lib/components/Form';
/* s3:end */

export default () =>
    <Demo srcFile="/samples/src/containers/Components/Docs/form.js">
    { snippets => {
      return (
        <div>
          <Panel>
            <Header>
              Default Buttons
            </Header>
            <Body>
              { /* s2:start */ }
              <Form vertical={false}>
                <FormGroup vertical={false}>
                  <Label required={true}>Some Label</Label>
                  <Input/>
                </FormGroup>
              </Form>
              { /* s2:end */ }
              <Snippet tag="s3" src={snippets} />
              <Snippet tag="s2" src={snippets} />
            </Body>
          </Panel>

          <Panel>
            <Header>
              Large Buttons
            </Header>
            <Body>
              { /* s1:start */ }
              <Form vertical={false}>
                <FormGroup vertical={false}>
                  <Label required={true}>Some Label</Label>
                  <Input/>
                  <Legend>Something</Legend>
                </FormGroup>
              </Form>
              { /* s1:end */ }
              <Snippet tag="s1" src={snippets} />
            </Body>
          </Panel>
        </div>
      );
    }}
  </Demo>;

