import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer as vsReducer } from '@cjdev/visual-stack-redux';
import '@cjdev/visual-stack/lib/global';

import App from './containers/App/';
import Home from './containers/Home/';
import Components from './containers/Components/';
import ComponentDocs from './containers/Components/Docs/';
import Experimental from './containers/Experimental/';
import ExperimentalDocs from './containers/Experimental/Docs/';
import Icons from './containers/Icons/';
import Layouts, { LayoutsDocs } from './containers/Layouts';
import GettingStarted from './containers/GettingStarted/';
import './index.css';
import {
  DialogLayoutDemo,
  NoButtonDialogLayoutDemo,
  SubmittingDialogLayoutDemo,
  WideDialogLayoutDemo,
} from './containers/Layouts/DialogLayout';
import {
  TopNavCodeSnippet1,
  TopNavCodeSnippet2,
  TopNavCodeSnippet3 } from './containers/Components/Docs/topnav'


const reducer = combineReducers({
  visualStack: vsReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="components" component={Components}>
          <Route path=":componentName" component={ComponentDocs} />
        </Route>
        <Route path="icons" component={Icons} />
        <Route path="layouts" component={Layouts}>
          <Route path=":layoutName" component={LayoutsDocs} />
        </Route>
        <Route path="experimental" component={Experimental}>
          <Route path=":componentName" component={ExperimentalDocs} />
        </Route>
        <Route path="gettingStarted" component={GettingStarted} />
      </Route>
      <Route path="/dialogLayout" component={DialogLayoutDemo} />
      <Route
        path="/submittingDialogLayout"
        component={SubmittingDialogLayoutDemo}
      />
      <Route
        path="/noButtonDialogLayout"
        component={NoButtonDialogLayoutDemo}
      />
      <Route path="/wideDialogLayout" component={WideDialogLayoutDemo} />
      <Route path="/topNavDemo1" component={TopNavCodeSnippet1} />
      <Route path="/topNavDemo2" component={TopNavCodeSnippet2} />
      <Route path="/topNavDemo3" component={TopNavCodeSnippet3} />

    </Router>
  </Provider>,
  document.getElementById('root')
);
