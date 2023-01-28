import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import GitForm from './GitForm';
import { clearState } from './githubSlice';
import GitRepos from './GitRepos';

const Github = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  return (
    <div className='github'>
      <GitForm />
      <GitRepos />
    </div>
  );
};

export default Github;
