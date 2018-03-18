import React from "react";
import {PropTypes} from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

const HomeSearchForm = ({onSubmit, categories, locations, searchForm, onChange, onFromDateChange, onToDateChange}) => {
    return (
        <form>
            <div className="form-row">
            <div className="form-group col-md-3">
                <label htmlFor="category">Categories</label>
                <select value={searchForm.category} id="category" name="category" onChange={onChange} className="form-control">
                <option value="" defaultValue>Choose category</option>
                {
                    categories.map((category) => {
                        return <option key={category.id} value={category.id}>{category.name}</option>;
                    })
                }
                </select>
            </div>
            <div className="form-group col-md-3">
                <label htmlFor="location">Locations</label>
                <select value={searchForm.location} id="location" name="location" onChange={onChange} className="form-control">
                <option value="" defaultValue>Choose location</option>
                {
                    locations.map((location) => {
                        return <option key={location} value={location}>{location}</option>;
                    })
                }
                </select>
            </div>
            <div className="form-group col-md-2">
                <label htmlFor="fromDate">From Date</label>
                <DatePicker minDate={moment()} selected={searchForm.fromDate} id="fromDate" onChange={onFromDateChange} className="form-control"  />
            </div>
            <div className="form-group col-md-2">
                <label htmlFor="toDate">From Date</label>
                <DatePicker minDate={searchForm.fromDate} selected={searchForm.toDate}  id="toDate" onChange={onToDateChange} className="form-control" />
            </div>
            <div className="form-group col-md-2">
                <label htmlFor="search">&nbsp;</label>
                <button type="submit" id="search" onClick={onSubmit} className="btn btn-primary form-control">Search</button>
            </div>
            </div>
        </form>
    );
};

HomeSearchForm.propTypes = {
    onToDateChange: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    locations: PropTypes.arrayOf(PropTypes.string).isRequired,
    searchForm: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onFromDateChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func
};

export default HomeSearchForm;