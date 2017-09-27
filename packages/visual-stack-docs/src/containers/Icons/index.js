import React from 'react';
import PageContent from '@cjdev/visual-stack/lib/components/PageContent';
import {
  PageHeader,
  PageTitle,
} from '@cjdev/visual-stack/lib/components/PageHeader';
import { Panel, Body, Header } from '@cjdev/visual-stack/lib/components/Panel';
import { Demo, InlineSnippet, Snippet } from '../../components/Demo';
import './index.css';

import {
  AccountIcon,
  BarGraphIcon,
  CountedIcon,
  LogoutIcon,
  PercentIcon,
  ProductIcon,
} from '@cjdev/visual-stack/lib/components/Icons';

const IconDisplay = ({ icon, snippets, tag }) => {
  return (
    <div className="icon-display">
      <span className="icon-display-icon">{icon}</span>
      <InlineSnippet tag={tag} src={snippets} />
    </div>
  );
};

/*
s8:start
.mdi-icon.cj-green {
  fill: #00AF66;
}
s8:end
*/

const accountIcon =
  /* s1:start */
  <AccountIcon />
  /* s1:end */;
const logoutIcon =
  /* s2:start */
  <LogoutIcon />
  /* s2:end */;
const barGraphIcon =
  /* s3:start */
  <BarGraphIcon />
  /* s3:end */;
const productIcon =
  /* s4:start */
  <ProductIcon />
  /* s4:end */;
const percentIcon =
  /* s5:start */
  <PercentIcon />
  /* s5:end */;
const countedIcon =
  /* s6:start */
  <CountedIcon />
  /* s6:end */;
const countedIconRed =
  /* s7:start */
  <AccountIcon className="cj-green" />
  /* s7:end */;

const Icons = () => (
  <Demo srcFile="/samples/src/containers/Icons/index.js">
    {snippets => {
      const makeDisplay = (icon, tag) => {
        return (<IconDisplay icon={icon} snippets={snippets} tag={tag} />);
      };
      return (
        <div>
          <PageHeader>
            <PageTitle>Icons</PageTitle>
          </PageHeader>
          <PageContent>
            <div>
              <Panel>
                <Body>
                  <div className="icon-grid">
                    { makeDisplay(accountIcon, 's1') }
                    { makeDisplay(barGraphIcon, 's3') }
                    { makeDisplay(countedIcon, 's6') }
                    { makeDisplay(logoutIcon, 's2') }
                    { makeDisplay(percentIcon, 's5') }
                    { makeDisplay(productIcon, 's4') }
                  </div>
                </Body>
              </Panel>
              <Panel>
                <Header> With className</Header>
                <Body>
                    <Snippet tag="s8" src={snippets} />
                    { makeDisplay(countedIconRed, 's7') }
                </Body>
              </Panel>
            </div>
          </PageContent>
        </div>
      );
    }}
  </Demo>
);

export default Icons;
