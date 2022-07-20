import React from 'react';
import './Card.css';

const Card = ({name,date,time,number}) => {
  // console.log(name,"NAME")
  return (
    <div className='Card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number}</p>
      <button>Cancel</button>
    </div>
  )
}

export default Card