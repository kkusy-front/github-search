import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../../compontents/Alert';

import { ImSpinner } from 'react-icons/im';
import { AiOutlineClose } from 'react-icons/ai';

import { clearState, closeAlert, getUserRepos } from './githubSlice';

import githubUsernameRegex from 'github-username-regex';
import { fetchRepos } from './githubAPI';

const GitForm = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector(getUserRepos);
  const [login, setLogin] = useState('');
  const [errorInput, setError] = useState(false);
  const inputRef = useRef(null);

  // const dispatch = useDispatch();

  const fetchUser = () => {
    githubUsernameRegex.test(login)
      ? !login
        ? setError(true)
        : dispatch(fetchRepos({ login }))
      : setError(true);
  };

  const onChange = (e) => {
    setLogin(e.target.value);
  };

  const handleResetInput = () => {
    setLogin('');
    dispatch(clearState());
    inputRef.current?.focus();
  };

  const handleClose = () => {
    setError(false);
  };

  return (
    <>
      {errorInput ? (
        <Alert status='error' text='Sprawdź poprawność danych' handleClose={handleClose} />
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
        <div className='github__form-group'>
          <input
            ref={inputRef}
            type='text'
            className='github__form-group-input'
            value={login}
            onChange={(e) => onChange(e)}
            placeholder='Login'
          />
          {login ? (
            <span className='github__form-group-delete' onClick={handleResetInput}>
              {' '}
              <AiOutlineClose />
            </span>
          ) : null}
        </div>

        <button type='submit' className='github__form-btn'>
          Wyślij {loading ? <ImSpinner className='loader' /> : null}
        </button>
      </form>
    </>
  );
};

export default GitForm;
