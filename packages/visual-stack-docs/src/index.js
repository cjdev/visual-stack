import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer as vsReducer } from '@cjdev/visual-stack-redux';
import '@cjdev/visual-stack/lib/global';

import App from './containers/App/';
import Home from './containers/Home/';
import Components from './containers/Components/';
import ComponentDocs from './containers/Components/Docs/';
import Icons from './containers/Icons/';
import Layouts from './containers/Layouts/';
import DesignSystem from './containers/DesignSystem/';
import Forms from './containers/Forms/';
import DevPortal from './containers/DevPortal/';
import './index.css';

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
        <Route path="icons" component={Icons}/>
        <Route path="layouts" component={Layouts}/>
        <Route path="design-system" component={DesignSystem}/>
        <Route path="forms" component={Forms}/>
        <Route path="dev-portal" component={DevPortal}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
