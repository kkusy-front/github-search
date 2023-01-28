import React from 'react';
import { useSelector } from 'react-redux';
import { getUserRepos } from './githubSlice';
import GitRepo from './GitRepo';

const GitRepos = () => {
  const repos = useSelector(getUserRepos);

  return (
    <>
      <section className='github__repos'>
        {repos.data.map((repo) => (
          <GitRepo
            key={repo.id}
            id={repo.id}
            title={repo.name}
            desc={repo.description}
            lang={repo.language}
            date={repo.updated_at}
            autor={repo.owner.login}
          />
        ))}
      </section>
    </>
  );
};

export default GitRepos;
