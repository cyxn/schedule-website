import { REQUEST_SCHEDULE, RECEIVE_SCHEDULE, RECIEVE_WRONG_GROUP } from '../constants/ActionTypes';

const initialState = {
  schedule: {},
  dataReady: false,
  notFound: false
}

export default function schedule(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SCHEDULE:
      return {...state, dataReady: false};
    case RECIEVE_WRONG_GROUP:
      return {...state, dataReady: true, notFound: true}
    case RECEIVE_SCHEDULE:
      return Object.assign({}, state, {
        schedule: action.result,
        dataReady: true,
        notFound: false
      })
    default:
      return state;
  }
}
