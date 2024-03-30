import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from React Router
import './LoginForm.css'; // Import CSS file for styling

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic (e.g., API call to backend)
    console.log('Logging in with:', { username, password });

    // Assuming login is successful, set isLoggedIn to true
    setIsLoggedIn(true);

    // Redirect to the bus search page
    navigate('/bus-search');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic (e.g., API call to backend)
    console.log('Searching for buses with:', { source, destination, date });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      {/* Add a Link to the Signup page */}
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      {/* Add a Link to the Forgot Password page */}
      <p><Link to="/reset-password">Forgot Password?</Link></p>

      {/* Bus search form */}
      {isLoggedIn && (
        <div>
          <h2>Search Buses</h2>
          <form onSubmit={handleSearch}>
            <div>
              <label>Source:</label>
              <input type="text" value={source} onChange={(e) => setSource(e.target.value)} required />
            </div>
            <div>
              <label>Destination:</label>
              <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} required />
            </div>
            <div>
              <label>Date:</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <button type="submit">Search Buses</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
