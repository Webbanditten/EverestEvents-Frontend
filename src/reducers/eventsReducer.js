import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function events(state = initialState.events, action) {
  switch (action.type) {
    case types.SUCCESS_LOADING_EVENTS:
      return action.events;
    default:
      return state;
  }
}