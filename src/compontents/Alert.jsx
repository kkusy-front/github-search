import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const Alert = ({ status, text, handleClose }) => {
  return (
    <>
      <div className={'alert alert-' + status}>
        <div className='info__wrapper'>
          <div className='icon__wrapper'>
            <FiAlertTriangle />
          </div>
          <p>{text}</p>
        </div>
        {handleClose ? <AiOutlineClose className='close' onClick={handleClose} /> : null}
      </div>
    </>
  );
};

export default Alert;
