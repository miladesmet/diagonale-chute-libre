import React from 'react'

const LogoWithText = ({ icon, text }) => (
  <div className='flex flex-col items-center w-2/5 group'>
    <img src={icon} alt={text} />
    <p className='text-center text-[#314A7D]'>{text}</p>
  </div>
)

export default LogoWithText
