import React from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import {PropTypes} from 'prop-types';

const Header = ({loading}) => {
    return ( 
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {loading && <LoadingDots interval={100} dots={20} />}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;