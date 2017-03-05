import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createLogger from 'redux-logger';

import rootReducer from './reducers/index';

let history

export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      logger
    )
  );
  history = syncHistoryWithStore(browserHistory, store);
  return store;
}

export { history };
