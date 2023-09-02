import React, { FC } from 'react'
import { HiX } from "react-icons/hi";
import picture from '../assets/images/vol.png'
import { Booking } from '../types'

interface Props {
  booking: Booking
}

const CartArticle: FC<Props> = ({ booking }) => {
  const { article, jumperAge, jumperFirstame, jumperName, jumperWeight } = booking

  const calcPrice = () => article?.price.toFixed(2)

  return (
    <div className="flex items-start md:w-[60%] gap-5">
      {/* ToDo : Renplacer image ci dessous par article?.Pictures[0].originalName */}
      <img className="max-w-sm w-2/6" src={picture} alt={`Image correspondant à l'article ${article?.title}`} />
      <div className="grow">
        <h2 className="text-xl font-bold">{article?.title}</h2>
        <p>
          Nom du sautant : {jumperFirstame} {jumperName}
        </p>
        <p>Age : {jumperAge} ans</p>
        <p>Poids : {jumperWeight} Kg</p>
        <p>Options :</p>
        <p className="font-bold text-right">{calcPrice()}</p>
      </div>
      {/* ToDo : Modifier button */}
      <button className="text-3xl" title="Supprimer l'article du panier" onClick={_ => console.log('Supprimer article ' + article.id)}>
        <HiX />
      </button>
    </div>
  )
}

export default CartArticle
