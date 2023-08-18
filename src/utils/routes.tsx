import React from 'react'
import Accueil from '../screens/Accueil'
import Shop from '../screens/Shop'
import Tandem from '../screens/Tandem'

const routes = [
  { path: '/', title: 'Accueil', element: <Accueil /> },
  { path: '/boutique', title: 'Boutique', element: <Shop /> },
  { path: '/galerie', title: 'Galerie photo', element: <>ToDo</> },
  { path: '/panier', title: 'Panier d’achat', element: <>ToDo</> },
  { path: '/tandem', title: 'Tandem', element: <Tandem/> },
]

export { routes }
