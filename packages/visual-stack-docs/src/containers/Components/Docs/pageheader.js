import React from 'react';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, Snippet } from '../../../components/Demo';

import {
  PageHeader,
  PageTitle,
  PageHeaderSection,
  PageDescription,
} from '@cjdev/visual-stack/lib/components/PageHeader';


const PageHeader1Section = ({ snippets }) =>
  <Panel>
    <Header>
      Page Header: Title and Description
    </Header>
    <Body>
      { /* s1:start */ }
      <PageHeader>
        <PageTitle>
          Title
          <PageDescription>Description</PageDescription>
        </PageTitle>
      </PageHeader>
      { /* s1:end */ }
      <Snippet tag="s1" src={snippets} />
    </Body>
  </Panel>;

const PageHeader2Section = ({ snippets }) =>
  <Panel>
    <Header>
      Page Header: 2 sections
    </Header>
    <Body>
      { /* s2:start */ }
      <PageHeader>
        <PageTitle>
          <span>
            Title
          </span>
        </PageTitle>
        <PageHeaderSection>
          Right
        </PageHeaderSection>
      </PageHeader>
      { /* s2:end */ }
      <Snippet tag="s2" src={snippets} />
    </Body>
  </Panel>;

export default () =>
  <Demo srcFile="/samples/src/containers/Components/Docs/pageheader.js">
    { snippets => {
      return (
        <div>
          <PageHeader1Section snippets={snippets} />
          <PageHeader2Section snippets={snippets} />
        </div>
      );
    }}
  </Demo>;

