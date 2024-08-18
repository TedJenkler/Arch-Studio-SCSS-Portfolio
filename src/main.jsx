import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Nav from './components/Nav';
import './assets/scss/main.scss';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Home />
    <Footer />
  </React.StrictMode>,
)
