import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import 'normalize.css';

import Github from './features/github/Github';
import Factorial from './features/factorial/Factorial';

const container = document.getElementById('root');
const root = createRoot(container);

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/github',
//         element: <Github />,
//       },
//       {
//         path: '/factorial',
//         element: <Factorial />,
//       },
//     ],
//   },
// ]);

root.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route exatc path='/' element={<App />}>
          <Route path='github' element={<Github />} />
          <Route path='factorial' element={<Factorial />} />
        </Route>
      </Routes>
    </HashRouter>
  </Provider>,
);
