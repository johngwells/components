import React from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
      <CommentDetail
        author='Sam Wise'
        time='3:33'
        text='goblins!'
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author='Froto Baggins'
        time='4:44'
        text='my precious'
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author='Gandalf the Gray'
        time='5:55'
        text='you shall not pass'
        avatar={faker.image.avatar()}
      />
      </ApprovalCard>
      <Message header='Changes in Service' text='We updated our privacy policy' />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
