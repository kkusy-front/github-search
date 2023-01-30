import React from 'react';
import { useSelector } from 'react-redux';
import Alert from '../../compontents/Alert';
import { getUserRepos } from './githubSlice';
import GitRepo from './GitRepo';

const GitRepos = () => {
  const repos = useSelector(getUserRepos);

  return (
    <>
      <section className='github__repos'>
        {repos.data?.length === 0 ? <Alert status='warrning' text='Brak repozytorium' /> : null}
        {repos.data !== null
          ? repos.data.map((repo) => (
              <GitRepo
                key={repo.id}
                id={repo.id}
                title={repo.name}
                desc={repo.description}
                lang={repo.language}
                date={repo.updated_at}
                autor={repo.owner.login}
              />
            ))
          : null}
      </section>
    </>
  );
};

export default GitRepos;
