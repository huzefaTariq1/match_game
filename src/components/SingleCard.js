import React from 'react'
import './singlecard.css'
const SingleCard = ({card}) => {
  return (
    <div className='card'  >
    <img className='front' src={card.src} alt="card front"></img>
    <img className='back' src="img/cover.png" alt="card back"></img>
  </div>
  )
}

export default SingleCard