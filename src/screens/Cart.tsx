import React, { useEffect, useState } from 'react'
import CartArticle from '../components/CartArticle'
import CartTotal from '../components/CartTotal'
import GoToButton from '../components/GoToButton'
import { fetchData } from '../utils/getData'

type Booking = {
  ArticleId: number
  CartId: number
  id: string
  jumpDate: string
  jumperAge: number
  jumperFirstame: string
  jumperName: string
  jumperWeight: number
}

const Cart = () => {
  const [bookings, setBookings] = useState<Booking[]>([])

  useEffect(() => {
    const fetchCartData = async (id: number) => {
      const cartData = await fetchData('cart/' + id, 'GET', {})
      console.log(cartData)
      setBookings(cartData.Bookings)
    }

    fetchCartData(1)
  }, [])

  return (
    <main className="bg-[#F2F4FF] flex flex-col items-center gap-10 p-7">
      <h1 className="text-[#314A7D] text-5xl font-bold text-center">Panier d'achat</h1>
      {bookings.map((booking, i) => (
        <CartArticle key={i} bookingData={booking} />
      ))}
      <CartTotal />
      <p>Entrez  votre adresse mail. Celle ci sera utilisée pour vous envoyer  votre confirmation de commande.</p>
      <label htmlFor="email">Adresse email *</label>
      <input type='email' id='email' required />
      <div>
        <input type="radio" id='conditions' required />
        <label htmlFor="conditions">J’accepte Termes et conditions.</label>
      </div>
      <GoToButton path={"ToDo"} text={"Commander"} />
    </main>
  )
}

export default Cart
