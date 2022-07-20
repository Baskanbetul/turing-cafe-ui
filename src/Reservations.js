import React from 'react';
import Card from './Card';
import './Reservations.css';

const Reservations = ({reservations}) => {
  // console.log(reservations, 6)
  const reservationCards = reservations.map(reservation => {
    // console.log(reservation.name, "RESERNAME")
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