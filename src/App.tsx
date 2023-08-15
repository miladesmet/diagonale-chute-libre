import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Accueil } from './screens/Accueil';
import { Footer } from './components/Footer';
import { Shop } from './screens/Shop'
import { ArticleDetail } from './components/ArticleDetail'

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
              <NavLink to="/boutique" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                  Boutique
              </NavLink>
            <br />
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/boutique" element={<Shop />} />
          <Route path="/boutique/:id" element={<ArticleDetail  />} />
        </Routes>

        <Footer/>
    </Router>
  );
};

export default App;