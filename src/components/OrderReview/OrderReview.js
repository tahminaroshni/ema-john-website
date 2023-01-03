import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearLocalStorage, removeFromLocalStorage } from '../../utilities/addToLocalStorage';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useCart(products);
  const navigate = useNavigate();

  const handleRemoveBtn = (key) => {
    // remove product from UI
    const remainingCarts = carts.filter(cart => cart.key !== key);
    setCarts(remainingCarts);

    // remove product from local storage
    removeFromLocalStorage(key);
  }

  const handlePlaceOrder = () => {
    clearLocalStorage();
    setCarts([]);
    navigate('/place-order');
  }


  useEffect(() => {
    fetch('products.JSON')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className='shop'>
      <div className="products-container">
        {
          carts.map(product => <ReviewItem key={product.key} product={product} handleRemoveBtn={handleRemoveBtn} />)
        }
      </div>
      <div className="cart-container">
        <Cart carts={carts}>
          <button
            onClick={() => handlePlaceOrder()}
            className='btn-regular review-btn'>Place Order</button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;