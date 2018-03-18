import React from 'react';
import { Link, IndexLink } from 'react-router';
import {PropTypes} from 'prop-types';

const Header = () => {
    return (<header>
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
        
          <a className="navbar-brand" href="#">Everest Events</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <IndexLink to="/" className="nav-link" activeClassName="active nav-link">Home</IndexLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>);
};

export default Header;