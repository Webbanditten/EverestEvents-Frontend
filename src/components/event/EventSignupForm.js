import React from "react";
import {PropTypes} from "prop-types";
import moment from "moment";
import {Link} from "react-router";
import TextInput from "../common/TextInput";
import Message from "../common/Message";

const EventSignupForm = ({signupForm, onSave, onChange, saving, errors, cancelSignup}) => {
    return (
        <div className="col-md-12">
            <div className="card mb-12 box-shadow">
                <div className="card-body">
                    <h5 className="card-title">Signup to event</h5>
                    <div className="card-text">
                        <TextInput placeholder="Your name" label="Name" name="name" value={signupForm.name} onChange={onChange} error={errors.name} />
                        <TextInput placeholder="Your email" label="Email" name="email" value={signupForm.email} onChange={onChange} error={errors.email} />
                        <TextInput placeholder="Your phonenumber" label="Phone number" name="phonenumber" value={signupForm.phonenumber} onChange={onChange} error={errors.phonenumber} />
                        <input style={{width: "100%"}}
                            type="submit"
                            disabled={saving}
                            value={saving ? "Signing up..." : "Signup"}
                            className="btn btn-primary"
                            onClick={onSave}/>
                         {signupForm.signedUp &&
                            <Message text=
                            {
                            <p>You are already signed up! To cancel your participation, click <button type="button" onClick={cancelSignup} className="btn btn-primary">here</button></p>
                            } type="warning" />
                        }
                    </div>
                </div>
            </div>
        </div>
        
    );
};

EventSignupForm.propTypes = {
    signupForm: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object,
    cancelSignup: PropTypes.func.isRequired
};

export default EventSignupForm;