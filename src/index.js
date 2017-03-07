import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'mobx-react';

import App from './components/App';
import Browse from './components/Browse';
import Login from './components/Login';
import Timetable from './components/Timetable';

import * as stores from './stores';

import 'grommet/scss/vanilla/index.scss';
import './styles/index.css';

ReactDOM.render(
  <Provider {...stores}>
    <Router history={browserHistory}>
      <Route path='/' component={App}> // some header (where user logged in or not)
        <IndexRoute component={Browse}/> // the main page here
        <Route path="login" component={Login} />
        <Route path="timetable/:group" component={Timetable} /> // user found his group or logged in
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
