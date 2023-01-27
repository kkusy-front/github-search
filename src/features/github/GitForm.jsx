import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../../compontents/Alert';

import getUser from './githubAPI';
import { closeAlert, getUserData } from './githubSlice';

const GitForm = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector(getUserData);
  const [login, setLogin] = useState('');
  const [errorInput, setError] = useState(false);

  // const dispatch = useDispatch();

  const fetchUser = () => {
    !login ? setError(true) : dispatch(getUser({ login }));
  };

  const onChange = (e) => {
    setLogin(e.target.value);
  };

  const handleClose = () => {
    setError(false);
  };

  return (
    <>
      {errorInput ? (
        <Alert status='error' text='Pole login nie może być puste' handleClose={handleClose} />
      ) : null}
      {error ? (
        <Alert
          status='error'
          text='Taki użytkownik nieistnieje'
          handleClose={() => dispatch(closeAlert())}
        />
      ) : null}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchUser();
        }}
        className='github__form'
      >
        <input
          type='text'
          className='github__form-input'
          value={login}
          onChange={(e) => onChange(e)}
          placeholder='Login'
        />
        <button type='submit' className='github__form-btn'>
          Wyślij {loading ? 'ładuje...' : null}
        </button>
      </form>
    </>
  );
};

export default GitForm;
