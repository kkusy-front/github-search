import React, { useState } from 'react';

import { MdArrowRight, MdArrowDropDown } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { getCommits } from './githubAPI';

const GitCommits = ({ title, user }) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(!open);
    if (open) dispatch(getCommits({ user, title }));
  };
  return (
    <>
      <button onClick={handleOpen} tabIndex='0' aria-label={`Pokaż commity dla ${title}`}>
        <span>Commits</span> {open ? <MdArrowDropDown /> : <MdArrowRight />}
      </button>
    </>
  );
};

export default GitCommits;
