import React from 'react';
import {PropTypes} from 'prop-types';
import HomeSearchResults from './HomeSearchResults';
import Loading from '../common/Loading';

const HomeSearchResultList = ({events, loading}) => {
    return (
        <div className="row">
            {loading ? <Loading marginTop={100} /> : 

            events.map((event) => {
                return <HomeSearchResults key={event.id} event={event} />;
            })
            }
            
        </div>
    );
};

HomeSearchResultList.propTypes = {
    events: PropTypes.array.isRequired,
    loading: PropTypes.bool
};

export default HomeSearchResultList;
