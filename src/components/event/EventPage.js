import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class EventPage extends React.Component {
    
    constructor(props, context) {
        super(props, context);

        this.state = {

        };

    }

    render() {
        
        return (
            <div className="main-container container">
                <h1>Event!</h1>
            </div>
        );
    }
}

EventPage.propTypes = {

};

// Redux related functions 
function mapStateToProps(state, ownProps) {
    return;
}

function mapDispatchToProps(dispatch) {
    return;
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);