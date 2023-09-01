import React, { FC, useEffect, useState } from 'react'
import { fetchData } from '../utils/getData'
import { HiX, IconName } from "react-icons/hi";
import picture from '../assets/images/vol.png'

type Option = {
  description: string
  id: number
  priceUpdate: number
  title: string
  type: string
}

type Picture = {
  id: number
  originalName: string
}

type Article = {
  Options: Option[]
  Pictures: Picture[]
  description: string
  id: number
  price: number
  title: string
}

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

interface Props {
  bookingData: Booking
}

const CartArticle: FC<Props> = ({ bookingData }) => {
  const { ArticleId, jumperAge, jumperFirstame, jumperName, jumperWeight } = bookingData

  const [arctileData, setArctileData] = useState<Article>()

  useEffect(() => {
    const fetchArticleData = async (id: number) => {
      const data = await fetchData('article/' + id, 'GET', {})
      setArctileData(data)
      console.log(data)
    }

    fetchArticleData(ArticleId)
  }, [])

  const calcPrice = () => arctileData?.price

  return (
    <div className="flex items-start md:w-[60%] gap-5 text-[#314A7D]">
      {/* ToDo : Renplacer image ci dessous par arctileData?.Pictures[0].originalName */}
      <img className="max-w-sm w-2/6" src={picture} alt={`Image correspondant à l'article ${arctileData?.title}`} />
      <div className="grow">
        <h2 className="text-xl font-bold">{arctileData?.title}</h2>
        <p>
          Nom du sautant : {jumperFirstame} {jumperName}
        </p>
        <p>Age : {jumperAge} ans</p>
        <p>Poids : {jumperWeight} Kg</p>
        <p>Options :</p>
        <p className="font-bold text-right">{calcPrice()}</p>
      </div>
      {/* ToDo : Modifier button */}
      <button className="text-3xl" title="Supprimer l'article du panier" onClick={_ => console.log('Supprimer article ' + ArticleId)}>
        <HiX />
      </button>
    </div>
  )
}

export default CartArticle
