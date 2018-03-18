import React from "react";
import {PropTypes} from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import HomeSearchForm from "./HomeSearchForm";
import HomeSearchResultList from "./HomeSearchResultList";
import * as eventActions from "../../actions/eventActions";
import moment from "moment";
import Message from "../common/Message";
import loadingEvents from "../../reducers/loadingEventsReducer";

class HomePage extends React.Component {
    
    constructor(props, context) {
        super(props, context);

        this.props.actions.loadEvents();

        this.updateSearchForm = this.updateSearchForm.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onFromDateChange = this.onFromDateChange.bind(this);
        this.onToDateChange = this.onToDateChange.bind(this);
    }
    updateSearchForm(event) {
        const field = event.target.name;
        let searchForm = Object.assign({}, this.props.searchForm);
        searchForm[field] = event.target.value;
        return this.props.actions.updateSearchForm(searchForm);
    }
    onFromDateChange(date){ 
        let searchForm = Object.assign({}, this.props.searchForm);
        searchForm.fromDate = date;
        this.props.actions.updateSearchForm(searchForm); 
    }
    onToDateChange(date){ 
        let searchForm = Object.assign({}, this.props.searchForm);
        searchForm.toDate = date;
        this.props.actions.updateSearchForm(searchForm); 
    }
    onSearch(event) {
        event.preventDefault();
        let searchForm = Object.assign({}, this.props.searchForm);
        this.props.actions.searchEvents(searchForm.category, searchForm.location, moment(searchForm.fromDate).toDate(), moment(searchForm.toDate).toDate());
    }


    render() {
        
        return (
            <div className="main-container container">
                <section className="jumbotron search text-center">
                        <HomeSearchForm onSubmit={this.onSearch} onChange={this.updateSearchForm} onFromDateChange={this.onFromDateChange} onToDateChange={this.onToDateChange} searchForm={this.props.searchForm} locations={this.props.locations} categories={this.props.categories} />
                </section>
                {(this.props.events.length <= 0 && !this.props.loadingEvents) && <Message text={"Doesnt seem like any events was found for those search criterias. Try editing the search parameters and try again!"} type="info" />}
                
                <HomeSearchResultList events={this.props.events} loading={this.props.loadingEvents} />
            </div>
        );
    }
}

HomePage.propTypes = {
    events: PropTypes.arrayOf(PropTypes.object),
    searchForm: PropTypes.object,
    loadingEvents: PropTypes.bool,
    locations: PropTypes.arrayOf(PropTypes.string),
    categories: PropTypes.arrayOf(PropTypes.object),
    params: PropTypes.object,
    actions: PropTypes.object
};

// Redux related functions 
function mapStateToProps(state, ownProps) {
    return {
        events: state.events,
        categories: state.categories,
        locations: state.locations,
        loadingEvents: state.loadingEvents,
        searchForm: state.searchForm
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(eventActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);