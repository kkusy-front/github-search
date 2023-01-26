import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './app.scss';

import Footer from './compontents/footer/Footer';
import Header from './compontents/header/Header';
import Github from './features/github/Github';
import Silnia from './features/silnia/Silnia';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Github />,
      children: [
        {
          path: 'github',
          element: <Github />,
        },
        {
          path: 'silnia',
          element: <Silnia />,
        },
      ],
    },
  ]);

  return (
    <div className='App'>
      <Header />
      <main className='main-content'>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
