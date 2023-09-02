import React, { FC, useEffect, useState } from 'react'
import { Booking } from '../types'

interface Props {
  bookings: Booking[]
}

const CartTotal: FC<Props> = ({ bookings }) => {
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    bookings.map(elt => setTotal(oldTotal => oldTotal + elt.article.price))
  }, [])

  const fixComaDigits = (x: number) => x.toFixed(2)

  return (
    <section className="flex flex-col gap-5 border-t-2 border-solid border-[#D2D9E8] w-full md:w-[60%]">
      <div className="flex justify-between">
        <span>Sous-total</span>
        <span>{fixComaDigits(total)} €</span>
      </div>
      <div>
        <div className="flex justify-between">
          <span>Total HT</span>
          <span>{fixComaDigits(total * 0.8)} €</span>
        </div>
        <div className="flex justify-between">
          <span>TVA (20%)</span>
          <span>{fixComaDigits(total * 0.2)} €</span>
        </div>
      </div>
      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>{fixComaDigits(total)} €</span>
      </div>
    </section>
  )
}

export default CartTotal
