import React, { useState, useEffect } from 'react';

import { MdArrowRight, MdArrowDropDown } from 'react-icons/md';
import { ImSpinner } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { getCommits } from './githubAPI';
import { getUserCommits } from './githubSlice';

const GitCommits = ({ title, user }) => {
  const { loading } = useSelector(getUserCommits);

  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoader(loading);
    return () => {
      setLoader(false);
    };
  }, [loading]);

  const handleOpen = () => {
    setOpen(!open);
    if (!open) dispatch(getCommits({ user, title }));
  };
  return (
    <>
      <button onClick={handleOpen} tabIndex='0' aria-label={`Pokaż commity dla ${title}`}>
        <span>Commits</span>{' '}
        {loader ? <ImSpinner className='loader' /> : open ? <MdArrowDropDown /> : <MdArrowRight />}
      </button>
    </>
  );
};

export default GitCommits;
