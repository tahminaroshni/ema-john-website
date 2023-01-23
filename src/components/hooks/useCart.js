import { useEffect } from "react";
import { useState } from "react"

const useCart = (products) => {
  const [carts, setCarts] = useState([]);

  // load data from local storage
  useEffect(() => {
    if (products.length) {
      const cart = JSON.parse(localStorage.getItem('cart'));
      const storedCart = [];
      for (const key in cart) {
        const addedProduct = products.find(product => product.key === key);
        addedProduct.quantity = cart[key];
        // console.log(addedProduct.quantity);
        storedCart.push(addedProduct);
      }
      setCarts(storedCart);
    }
  }, [products])

  return [carts, setCarts];
}

export default useCart;