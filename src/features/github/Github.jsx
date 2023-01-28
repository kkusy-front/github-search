import React from 'react';
import GitForm from './GitForm';
import GitRepos from './GitRepos';

const Github = () => {
  return (
    <div className='github'>
      <GitForm />
      <GitRepos />
    </div>
  );
};

export default Github;
