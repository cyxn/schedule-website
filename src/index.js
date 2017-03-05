import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import configureStore, { history } from './store';
import App from './containers/App';
import Browse from './containers/Browse';
import Login from './containers/Login';
import Schedule from './containers/Schedule';
import 'grommet/scss/vanilla/index.scss';
import './styles/index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}> // some header (where user logged in or not)
        <IndexRoute component={Browse}/> // the main page here
        <Route path="login" component={Login} />
        <Route path="timetable/:group" component={Schedule} /> // user found his group or logged in
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
