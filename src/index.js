import React from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker';

import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author='Sam Wise'
        time='3:33'
        text='goblins!'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Froto Baggins'
        time='4:44'
        text='my precious'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Gandalf the Gray'
        time='5:55'
        text='you shall not pass'
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
