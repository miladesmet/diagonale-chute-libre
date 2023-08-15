import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Accueil from './screens/Accueil';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
        <header>
          <nav>
            <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
              Accueil
            </NavLink>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>

        <Footer/>
    </Router>
  );
};

export default App;