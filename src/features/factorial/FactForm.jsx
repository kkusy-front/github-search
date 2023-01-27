import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Alert from '../../compontents/Alert';
import { calculate } from './factorialSlice';

const FactForm = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const letCalculate = () => {
    !value ? setError(true) : dispatch(calculate(value));
  };

  const onChange = (e) => {
    const result = e.target.value.replace(/\D/g, '');
    setValue(result);
  };

  const handleClose = () => {
    setError(false);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          letCalculate();
        }}
        className='factorial__form'
      >
        <input
          type='text'
          className='factorial__form-input'
          value={value}
          onChange={(e) => onChange(e)}
        />
        <button type='submit' className='factorial__form-btn'>
          Oblicz
        </button>
      </form>
      {error ? <Alert status='error' text='Zła wartość silni.' handleClose={handleClose} /> : null}
    </>
  );
};

export default FactForm;
