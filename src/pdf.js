import React from 'react';
import Segment from './Segment';

const PDF = () => {
  return (
    <Segment>
      <div className='ui icon header'>
        <i className='pdf file outline icon'></i>
        No documents are listed for this customer.
      </div>
      <div className='ui primary button'>Add Document</div>
    </Segment>
  );
};

export default PDF;
