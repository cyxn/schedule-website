import fetch from 'isomorphic-fetch';

import {
  REQUEST_GROUPS, RECEIVE_GROUPS,
  REQUEST_SCHEDULE, RECEIVE_SCHEDULE,
  RECIEVE_WRONG_GROUP
 } from '../constants/ActionTypes';

 function receiveEmptyGroupsList() {
   return {
     type: RECEIVE_GROUPS,
     searchResult: []
   }
 }

export function fetchGroups(queryString) {

  if (queryString.length === 0) receiveEmptyGroupsList()

  const link = `http://api.rozklad.org.ua/v2/groups/?search={'query':'${queryString}'}`;
  return dispatch => {
    dispatch({
      type: REQUEST_GROUPS
    });
    return fetch(link)
      .then(response => {
        if (response.status >= 400)
          throw new Error('group not found');
        return response.json()
      })
      .then(json => dispatch(receiveGroups(json)))
      .catch(error => dispatch(receiveEmptyGroupsList()))
  }
}

function receiveGroups(json) {
  return {
    type: RECEIVE_GROUPS,
    searchResult: json.data
  }
}

export function fetchSchedule(group) {
  const link = `http://api.rozklad.org.ua/v2/groups/${group}/timetable`;
  return dispatch => {
    dispatch({
      type: REQUEST_SCHEDULE
    });
    return fetch(link)
      .then(response => {
        if (response.status >= 400)
          throw new Error('group not found');
        return response.json()
      })
      .then(json => dispatch(receiveSchedule(json)))
      .catch(error => dispatch({
        type: RECIEVE_WRONG_GROUP
      }))
  }
}

function receiveSchedule(json) {
  return {
    type: RECEIVE_SCHEDULE,
    result: json.data
  }
}
