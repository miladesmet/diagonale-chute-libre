import React from 'react'
import LogoWithText from '../components/LogoWithText'
import creditCardLogo from '../assets/credit-card.svg'
import mailLogo from '../assets/mail.svg'
import speedLogo from '../assets/speed-logo.svg'
import timeLogo from '../assets/time-logo.svg'
import heightLogo from '../assets/height-logo.svg'
import skydivesImage from '../assets/images/vol.svg'
import GoToButton from '../components/GoToButton'
import ProductCarousel from '../components/ProductCarousel'

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
        <div className="flex items-start justify-center gap-20 md:gap-40">
          <LogoWithText icon={mailLogo} text={'Achetez en ligne et recever directement votre bon par mail'} />
          <LogoWithText icon={creditCardLogo} text={'Paiement sécurisé CB, VISA'} />
        </div>
        {/* ToDo : Update Link path to shop */}
        <GoToButton path={'pathToShop'} text={'Notre boutique'} />
      </section>

      <section className="flex flex-col items-center gap-6 py-4">
        <div className="overflow-hidden w-full h-64">
          <img className="object-cover w-full md:h-80 duration-500 hover:scale-125" src={skydivesImage} alt="Parachutes sur ciel nuageux" />
        </div>
        <div className="flex items-start justify-around gap-20 font-bold text-xl">
          <LogoWithText icon={heightLogo} text={'4000 m'} />
          <LogoWithText icon={timeLogo} text={'50 sec'} />
          <LogoWithText icon={speedLogo} text={'200 km/h'} />
        </div>
      </section>

      <ProductCarousel
        itemList={[
          {
            image: skydivesImage,
            title: 'Tandem en weekend1',
            subtitle: '(Tarif normal)',
            description: 'Valable en weekend, semaine et jours fériés. Sur le site de Tallard',
            price: 295,
          },
          {
            image: skydivesImage,
            title: 'Tandem en weekend2',
            subtitle: '(Tarif normal)',
            description: 'Valable en weekend, semaine et jours fériés. Sur le site de Tallard',
            price: 295,
          },
          {
            image: skydivesImage,
            title: 'Tandem en weekend3',
            subtitle: '(Tarif normal)',
            description: 'Valable en weekend, semaine et jours fériés. Sur le site de Tallard',
            price: 295,
          },
        ]}
        inputsName={'name'}
      />
    </main>
  )
}

export default Accueil
