import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HomeSearchForm from './HomeSearchForm';
import HomeSearchResultList from './HomeSearchResultList';
import * as eventActions from '../../actions/eventActions';

class HomePage extends React.Component {
    
    constructor(props, context) {
        super(props, context);
    }


    render() {
        
        return (
            <div className="main-container container">
                <section className="jumbotron search text-center">
                        <HomeSearchForm locations={[]} categories={[]} />
                </section>
                <HomeSearchResultList events={this.props.events} loading={this.props.loadingEvents} />
            </div>
        );
    }
}

HomePage.propTypes = {
    events: PropTypes.arrayOf(PropTypes.object),
    loadingEvents: PropTypes.bool
};

// Redux related functions 
function mapStateToProps(state, ownProps) {
    return {
        events: state.events,
        loadingEvents: state.loadingEvents
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(eventActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);