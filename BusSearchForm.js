import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import staticBuses from './staticBuses';
import './LoginForm.css';
import BusSearchResult from './BusSearchResult'; // Import BusSearchResult component

const BusSearchForm = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [filteredBuses, setFilteredBuses] = useState([]); // State to store filtered buses
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Convert source and destination to lowercase
    const lowerCaseSource = source.toLowerCase();
    const lowerCaseDestination = destination.toLowerCase();

    // Implement search logic (e.g., filtering static bus data)
    const filtered = staticBuses.filter(bus => {
      // Convert data source and destination to lowercase for comparison
      const dataLowerCaseSource = bus.source.toLowerCase();
      const dataLowerCaseDestination = bus.destination.toLowerCase();

      // Check if the lower case source, destination, and date match
      return dataLowerCaseSource === lowerCaseSource && 
             dataLowerCaseDestination === lowerCaseDestination && 
             bus.date === date;
    });

    setFilteredBuses(filtered);
    navigate('/bus-search-result');
  };

  return (
    <div>
      <h2>Search Buses</h2>
      <form onSubmit={handleSearch}>
        <div>
          <label>Source:</label>
          <select value={source} onChange={(e) => setSource(e.target.value)} required>
            <option value="">Select Source</option>
            <option value="Chengalpattu">Chengalpattu</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Dharmapuri">Dharmapuri</option>
            {/* Add other source options here */}
          </select>
        </div>
        <div>
          <label>Destination:</label>
          <select value={destination} onChange={(e) => setDestination(e.target.value)} required>
            <option value="">Select Destination</option>
            <option value="Erode">Erode</option>
            <option value="Karur">Karur</option>
            <option value="Nagapattinam">Nagapattinam</option>
            {/* Add other destination options here */}
          </select>
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <button type="submit">Search Buses</button>
      </form>
      {/* Conditionally render BusSearchResult component */}
      {filteredBuses.length > 0 && <BusSearchResult buses={filteredBuses} />}
    </div>
  );
};

export default BusSearchForm;
