import EventsApi from '../api/mockEventsApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function loadEventsSuccess(events) {
  return {type: types.SUCCESS_LOADING_EVENTS, events};
}

export function loadEventSuccess(event) {
  return {type: types.LOAD_EVENT_SUCCESS, event};
}

export function beginLoadingEvents(event) {
    return {type: types.BEGIN_LOADING_EVENTS};
}

export function loadCategoriesSuccess(categories ) {
  return {type: types.LOAD_CATEGORIES_SUCCESS, categories};
}

export function loadLocationsSuccess(locations) {
  return {type: types.LOAD_LOCATIONS_SUCCESS, locations};
}

// Functions below handle asynchronous calls.
// Each returns a function that accepts a dispatch.
// These are used by redux-thunk to support asynchronous interactions.
export function updateSearchForm(searchForm) {
  return function (dispatch) {
    return dispatch({type: types.UPDATE_SEARCHFORM, searchForm});
  };
}

export function loadCategories() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return EventsApi.getCategories().then(categories => {
      dispatch(loadCategoriesSuccess(categories));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadLocations() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return EventsApi.getLocations().then(locations => {
      dispatch(loadLocationsSuccess(locations));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadEvents() {
  return function (dispatch) {
    dispatch(beginLoadingEvents());
    return EventsApi.getEvents().then(events => {
      dispatch(loadEventsSuccess(events));
    }).catch(error => {
      throw(error);
    });
  };
}

export function searchEvents(category, location, fromDate, toDate) {
  return function (dispatch) {
    dispatch(beginLoadingEvents());
    return EventsApi.getEvents(category, location, fromDate, toDate).then(events => {
      dispatch(loadEventsSuccess(events));
    }).catch(error => {
      throw(error);
    });
  };
}


export function loadEvent(id) {
    return function (dispatch) {
      dispatch(beginAjaxCall());
      return EventsApi.getEvent(id).then(event => {
        dispatch(loadEventSuccess(event));
      }).catch(error => {
        throw(error);
      });
    };
}

export function signup(signupForm) {
  return function (dispatch) {
    return EventsApi.signup(signupForm).then(signupForm => {
      return signupForm;
    }).catch(error => {
        throw(error);
    });
  };
}
export function cancelSignup(signupForm) {
  return function (dispatch) {
    return EventsApi.cancelSignup(signupForm).then(signupForm => {
      return signupForm;
  }).catch(error => {
      throw(error);
  });
  };
}