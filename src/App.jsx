import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.scss';

import AOS from 'aos';

// import Home from './pages/Home';
// import UnderConstruction from './pages/UnderConstruction';
// import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import DonatePage from './pages/DonatePage';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/donate" element={<DonatePage />} />
      </Routes>
    </>
  );
}

export default App;
