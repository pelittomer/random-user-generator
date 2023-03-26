import React from 'react'

import { FaPhoneAlt, FaLocationArrow } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

function BackSide({ item }) {
  const { email, phone, location } = item;
  const { street, country, city, state } = location
  return (
    <div className="flip-card-back">
      <h1>let's get in touch</h1>
      <ul>
        <li>
          <FiMail size={20} style={{ color: 'white' }} />
          <p>{email}</p>
        </li>
        <li>
          <FaPhoneAlt size={20} style={{ color: 'white' }} />
          <p>{phone}</p>
        </li>
        <li>
          <FaLocationArrow size={20} style={{ color: 'white' }} />
          <p>{street.number} {street.name} {state}/{city}-{country}  </p>
        </li>
      </ul>
    </div>
  )
}

export default BackSide