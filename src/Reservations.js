import React from 'react';
import Card from './Card';
import './Reservations.css';

const Reservations = ({reservations}) => {
  const reservationCards = reservations.map(reservation => {
    // console.log(reservations)
    return (
    <Card 
      id={reservation.id}
      key={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
    />
    );
  });
  return <div className='reservation-container'>{reservationCards}</div>;
  
}

export default Reservations;