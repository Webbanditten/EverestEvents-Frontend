import React from "react";
import {PropTypes} from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import EventSignupForm from "./EventSignupForm";
import * as eventActions from "../../actions/eventActions";
import moment from "moment";
import Message from "../common/Message";

class EventPage extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            signupForm: {eventId: this.props.params.eventId, name:"", email:"", phonenumber:"", signedUp:false},
            errors: {},
            saving: false,
            signupSuccess: false,
            cancelSignupSuccess: false
        };
        
        if(this.props.event.id != this.props.params.eventId) {
            this.props.actions.loadEvent(this.props.params.eventId);
        }

        this.saveSignupForm = this.saveSignupForm.bind(this);
        this.updateSignupForm = this.updateSignupForm.bind(this);
        this.cancelSignup = this.cancelSignup.bind(this);
    }

    cancelSignup(event) {
        this.props.actions.cancelSignup(this.state.signupForm)
            .then(() => {
                let signupForm = Object.assign({}, this.state.signupForm);
                signupForm.signedUp = false;
                this.setState({signupForm});
                this.setState({signupSuccess: false});
                this.setState({cancelSignupSuccess: true});
            }).catch(error => {
            alert("Something really unexpected happened: " + error);
        });
    }

    updateSignupForm(event) {
        const field = event.target.name;
        let signupForm = Object.assign({}, this.state.signupForm);
        signupForm[field] = event.target.value;
        return this.setState({signupForm});
    }
    
    signupFormIsValid() {
        let formIsValid = true;
        let errors = {};
        
        if (this.state.signupForm.name.length < 1) {
            errors.name = "Place enter name";
            formIsValid = false;
        }else if (this.state.signupForm.email.length < 1) {
            errors.email = "Place enter email";
            formIsValid = false;
        }else if (this.state.signupForm.phonenumber.length < 1) {
            errors.phonenumber = "Place enter phonenumber";
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }
    
    saveSignupForm(event) {
        event.preventDefault();

        if (!this.signupFormIsValid()) {
            return;
        }

        this.setState({saving: true});
        this.props.actions.signup(this.state.signupForm)
            .then(() => {
                this.setState({signupSuccess: true});
                this.setState({cancelSignupSuccess: false});
                this.setState({saving: false});
            }).catch(error => {
            this.setState({signupForm: error});
            this.setState({signupSuccess: false});
            this.setState({cancelSignupSuccess: false});
            this.setState({saving: false});
        });
    }

    render() {
        
        return (
            <div className="main-container additionalMargin container">
                 {this.props.ajaxCallsInProgress <= 0 && 
                    <div className="row">
                    <div className="col-md-8">
                        <div className="card box-shadow">
                            <img className="card-img-top" style={{height: "300px"}} src={this.props.event.imageLarge} alt={this.props.event.title} />
                            <div className="card-body">
                            <h5 className="card-title">{this.props.event.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{moment(this.props.event.time).format("lll")}</h6>
                            <p className="card-text">{this.props.event.description}</p>

                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted">{this.props.event.address}, {this.props.event.postalCode} {this.props.event.city}</small>
                            </div>
                            </div>
                        </div>
                    
                    </div>
                    <div className="col-md-4 mb-4">{this.state.signupSuccess}
                        {(!this.state.signupSuccess && this.state.cancelSignupSuccess) && <Message text="Your participation has now been cancelled" type="info" />}
                        {this.state.signupSuccess &&  <Message text={"You are now signed up!"} type="success" />}
                        <EventSignupForm cancelSignup={this.cancelSignup} signupForm={this.state.signupForm} onChange={this.updateSignupForm} onSave={this.saveSignupForm} errors={this.state.errors} saving={this.state.saving} />
                       
                        
                    </div>
                    </div>
                }
            </div>
        );
    }
}

EventPage.propTypes = {
    actions: PropTypes.object,
    event: PropTypes.object,
    signupForm: PropTypes.object,
    params: PropTypes.object,
    ajaxCallsInProgress: PropTypes.number,
    signupSuccess: PropTypes.bool,
    cancelSignupSuccess: PropTypes.bool
};


// Redux related functions  
function mapStateToProps(state, ownProps) {
    return {
        event: state.event,
        ajaxCallsInProgress: state.ajaxCallsInProgress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(eventActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);