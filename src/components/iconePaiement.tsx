import React from 'react'
import creditCard from '../assets/icon_credit card.svg'
import mailIcon from '../assets/icon_mail.svg'

const IconePaiement = () => {
  return (
    <div>
      <div>
        <img src={creditCard} alt="Icon mail" />
        <img src={mailIcon} alt="Icon carte de credit" />
      </div>
    </div>
  )
}

export default IconePaiement