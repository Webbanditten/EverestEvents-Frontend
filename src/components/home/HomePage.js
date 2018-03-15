import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class HomePage extends React.Component {
    
    constructor(props, context) {
        super(props, context);

        this.state = {

        };

    }


    render() {
        
        return (
            <div className="jumbotron">
                <h1>Welcome</h1>
            </div>
        );
    }
}

HomePage.propTypes = {

};

// Redux related functions 
function mapStateToProps(state, ownProps) {
    return;
}

function mapDispatchToProps(dispatch) {
    return;
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);