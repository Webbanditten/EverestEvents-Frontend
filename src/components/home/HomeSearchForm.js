import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const HomeSearchForm = ({categories, locations, fromDate, toDate, fromDateChange, toDateChange}) => {
    return (
        <form>
            <div className="form-row">
            <div className="form-group col-md-3">
                <label htmlFor="categories">Categories</label>
                <select id="categories" className="form-control">
                <option selected>Choose category</option>
                <option>...</option>
                </select>
            </div>
            <div className="form-group col-md-3">
                <label htmlFor="locations">Locations</label>
                <select id="locations" className="form-control">
                <option selected>Choose location</option>
                <option>...</option>
                </select>
            </div>
            <div className="form-group col-md-2">
                <label htmlFor="fromDate">From Date</label>
                <DatePicker selected={fromDate} id="fromDate" onChange={fromDateChange} className="form-control"  />
            </div>
            <div className="form-group col-md-2">
                <label htmlFor="toDate">From Date</label>
                <DatePicker selected={toDate} id="toDate" onChange={toDateChange} className="form-control" />
            </div>
            <div className="form-group col-md-2">
                <label htmlFor="search">&nbsp;</label>
                <button type="submit" id="search" className="btn btn-primary form-control">Search</button>
            </div>
            </div>
        </form>
    );
};

HomeSearchForm.propTypes = {
    categories: PropTypes.array.isRequired,
    locations: PropTypes.array.isRequired,
    fromDate: PropTypes.string,
    toDate: PropTypes.string,
    fromDateChange: PropTypes.func,
    toDateChange: PropTypes.func
};

export default HomeSearchForm;