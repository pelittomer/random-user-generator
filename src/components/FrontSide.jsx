import React from 'react'

function FrontSide({ item }) {

  const { picture, name, gender, dob } = item;

  return (
    <div className="flip-card-front">
      <img src={picture.large} alt="picture" />
      <ul>
        <li>
          <h3 className='title'>name : <span className='content'>{name.first}</span></h3>
        </li>
        <li>
          <h3 className='title'>surname : <span className='content'>{name.last}</span></h3>
        </li>
        <li>
          <h3 className='title'>gender : <span className='content'>{gender}</span></h3>
        </li>
        <li>
          <h3 className='title'>age : <span className='content'>{dob.age}</span></h3>
        </li>
      </ul>


    </div>
  )
}

export default FrontSide