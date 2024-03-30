import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import ResetPassword from './ResetPassword';
import SignupForm from './SignupForm';
import BusSearchForm from './BusSearchForm';
import BusSearchResult from './BusSearchResult';
import PassengerDetailsForm from './PassengerDetailsForm';
import PaymentForm from './PaymentForm';
import './Form.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/bus-search" element={<BusSearchForm />} />
        <Route path="/bus-search-result" element={<BusSearchResult />} />
        <Route path="/passenger-details" element={<PassengerDetailsForm />} />
        <Route path="/payment" element={<PaymentForm />} />
      </Routes>
    </Router>
  );
};

export default App;
