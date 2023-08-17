import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import headerImage from '../assets/images/grand-saut.svg'
import hambergerButton from '../assets/hamburger-button.svg'

type RouteInterface = {
  path: string
  title: string
  element: React.JSX.Element
}

const Header = ({ routes }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <header>
      <img className="object-cover w-full h-48 md:h-80" src={headerImage} alt="Faites le grand saut" />
      <div className="flex flex-col items-end bg-[#5874AC] text-white text-xl p-4">
        <button className="md:hidden" title="Menu" onClick={_ => setIsOpenMenu(oldState => !oldState)}>
          <img className="h-8" src={hambergerButton} alt="Menu" />
        </button>
        <nav className={`${isOpenMenu ? 'flex' : 'hidden'} md:flex w-full flex-col md:flex-row justify-around items-center gap-2 md:gap-0`}>
          {routes.map((route: RouteInterface, i: React.Key) => (
            <NavLink
              key={i}
              to={route.path}
              className='hover:font-bold hover:tracking-widest tracking-normal ease-in-out duration-300'
              style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : '', textDecoration: isActive ? 'underline' : 'none' })}
              title={route.title}
            >
              {route.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
