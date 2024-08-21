import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Nav from './components/Nav';
import './assets/scss/main.scss';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './pages/Portfolio';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/portfolio",
    element: <Portfolio />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)