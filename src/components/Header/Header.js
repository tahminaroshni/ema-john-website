import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png'
import './Header.css'

const Header = () => {
  return (
    <nav>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='menu'>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/order-review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory here</NavLink>
      </div>
    </nav>
  );
};

export default Header;