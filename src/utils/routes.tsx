import React from 'react'
import Accueil from '../screens/Accueil'
import { Shop } from '../screens/Shop'
import {FAQ} from '../screens/FAQ'
import {ArticleDetail} from '../components/ArticleDetail'
import Cart from '../screens/Cart'

const routes = [
  { path: '/', title: 'Accueil', element: <Accueil /> },
  { path: '/boutique', title: 'Boutique', element: <Shop /> },
  { path: '/galerie', title: 'Galerie photo', element: <>ToDo</> },
  { path: '/panier', title: 'Panier d’achat', element: <Cart /> },
  { path: '/faq', title: 'FAQ', element: <FAQ/> },
  { path: '/boutique/:id', element: <ArticleDetail/> },
]

export { routes }
