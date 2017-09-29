import React from 'react';

import PageContent from '@cjdev/visual-stack/lib/components/PageContent';
import { PageHeader, PageTitle, PageHeaderSection } from '@cjdev/visual-stack/lib/components/PageHeader';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';

const Layouts = () =>
  <div>
    <PageHeader>
      <PageTitle>Layouts</PageTitle>
      <PageHeaderSection>Test to see that Right Aligned is not cut off</PageHeaderSection>
    </PageHeader>
    <PageContent>
      <Panel>
        <Header>
          Application Layout
        </Header>
        <Body>
          ApplicationLayout includes the SideNav component and necessary CSS to render a full page application.
        </Body>
      </Panel>
    </PageContent>
  </div>;

export default Layouts;
