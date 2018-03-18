import {combineReducers} from 'redux';

import ajaxCallsInProgress from './ajaxStatusReducer';
import events from './eventsReducer';
import event from './eventReducer';
import loadingEvents from './loadingEventsReducer';
import categories from './categoriesReducer';
import locations from './locationsReducer';
import searchForm from './searchFormReducer';

const rootReducer = combineReducers({
    events,
    event,
    loadingEvents,
    ajaxCallsInProgress,
    categories,
    locations,
    searchForm
});

export default rootReducer;