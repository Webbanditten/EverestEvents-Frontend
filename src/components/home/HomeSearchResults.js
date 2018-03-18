import React from 'react';
import {PropTypes} from 'prop-types';
import moment from 'moment';
import {Link} from 'react-router';

const HomeSearchResults = ({event}) => {
    return (
        <div className="col-md-4">
            <Link to={'/event/' + event.id} className="card mb-4 box-shadow">
                <img className="card-img-top" alt="Thumbnail [100%x225]" style={{height: 225, width: '100%', display: 'block'}} src={event.image} data-holder-rendered="true" />
                <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{moment(event.time).format("lll")}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{event.address}, {event.postalCode} {event.city}</small>
                    </div>
                </div>
            </Link>
        </div>
        
    );
};

HomeSearchResults.propTypes = {
    event: PropTypes.object.isRequired
};

export default HomeSearchResults;