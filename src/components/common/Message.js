import React from 'react';
import {PropTypes} from 'prop-types';

const Message = ({text, type}) => {
    if(type === null) 
      type = 'primary';
    
    return (
    <div className={'alert alert-' + type} role="alert">
    {text}
    </div>
    );
};

Message.propTypes = {
  text: PropTypes.object,
  type: PropTypes.string
};

export default Message;