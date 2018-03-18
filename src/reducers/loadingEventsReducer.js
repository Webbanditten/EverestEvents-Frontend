import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function loadingEvents(state = initialState.loadingEvents, action) {
    if(action.type == types.BEGIN_LOADING_EVENTS) {
        return true;
    }else if(action.type == types.AJAX_CALL_ERROR || types.SUCCESS_LOADING_EVENTS) {
        return false;
    }
    return state;
}