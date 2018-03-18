import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function event(state = initialState.event, action) {
  switch (action.type) {
    case types.LOAD_EVENT_SUCCESS:
      return action.event;
    default:
      return state;
  }
}