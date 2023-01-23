import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const carts = props.carts;

  // const getCarts = JSON.parse(localStorage.getItem('cart'));

  // let totalCart = 0;
  // let totalPrice = 0;

  // for (const cart of carts) {
  //   console.log(cart);
  //   let cartPrice = cart.price;
  //   cartPrice = (cartPrice * cart.quantity);
  //   totalCart = totalCart + cart.quantity;
  //   totalPrice = totalPrice + cartPrice;
  // }

  // for (const key in getCarts) {
  //   const cartsQuantity = getCarts[key];
  //   totalCart = totalCart + cartsQuantity;
  //   const cart = carts.find(cart => cart.key === key);

  //   if (cart) {
  //     const cartPrice = cart.price;
  //     totalPrice = totalPrice + (cartPrice * cartsQuantity);
  //   }

  // }
  let totalCart = carts.reduce((previous, current) => previous + (current.quantity), 0);
  let totalPrice = carts.reduce((previous, current) => previous + (current.price * current.quantity), 0);

  const shipping = totalPrice > 0 ? 20 : 0;
  const tax = totalPrice * 0.05;
  totalPrice = totalPrice + shipping + tax;

  return (
    <div className='cart'>
      <h3>Order Summary</h3>
      <p>Items ordered:{totalCart}</p>
      <p><small>Shipping & Handling: ${shipping}</small></p>
      <p><small>Total before tax: ${(totalPrice - tax).toFixed(2)}</small></p>
      <p><small>Estimated Tax: ${tax.toFixed(2)}</small></p>
      <h3>Order Total: ${totalPrice.toFixed(2)}</h3>
      {props.children}
    </div>
  );
};

export default Cart;