import React from 'react'
import Accueil from '../screens/Accueil'
import { Shop } from '../screens/Shop'
import {FAQ} from '../screens/FAQ'
import {ArticleDetail} from '../components/ArticleDetail'

const routes = [
  { path: '/', title: 'Accueil', element: <Accueil /> },
  { path: '/boutique', title: 'Boutique', element: <Shop /> },
  { path: '/galerie', title: 'Galerie photo', element: <>ToDo</> },
  { path: '/panier', title: 'Panier d’achat', element: <>ToDo</> },
  { path: '/FAQ', title: 'FAQ', element: <FAQ/> },
  { path: '/boutique/:id', element: <ArticleDetail/> },
]

export { routes }
