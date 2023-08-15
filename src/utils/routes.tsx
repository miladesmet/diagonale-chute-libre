import React from 'react'
import Accueil from '../screens/Accueil'
import Shop from '../screens/Shop'

const routes = [
  { path: '/', title: 'Accueil', element: <Accueil /> },
  { path: '/shop', title: 'Boutique', element: <Shop /> },
  { path: '/elem2', title: 'Element 2', element: <Accueil /> },
  { path: '/elem3', title: 'Element 3', element: <Accueil /> },
]

export { routes }
