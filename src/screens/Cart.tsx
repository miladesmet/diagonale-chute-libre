import React, { useEffect, useState } from 'react'
import CartArticle from '../components/CartArticle'
import CartTotal from '../components/CartTotal'
import { fetchData } from '../utils/getData'
import { Booking } from '../types'
import { useForm, SubmitHandler } from 'react-hook-form'
import arrowRight from '../assets/arrow-right-ios.svg'
import CartFormInput from '../components/CartFormInput'

type FormInput = {
  name: string
  firstname: string
  email: string
  phone: string
  conditions: boolean
}

const Cart = () => {
  const idCart = 1

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>()

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

  const handleClick: SubmitHandler<FormInput> = data => {
    // ToDo : Create Order with this data
    console.log(data)
  }

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

      <CartFormInput
        error={errors.firstname}
        errorMessgae={'Votre prénom est requis pour continuer.'}
        labelFor={'firstname'}
        labelText={'Prénom'}
        registerData={register('firstname', { required: true })}
      />
      <CartFormInput
        error={errors.name}
        errorMessgae={'Votre nom est requis pour continuer.'}
        labelFor={'name'}
        labelText={'Nom'}
        registerData={register('name', { required: true })}
      />
      <CartFormInput
        error={errors.email}
        errorMessgae={'Votre email est requis pour continuer.'}
        labelFor={'email'}
        labelText={'Adresse email'}
        registerData={register('email', { required: true })}
        inputType="email"
      />
      <CartFormInput
        error={errors.phone}
        errorMessgae={'Votre numéro de téléphone est requis pour continuer.'}
        labelFor={'phone'}
        labelText={'Numéro de téléphone'}
        registerData={register('phone', { required: true })}
      />

      <div className="w-full md:w-[60%]">
        <div className="flex items-center gap-3 w-full md:w-[60%]">
          <input {...register('conditions', { required: true })} type="checkbox" id="conditions" className="w-4 h-4" />
          <label htmlFor="conditions">J'accepte Termes et conditions.</label>
        </div>
        {errors.conditions && <p className="text-red-500">Vous devez accepter les conditions ci-dessus pour continuer.</p>}
      </div>
      <p className="w-full md:w-[60%]">* Ces champs sont requis pour poursuivre votre commande.</p>
      <button
        className="flex items-center justify-end text-white text-lg font-bold tracking-wider bg-[#0E4595] py-2 pl-4"
        title={'Commander'}
        onClick={handleSubmit(handleClick)}
      >
        Commander
        <img className="duration-300" src={arrowRight} alt="Flèche vers la droite" />
      </button>
    </main>
  )
}

export default Cart
