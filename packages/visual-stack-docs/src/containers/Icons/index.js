import React from 'react';
import PageContent from '@cjdev/visual-stack/lib/components/PageContent';
import { PageHeader, PageTitle } from '@cjdev/visual-stack/lib/components/PageHeader';
import { Panel, Body } from '@cjdev/visual-stack/lib/components/Panel';
import './index.css';

import * as IconSet from '@cjdev/visual-stack/lib/components/Icons/Nav';
import { BarGraphIcon } from '@cjdev/visual-stack/lib/components/Icons/Nav';

const IconDisplay = ({ icon, name }) => {
  return (
    <div className="icon-display">
      <span className="icon-display-icon">{icon}</span>
      <span className="icon-display-name">{name}</span>
    </div>
  );
};

const Icons = () =>
  <div>
    <PageHeader>
      <PageTitle>Icons</PageTitle>
    </PageHeader>
    <PageContent>
      <div>
        <Panel>
          <Body>
            <div className="icon-grid">
              <IconDisplay icon={ <IconSet.AccountIcon/>} name="AccountIcon" />
              <IconDisplay icon={ <IconSet.LogoutIcon/>} name="LogoutIcon" />
              <IconDisplay icon={ <BarGraphIcon/>} name="BarGraphIcon" />
              <IconDisplay icon={ <IconSet.ProductIcon/>} name="ProductIcon" />
            </div>
          </Body>
        </Panel>
      </div>

    </PageContent>
  </div>;

export default Icons;
