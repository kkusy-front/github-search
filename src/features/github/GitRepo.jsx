import React, { useState } from 'react';
import GitCommits from './GitCommits';

const GitRepo = ({ id, title, desc, lang, date, autor }) => {
  const [activeComm, setActiveComm] = useState(null);

  const handleChange = (e) => {
    setActiveComm(e);
  };
  return (
    <>
      <article className='github__repos-repo'>
        <h2 className='github__repos-repo-title'>{title}</h2>
        <div className='github__repos-repo-desc'>{desc ? desc : 'Brak opisu'}</div>
        <div className='github__repos-repo-language'>
          {lang ? lang : 'Język nie został zarejestrowany'}
        </div>
        <div className='github__repos-repo-commits'>
          <GitCommits
            title={title}
            user={autor}
            active={activeComm}
            handleChange={handleChange}
            id={id}
          />
        </div>
        <div className='github__repos-repo-footer'>
          <div className='github__repos-repo-footer-autor'>@{autor}</div>
          <div className='github__repos-repo-footer-date'>Aktualizacja {date.slice(0, 10)}</div>
        </div>
      </article>
    </>
  );
};

export default GitRepo;
