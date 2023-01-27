import React from 'react';
import { Outlet, useOutlet } from 'react-router-dom';

import './assets/scss/main.scss';

import Footer from './compontents/Footer';
import Header from './compontents/Header';
import Github from './features/github/Github';
// import Github from './features/github/Github';
// import Factorial from './features/factorial/Factorial';

function App() {
  const outlet = useOutlet();
  return (
    <div className='App'>
      <Header />
      <main className='main-content'>
        <div className='main-content__outlet'>{outlet ? <Outlet /> : <Github />}</div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
