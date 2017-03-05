import { REQUEST_GROUPS, RECEIVE_GROUPS } from '../constants/ActionTypes';

const initialState = {
  groups: []
}

export default function groups(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GROUPS:
      return {...state, isFetching: true};
    case RECEIVE_GROUPS:
      return {...state, groups: action.searchResult};
    default:
      return state;
  }
}
