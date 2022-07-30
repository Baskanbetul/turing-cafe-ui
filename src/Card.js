import React from 'react';
import './Card.css';

const Card = ({name,date,time,number, id, cancelReservation}) => {
  // console.log(name,"NAME")
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number}</p>
      <button onClick={() => cancelReservation(id)}>Cancel</button>
    </div>
  )
}

export default Card