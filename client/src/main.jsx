import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';

import PageInfos from './components/page/pageinfos/PageInfos';

import Project from './components/projects/Project';
import PageVideos from './components/page/pageVideos/PageVideos';
import PageLoginRegister from './components/page/pageLogin/PageLoginRegister';
import About from './components/about/About';
import Socials from './components/socials/Socials';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <PageInfos /> },
      { path: '/about', element: <About /> },
      { path: '/projects', element: <Project /> },
      { path: '/videos', element: <PageVideos /> },
      { path: '/admin', element: <PageLoginRegister /> },
      { path: '/contact', element: <Socials /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
