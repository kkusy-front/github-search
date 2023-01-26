import React from 'react';

import { useSelector } from 'react-redux';
import { getFactorials } from './factorialSlice';

import FactTable from './FactTable';
import FactForm from './FactForm';

const Factorial = () => {
  const factorials = useSelector(getFactorials);

  return (
    <div>
      <FactForm />
      <FactTable facts={factorials} />
    </div>
  );
};

export default Factorial;
