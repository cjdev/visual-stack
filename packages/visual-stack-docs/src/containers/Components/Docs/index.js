import React from 'react';
import { PageHeader, PageTitle } from '@cjdev/visual-stack/lib/components/PageHeader';
import PageContent from '@cjdev/visual-stack/lib/components/PageContent';

const routeComponentMap = {};

const addComponentRoute = (path, linkName, component) => {
  routeComponentMap[path] = { path, linkName, component };
};

// 1. add an import for your demo
import BlankSlateDocs from './blankslate';
import ButtonDocs from './button';
import ListDocs from './list';
import ModalDocs from './modal';
import PanelDocs from './panel';
import PageHeaderDocs from './pageheader';
import SlidingPanelDocs from './slidingpanel';
import SpinnerDocs from './spinner';
import TopNavDocs from './topnav';

// 2. add your demo to the routeComponentMap
addComponentRoute('blankslate', 'Blank Slate', <BlankSlateDocs />);
addComponentRoute('button', 'Button', <ButtonDocs />);
addComponentRoute('list', 'List', <ListDocs />);
addComponentRoute('modal', 'Modal', <ModalDocs />);
addComponentRoute('panel', 'Panel', <PanelDocs />);
addComponentRoute('pageheader', 'Page Header', <PageHeaderDocs />);
addComponentRoute('slidingpanel', 'Sliding Panel', <SlidingPanelDocs />);
addComponentRoute('spinner', 'Spinner', <SpinnerDocs />);
addComponentRoute('topnav', 'TopNav', <TopNavDocs />);

const ComponentDocs = ({ params }) => {
  const routeData = routeComponentMap[params.componentName];
  return (
    <div>
      <PageHeader>
        <PageTitle>{routeData.linkName}</PageTitle>
      </PageHeader>
      <PageContent>
        { routeData.component }
      </PageContent>
    </div>
  );
};

export { routeComponentMap };
export default ComponentDocs;

