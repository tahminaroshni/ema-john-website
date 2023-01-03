const addToLocalStorage = (id) => {
  const productsExist = localStorage.getItem('cart');
  let cart = {};
  if (!productsExist) {
    cart[id] = 1;
  }
  else {
    cart = JSON.parse(productsExist);
    // console.log(cart[id]);
    if (cart[id]) {
      const newCount = cart[id] + 1;
      cart[id] = newCount;
    }
    else {
      cart[id] = 1;
    }
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

const removeFromLocalStorage = (id) => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) return;
  else {
    if (cart[id]) {
      delete cart[id];
    }
    else return;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

const clearLocalStorage = () => {
  localStorage.removeItem('cart');
}

export { addToLocalStorage, removeFromLocalStorage, clearLocalStorage };