import React from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import {PropTypes} from 'prop-types';

const Header = ({loading}) => {
    return (<header>
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
        
          <a className="navbar-brand" href="#">Everest Events</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <IndexLink to="/" class="nav-link" activeClassName="active nav-link">Home</IndexLink>
            {loading && <LoadingDots interval={100} dots={20} />}

              </li>
            </ul>
          </div>
        </nav>
      </header>);
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;