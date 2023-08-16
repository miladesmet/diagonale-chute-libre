import React from 'react'

const LogoWithText = ({ icon, text, size }) => (
  <div className={`flex flex-col items-center w-${size} max-w-xs group`}>
    <img src={icon} alt={text} />
    <p className='text-center text-[#314A7D]'>{text}</p>
  </div>
)

export default LogoWithText
