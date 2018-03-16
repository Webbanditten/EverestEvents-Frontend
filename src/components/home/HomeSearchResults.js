import React from 'react';
import {PropTypes} from 'prop-types';
import moment from 'moment';
import {Link} from 'react-router';

const HomeSearchResults = ({eventId, image, time, title, location}) => {
    return (
        <div className="col-md-4">
            <Link to={'/event/' + eventId} class="card mb-4 box-shadow">
                <img className="card-img-top" alt="Thumbnail [100%x225]" style={{height: 225, width: '100%', display: 'block'}} src={image} data-holder-rendered="true" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{moment(time).format("lll")}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{location}</small>
                    </div>
                </div>
            </Link>
        </div>
        
    );
};

HomeSearchResults.propTypes = {
    eventId: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(Date).isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
};

export default HomeSearchResults;