import React, { useEffect, useState } from 'react'
import CartArticle from '../components/CartArticle'
import CartTotal from '../components/CartTotal'
import GoToButton from '../components/GoToButton'
import { fetchData } from '../utils/getData'
import { Booking } from '../types'

const Cart = () => {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchArticleData = async (id: number) => {
      const data = await fetchData('article/' + id, 'GET', {})
      return data
    }

    const fetchCartData = async (id: number) => {
      const cartData = await fetchData('cart/' + id, 'GET', {})

      for (const booking of cartData.Bookings) {
        const articleData = await fetchArticleData(booking.ArticleId)
        setBookings(oldBookings => [...oldBookings, { ...booking, article: articleData }])
      }
      setLoading(false)
    }

    fetchCartData(1)
  }, [])

  return (
    <main className="bg-[#F2F4FF] flex flex-col items-center gap-10 p-7 text-[#314A7D]">
      <h1 className="text-5xl font-bold text-center">Panier d'achat</h1>
      {loading || bookings.map((booking, i) => <CartArticle key={i} booking={booking} />)}
      {loading || <CartTotal bookings={bookings} />}
      <p className=''>Entrez votre adresse mail. Celle ci sera utilisée pour vous envoyer votre confirmation de commande.</p>
      <label htmlFor="email">Adresse email *</label>
      <input type="email" id="email" required />
      <div>
        <input type="radio" id="conditions" required />
        <label htmlFor="conditions">J’accepte Termes et conditions.</label>
      </div>
      <GoToButton path={'ToDo'} text={'Commander'} />
    </main>
  )
}

export default Cart
