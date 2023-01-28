import React from 'react';
import { Outlet, useOutlet, Navigate } from 'react-router-dom';

import './assets/scss/main.scss';

import Footer from './compontents/Footer';
import Header from './compontents/Header';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const outlet = useOutlet();
  return (
    <div className='App'>
      <Header />
      <main className='main-content'>
        <div className='main-content__outlet'>
          {outlet ? <Outlet /> : <Navigate to='assumptions' />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
