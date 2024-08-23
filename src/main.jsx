import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Layout from './pages/Layout';
import './assets/scss/main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);