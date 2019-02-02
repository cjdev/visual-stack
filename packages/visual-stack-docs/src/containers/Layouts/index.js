import React from 'react';
import './index.css';
import ApplicationLayout from './ApplicationLayout';
import DialogLayoutParent from './DialogLayout';

const layoutsRouteMap = {};

const addComponentRoute = (path, linkName, component) => {
  layoutsRouteMap[path] = { path, linkName, component };
};

// 1. add an import for your demo

// 2. add your demo to the layoutsRoutesMap
addComponentRoute('applicationLayout', 'Application Layout', <ApplicationLayout />);
addComponentRoute('dialogLayout', 'Dialog Layout', <DialogLayoutParent />);

export { layoutsRouteMap };

export const LayoutsDocs = ({ params }) => {
  const routeData = layoutsRouteMap[params.layoutName];
  return (
    <div>
      { routeData.component }
    </div>
  );
};

const Layouts = ({ children }) =>
    <div>
        { children }
    </div>;

export default Layouts;
