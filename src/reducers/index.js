import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import groups from './groups';
import schedule from './schedule';

export default combineReducers({
  groups,
  schedule,
  routing: routerReducer
})
