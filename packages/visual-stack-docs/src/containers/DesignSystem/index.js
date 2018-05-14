import React from 'react';

import PageContent from '@cjdev/visual-stack/lib/components/PageContent';
import { PageHeader, PageTitle, PageHeaderSection } from '@cjdev/visual-stack/lib/components/PageHeader';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';

const DesignSystem = () =>
  <div>
    <PageHeader>
      <PageTitle>Design System</PageTitle>
    </PageHeader>
    <PageContent>
      <Panel>
        <Header>
          This is the best Design System ever
        </Header>
        <Body>
          <h1>Heading 1</h1>
        </Body>
      </Panel>
    </PageContent>
  </div>;

export default DesignSystem;
