import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createLogger from 'redux-logger';
import { reactReduxFirebase } from 'react-redux-firebase'

import fbConfig from './config';
import rootReducer from './reducers/index';

let history

export default function configureStore(initialState) {
  const logger = createLogger();
  const createStoreWithMiddleware = compose(
    reactReduxFirebase(fbConfig, {
      userProfile: 'users',
      enableLogging: false
    }),
  )(createStore);
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      logger
    )
  )
  history = syncHistoryWithStore(browserHistory, store);
  return store;
}

export { history };
