import {combineReducers} from 'redux';

import ajaxCallsInProgress from './ajaxStatusReducer';
import events from './eventsReducer';
import event from './eventReducer';
import loadingEvents from './loadingEventsReducer';

const rootReducer = combineReducers({
    events,
    event,
    loadingEvents,
    ajaxCallsInProgress
});

export default rootReducer;