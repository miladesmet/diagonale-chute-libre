import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { routes } from './utils/routes'

const App = () => (
  <Router>
    <Header routes={routes} />

    <Routes>
      {routes.map((route, i) => (
        <Route key={i} path={route.path} element={route.element} />
      ))}
    </Routes>

    <Footer />
  </Router>
)

export default App
