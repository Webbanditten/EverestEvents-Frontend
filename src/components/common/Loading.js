import React from 'react';
import {PropTypes} from 'prop-types';

const Loading = ({marginTop}) => {
    return (
      <div className="loading" style={{top: marginTop + 'px'}}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    );
};

Loading.propTypes = {
  marginTop: PropTypes.number
};

export default Loading;