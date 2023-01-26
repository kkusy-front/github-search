import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { calculate } from './factorialSlice';

const FactForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const letCalculate = () => {
    dispatch(calculate(value));
  };

  const onChange = useCallback((e) => {
    const result = e.target.value.replace(/\D/g, '');
    setValue(result);
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          letCalculate();
        }}
      >
        <input type='text' value={value} onChange={(e) => onChange(e)} />
        <button type='submit'>Oblicz</button>
      </form>
    </>
  );
};

export default FactForm;
