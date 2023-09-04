import React, { useEffect, useState } from 'react'
import CartArticle from '../components/CartArticle'
import CartTotal from '../components/CartTotal'
import GoToButton from '../components/GoToButton'
import { fetchData } from '../utils/getData'
import { Booking } from '../types'

const Cart = () => {
  const idCart = 1

  // Liste des réservations de la commande
  const [bookings, setBookings] = useState<Booking[]>([])

  // Etat de chargement des données
  const [loading, setLoading] = useState<boolean>(true)

  // Récupère les données du pannier en fonction de son id
  const fetchCartData = async (id: number) => {
    const cartData = await fetchData('cart/' + id, 'GET', {})

    for (const booking of cartData.Bookings) {
      const articleData = await fetchArticleData(booking.ArticleId)
      setBookings(oldBookings => [...oldBookings, { ...booking, article: articleData }])
    }
    setLoading(false)
  }

  // Récupère les données d'un article en fonction de son id
  const fetchArticleData = async (id: number) => {
    const data = await fetchData('article/' + id, 'GET', {})
    return data
  }

  // Supprime l'article du pannier et met à jour la liste des réservations
  const deleteArticleAndReload = async (id: number) => {
    await fetchData('booking/' + id, 'DELETE')
    setLoading(true)
    setBookings([])
    fetchCartData(idCart)
  }

  useEffect(() => {
    fetchCartData(idCart)
  }, [])

  return (
    <main className="bg-[#F2F4FF] flex flex-col items-center gap-10 p-7 text-[#314A7D]">
      <h1 className="text-5xl font-bold text-center">Panier d'achat</h1>
      {loading ||
        (bookings.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          bookings.map((booking, i) => (
            <CartArticle key={i} booking={booking} deleteArticleAndReload={deleteArticleAndReload} bookingId={booking.id} />
          ))
        ))}
      {loading || <CartTotal bookings={bookings} />}
      <p className="w-full md:w-[60%]">Entrez votre adresse mail. Celle ci sera utilisée pour vous envoyer votre confirmation de commande.</p>
      <div className="flex flex-col gap-2 items-start w-full md:w-[60%] text-xl">
        <label htmlFor="email">Adresse email *</label>
        <input type="email" id="email" className="p-2 border-2 border-solid border-[#314A7D] w-4/5" required />
      </div>
      <div className="flex items-center gap-3 w-full md:w-[60%]">
        <input type="checkbox" id="conditions" className="w-4 h-4" required />
        <label htmlFor="conditions">J’accepte Termes et conditions.</label>
      </div>
      <p className="w-full md:w-[60%]">* Ces champs sont requis pour poursuivre votre commande.</p>
      <GoToButton path={'ToDo'} text={'Commander'} />
    </main>
  )
}

export default Cart
