import { REQUEST_SCHEDULE, RECEIVE_SCHEDULE, RECIEVE_WRONG_GROUP } from '../constants/ActionTypes';

const initialState = {
  schedule: {},
  isFetching: false,
  notFound: false
}

export default function schedule(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SCHEDULE:
      return {...state, isFetching: true};
    case RECIEVE_WRONG_GROUP:
      return {...state, isFetching: false, notFound: true}
    case RECEIVE_SCHEDULE:
      return Object.assign({}, state, {
        schedule: action.result,
        isFetching: false,
        notFound: false
      })
    default:
      return state;
  }
}
