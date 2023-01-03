import React from 'react';
import './Product.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import Rating from 'react-rating';

const Product = (props) => {
  const { btnHandler } = props;
  const { img, name, seller, price, stock, star } = props.product;

  return (
    <div className='product'>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className='product-name'>{name}</h3>
        <p><small>by:</small> {seller}</p>
        <div className='product-price-rating'>
          <div>
            <h3 className='product-price'>${price}</h3>
            <p><small>only {stock} left in stock - order soon</small></p>
          </div>
          <div>
            {/* <Rating
              emptySymbol={<i className="fa-regular fa-star icon-color"></i>}
              fullSymbol={<i className="fa-solid fa-star icon-color"></i>}
              initialRating={star}
              readonly /> */}
            <h3>Features</h3>
          </div>
        </div>
        <button
          onClick={() => btnHandler(props.product)}
          className='btn-regular'
        >
          {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
          add to cart</button>
      </div>
    </div>
  );
};

export default Product;