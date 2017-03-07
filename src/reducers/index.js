import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import groups from './groups';
import schedule from './schedule';

export default combineReducers({
  firebase: firebaseStateReducer,
  groups,
  schedule,
  routing: routerReducer
})
