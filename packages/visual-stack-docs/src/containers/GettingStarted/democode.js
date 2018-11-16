/* eslint-disable no-unused-vars */
/** @prettier */
import { Demo, Snippet } from '../../../components/Demo';
/* s1:start */
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Layout from '@cjdev/visual-stack-redux/lib/layouts/ApplicationLayout';
import CJLogo from '@cjdev/visual-stack/lib/components/CJLogo';
import PageContent from '@cjdev/visual-stack/lib/components/PageContent';
import { PageHeader, PageTitle, PageDescription } from '@cjdev/visual-stack/lib/components/PageHeader';
import { Link, LinkContentWrapper, SideNav, SettingsIcon } from '@cjdev/visual-stack-redux/lib/components/SideNav';
import { reducer as visualStackReducer } from '@cjdev/visual-stack-redux';

import '@cjdev/visual-stack/lib/global';

/* s1:end */

export default class DemoCode extends React.Component {
  render() {
    /* s2:start */
const reducer = combineReducers({
  visualStack: visualStackReducer,
});

const store = createStore(reducer);

class App extends React.Component {
  render() {
    const sideNav = <SideNav logoBackground="#00AF66"
                        logo={<CJLogo />}
                        appName="YOUR APP NAME HERE!!" >
                        <Link hoverText="Almost there">
                          <a href="this/link/goes/somewhere">
                            <LinkContentWrapper icon={<SettingsIcon/>} label="Where will I go?" />
                          </a>
                        </Link>
                    </SideNav>;

    return (
      <div>
        <Provider store={store} >
            <Layout
                sideNav={sideNav}>
                <PageHeader>
                    <PageTitle> WOW! Page Header
                        <PageDescription>
                            Neato description
                        </PageDescription>
                    </PageTitle>
                </PageHeader>
                <PageContent>
                    <div>Some Sweet Page Content</div>
                </PageContent>
            </Layout>
        </Provider>
      </div>
     );
  }
}
/* s2:end */
  }
}
