import React from 'react'
import LogoWithText from '../components/LogoWithText'
import arrowLeft from '../assets/arrow-left-ios.svg'
import creditCardLogo from '../assets/credit-card.svg'
import mailLogo from '../assets/mail.svg'
import { Link } from 'react-router-dom'

const Accueil = () => {
  return (
    <main className="bg-[#F2F4FF]">
      <section className="flex flex-col gap-8 items-center bg-[#E0ECFF] text-[#5874AC] text-center text-lg py-8 px-[10%]">
        <h1 className="text-[#314A7D] text-5xl font-bold">Faites le grand saut !</h1>
        <p>Le saut en parachute tandem est la façon la plus facile est sûre de découvrir la chute libre ; le rêve d'Icare !</p>
        <p>
          C'est une expérience incomparable avec tout ce que vous auriez pu essayer avant ! Accroché(e) à un moniteur hyper expérimenté vous avez
          juste à profiter de cette sensation aussi intense qu'inoubliable !
        </p>
        <aside className="flex items-center gap-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127188.79103618061!2d6.030519729737994!3d44.4825209098696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cb1357aaa90ffd%3A0xe174ba17785e1dda!2sTallard!5e0!3m2!1sfr!2sfr!4v1692120152554!5m2!1sfr!2sfr"
            className="w-1/2 h-auto md:h-80"
            loading="lazy"
          ></iframe>
          <p className="w-96">Gap-Tallard c'est le centre de parachutisme le plus grand en France, avec des moniteurs qui on plus de 20.000 sauts.</p>
        </aside>
        <p className="text-[#314A7D]">
          A 1h30 de Marseille, 1h30 de Grenoble, 2h30 de Lyon et 3h00 de Nice ou Genève en voiture. Gare la plus proche : Gap
        </p>
      </section>

      <section className="flex flex-col items-center gap-6 py-4">
        <div className="flex items-start justify-around gap-6">
          <LogoWithText icon={mailLogo} text={'Achetez en ligne et recever directement votre bon par mail'} />
          <LogoWithText icon={creditCardLogo} text={'Paiement sécurisé CB, VISA'} />
        </div>
        {/* ToDo : Update Link path to shop */}
        <Link
          className="flex gap-4 text-white text-lg font-bold tracking-wider bg-[#0E4595] w-fit py-2 px-4"
          to={'ToDo:pathToShop'}
          title="Aller à la boutique"
        >
          Notre boutique
          <img src={arrowLeft} alt="Y aller" />
        </Link>
      </section>
    </main>
  )
}

export default Accueil
