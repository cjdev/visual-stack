import React from 'react';
import {
  PageHeader,
  PageTitle,
} from '@cjdev/visual-stack/lib/components/PageHeader';
import PageContent from '@cjdev/visual-stack/lib/components/PageContent';
// 1. add an import for your demo
import BlankSlateDocs from './blankslate';
import ButtonWithDropdownDocs from './button-with-dropdown';
import ButtonDocs from './button';
import AlertDocs from './alert';
import DatePickerDocs from './datepicker';
import FormDocs from './form';
import ListDocs from './list';
import ModalDocs from './modal';
import PanelDocs from './panel';
import PageHeaderDocs from './pageheader';
import SelectDocs from './select';
import SideNavDocs from './sidenav';
import SlidingPanelDocs from './slidingpanel';
import SpinnerDocs from './spinner';
import TableDocs from './table';
import TabLayoutDocs from './tablayout';
import CardDocs from './card';
import ListViewDocs from './listview';
import ExpandingInputButtonDocs from './expanding-input-button';
import LoadingAnimationDocs from './loading-animation';
import PopoverDocs from './popover';

import CollapsiblePanelDocs from './collapsiblepanel';
import PaginationDocs from './pagination';

const routeComponentMap = {};

const addComponentRoute = (path, linkName, component) => {
  routeComponentMap[path] = { path, linkName, component };
};

// 2. add your demo to the routeComponentMap
addComponentRoute('blankslate', 'Blank Slate', <BlankSlateDocs />);
addComponentRoute('button', 'Button', <ButtonDocs />);
addComponentRoute(
  'button-with-dropdown',
  'Button With Dropdown',
  <ButtonWithDropdownDocs />
);
addComponentRoute('alert', 'Alert', <AlertDocs />);
addComponentRoute('form', 'Form', <FormDocs />);
addComponentRoute('list', 'List', <ListDocs />);
addComponentRoute('modal', 'Modal', <ModalDocs />);
addComponentRoute('panel', 'Panel', <PanelDocs />);
addComponentRoute('pageheader', 'Page Header', <PageHeaderDocs />);
addComponentRoute('select', 'Select', <SelectDocs />);
addComponentRoute('sidenav', 'SideNav', <SideNavDocs />);
addComponentRoute('slidingpanel', 'Sliding Panel', <SlidingPanelDocs />);
addComponentRoute(
  'loading-animation',
  'Loading Animation',
  <LoadingAnimationDocs />
);
addComponentRoute('popover', 'Popover', <PopoverDocs />);
addComponentRoute('spinner', 'Spinner', <SpinnerDocs />);
addComponentRoute('table', 'Table', <TableDocs />);
addComponentRoute('tablayout', 'TabLayout', <TabLayoutDocs />);
addComponentRoute('card', 'Card', <CardDocs />);
addComponentRoute('listview', 'List View', <ListViewDocs />);
addComponentRoute('pagination', 'Pagination', <PaginationDocs />);
addComponentRoute(
  'expanding-input-button',
  'Expanding Input Button',
  <ExpandingInputButtonDocs />
);
addComponentRoute(
  'collapsiblepanel',
  'Collapsible Panel',
  <CollapsiblePanelDocs />
);
addComponentRoute(
  'button-with-dropdown',
  'Button With Dropdown',
  <ButtonWithDropdownDocs />
);
addComponentRoute('datepicker', 'Date Picker', <DatePickerDocs />);

const ComponentDocs = ({ params }) => {
  const routeData = routeComponentMap[params.componentName];
  return (
    <div>
      <PageHeader>
        <PageTitle>{routeData.linkName}</PageTitle>
      </PageHeader>
      <PageContent>{routeData.component}</PageContent>
    </div>
  );
};

export { routeComponentMap };
export default ComponentDocs;
