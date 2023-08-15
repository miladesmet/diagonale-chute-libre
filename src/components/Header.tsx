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
      <img className="object-cover w-full h-80" src={headerImage} alt="Faites le grand saut" />
      <div className="flex bg-[#5874AC] text-white text-xl p-4">
        <nav className="flex grow justify-around">
          {isOpenMenu && routes.map((route: RouteInterface, i: React.Key) => (
            <NavLink
              key={i}
              to={route.path}
              style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', textDecoration: isActive ? 'underline' : 'none' })}
            >
              {route.title}
            </NavLink>
          ))}
        </nav>
        <button title='Menu' onClick={_ => setIsOpenMenu(oldState => !oldState)}>
          <img className='h-8' src={hambergerButton} alt='Menu' />
        </button>
      </div>
    </header>
  )
}

export default Header
