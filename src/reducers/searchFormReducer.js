import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function searchFormReducer(state = initialState.searchForm, action) {
  switch (action.type) {
    case types.UPDATE_SEARCHFORM:
      return action.searchForm;
    default:
      return state;
  }
}