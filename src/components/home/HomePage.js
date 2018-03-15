import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import swal from 'sweetalert2';
import HomeSearchForm from './HomeSearchForm';
import HomeSearchResults from './HomeSearchResults';

class HomePage extends React.Component {
    
    constructor(props, context) {
        super(props, context);

        this.state = {

        };

    }


    render() {
        
        return (
            <div className="main-container container">
                <section className="jumbotron search text-center">
                        <HomeSearchForm />
                </section>
                <div className="row">
                    <HomeSearchResults image="https://loremflickr.com/300/225/breakfast" eventId="3" title="Breakfast" time="03/25/2018 10:10" location="Kløvervej 22E, 7190 Billund" />
                </div>
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