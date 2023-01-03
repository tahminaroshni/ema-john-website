import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToLocalStorage } from '../../utilities/addToLocalStorage';
import useCart from '../hooks/useCart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [carts, setCarts] = useCart(products);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('products.JSON')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setDisplayProducts(data);
      })
  }, [])

  const handleAddToCart = (product) => {
    const productExists = carts.find(cart => cart.key === product.key);
    // console.log(productExists);
    let newCart = [];
    if (productExists) {
      const restCart = carts.filter(cart => cart.key !== product.key);
      productExists.quantity = productExists.quantity + 1;
      newCart = [...restCart, productExists];
      // console.log(newCart);
    }
    else {
      product.quantity = 1;
      newCart = [...carts, product];
      // console.log(newCart);
    }
    // const newCart = [...carts, product];
    setCarts(newCart);

    // Add data to local storage
    addToLocalStorage(product.key);
  }

  const handleSearchField = (e) => {
    const searchText = e.target.value;
    const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
    // console.log(matchedProducts);
    setDisplayProducts(matchedProducts);
  }

  const handleReviewOrder = () => {
    navigate('/order-review');
  }

  return (
    <div>
      <div className="search-container">
        <input onChange={handleSearchField} type="text" placeholder='type here to search' />
        {/* <FontAwesomeIcon icon={faShoppingCart} className="shopping-cart" /> */}
      </div>
      <div className='shop'>
        <div className="products-container">
          {
            displayProducts.map(product => <Product key={product.key} product={product} btnHandler={handleAddToCart} />)
          }
        </div>
        <div className="cart-container">
          <Cart carts={carts}>
            <button
              onClick={handleReviewOrder}
              className='btn-regular review-btn'>Review your order</button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;