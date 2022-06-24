import React from 'react'
import './singlecard.css'
const SingleCard = ({ card, setChoices, flipped }) => {

  const clickedimage = () => {
    setChoices(card)
  }
  return (
    <div className='card'  >
      <div className={flipped?"flipped":""}>
        <img className='front' src={card.src} alt="card front"></img>
        <img onClick={clickedimage} className='back' src="img/cover.png" alt="card back"></img>
      </div>
    </div>
  )
}

export default SingleCard