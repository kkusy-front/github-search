import React, { useState } from 'react';

import { ImSpinner } from 'react-icons/im';
import { MdArrowDropDown, MdArrowRight } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { getCommits } from './githubAPI';

const GitCommits = ({ title, user }) => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(!open);
    if (!open) {
      setLoading(true);
      dispatch(getCommits({ user, title }))
        .then((res) => {
          return res.payload.data;
        })
        .then((res) => {
          setData(res);
          setLoading(false);
        });
    }
  };
  return (
    <>
      <div>
        <button tabIndex='0' aria-label={`Pokaż commity dla ${title}`} onClick={handleOpen}>
          <span>Commits</span>
          {open ? <MdArrowDropDown /> : <MdArrowRight />}
        </button>
      </div>
      <div className=''>
        {open ? (
          loading ? (
            <ImSpinner className='loader' />
          ) : data ? (
            data.map((commit, index) => (
              <div className='github__repos-repo-commits-commit' key={index}>
                <div className='github__repos-repo-commits-commit-title'>
                  {commit.commit.message}
                </div>
                <div className='github__repos-repo-commits-commit-link'>
                  <a href={commit.html_url} target='_blank' rel='noreferrer'>
                    Przejdź do commita
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p>Brak</p>
          )
        ) : null}
      </div>
    </>
  );
};

export default GitCommits;
