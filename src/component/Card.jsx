import React from 'react'

const Card =  ({image , title , description})   => {
  return (
    <div className='card1'>
      <p>{image}</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card
   