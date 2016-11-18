import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import '../../lib/global';
import './index.css';

import App from './App';
import Button from './components/Button';

const Home = () => <div>HOME</div>;
const About = () => <div>ABOUT</div>;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="components/" component={Button}>
        <Route path="button" component={Button} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);

