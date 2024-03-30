import React from 'react';

const BusSeat = ({ availableSeats = [], bookedSeats = [], onSeatSelect }) => {
  const isSeatBooked = (seat) => bookedSeats.includes(seat);

  return (
    <div className="bus-seat">
      {availableSeats.map(seat => (
        <label key={seat} className={`seat-label ${isSeatBooked(seat) ? 'booked' : 'available'}`}>
          <input
            type="checkbox"
            value={seat}
            onChange={onSeatSelect}
            disabled={isSeatBooked(seat)}
          />
          <img src="/seat.png" alt={`Seat ${seat}`} className="seat-image" />
          <span>{seat}</span> {/* Display seat number */}
        </label>
      ))}
    </div>
  );
};

export default BusSeat;
