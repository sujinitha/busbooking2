import React, { useState } from 'react';

const PaymentForm = ({ onSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ paymentMethod, cardNumber, expiryDate, cvv, upiId });
  };

  return (
    <div>
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Payment Method:</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Google Pay">Google Pay</option>
            {/* Add more payment options as needed */}
          </select>
        </div>
        {paymentMethod === 'Credit Card' && (
          <>
            <div>
              <label>Card Number:</label>
              <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
            </div>
            <div>
              <label>Expiry Date:</label>
              <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
            </div>
            <div>
              <label>CVV:</label>
              <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
            </div>
          </>
        )}
        {paymentMethod === 'Google Pay' && (
          <div>
            <label>UPI ID:</label>
            <input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} required />
          </div>
        )}
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default PaymentForm;
