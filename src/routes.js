import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import EventPage from "./components/event/EventPage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="event/:eventId" component={EventPage}/>
    </Route>    
);
