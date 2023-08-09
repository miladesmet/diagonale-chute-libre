import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Accueil } from './screens/Accueil';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <Router>
        <header>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
          <nav>
            <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
              Accueil
            </NavLink>
            <br />
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