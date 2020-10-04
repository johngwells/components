import React from 'react';

const Message = ({header, text}) => {
  return (
    <div className='ui message'>
      <div className='header'>{header}</div>
      <p>{text}</p>
    </div>
  );
};

export default Message;
