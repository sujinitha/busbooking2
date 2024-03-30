import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BusSearchResult.css'; // Import CSS for styling
import staticBuses from './staticBuses'; // Import staticBuses array

const BusSearchResult = () => {
  const navigate = useNavigate();
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [selectedSeatType, setSelectedSeatType] = useState(null);

  // Function to handle clicking on the seat number
  const handleSeatClick = (seat) => {
    setSelectedSeat(seat);
  };

  // Function to handle clicking on the book button
  const handleBookClick = () => {
    if (selectedSeat && selectedSeatType) {
      navigate('/passenger-details');
    } else {
      alert('Please select both a seat number and a seat type.');
    }
  };

  return (
    <div className="bus-search-result">
      {/* Seat types */}
      <div className="seat-types">
        <h3>Seat Types</h3>
        <ul>
          <li><button className="AC" onClick={() => setSelectedSeatType('AC')}>AC</button></li>
          <li><button className="NonAC" onClick={() => setSelectedSeatType('Non AC')}>Non AC</button></li>
          <li><button className="Sleeper" onClick={() => setSelectedSeatType('Sleeper')}>Sleeper</button></li>
          <li><button className="SemiSleeper" onClick={() => setSelectedSeatType('Semi Sleeper')}>Semi Sleeper</button></li>
        </ul>
      </div>
      {/* Available buses */}
      <div className="bus-list">
        {staticBuses.map(bus => (
          <div key={bus.id} className="bus-item">
            <div className="bus-header">
              <p className="bus-name">Bus Name: {bus.busType}</p>
              <p className="departure-time">Departure Time: {bus.departureTime}</p>
              <p className="arrival-time">Arrival Time: {bus.arrivalTime}</p>
              <p className="duration">Duration: {bus.duration}</p>
            </div>
            <div className="seat-container">
              {bus.availableSeats.map(seat => (
                <button key={seat} className={`seat ${selectedSeat === seat ? 'selected' : ''} ${selectedSeatType}`} onClick={() => handleSeatClick(seat)}>
                  {seat}
                </button>
              ))}
            </div>
            {/* Book button */}
            <div className="book-option">
              <button onClick={handleBookClick}>Book</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusSearchResult;
