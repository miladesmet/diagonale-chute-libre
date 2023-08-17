import React from "react";
import { Link } from "react-router-dom";
import arrowRight from '../assets/arrow-right-ios.svg'

const GoToButton = ({path, text}) => {
  return <Link
  className="flex items-center justify-end text-white text-lg font-bold tracking-wider bg-[#0E4595] py-2 pl-4"
  to={path}
  title={text}
>
  {text}
  <img className="duration-300" src={arrowRight} alt="Flèche vers la droite" />
</Link>
}

export default GoToButton