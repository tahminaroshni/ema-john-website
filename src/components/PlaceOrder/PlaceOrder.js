import React from 'react';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Your order is successful</h2>
      <button onClick={() => navigate('/')}>Back to shop</button>
    </div>
  );
};

export default PlaceOrder;