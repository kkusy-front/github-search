import React from 'react';
import { Outlet } from 'react-router-dom';

import './main.scss';

import Footer from './compontents/Footer';
import Header from './compontents/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main-content'>
        <div className='main-content__outlet'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;