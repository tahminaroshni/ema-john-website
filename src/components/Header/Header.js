import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png'
import useAuth from '../hooks/useAuth';
import './Header.css'

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <nav>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='menu'>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/order-review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory here</NavLink>
        <NavLink to="/shipping">Shipping</NavLink>
        <NavLink to="/register">Register</NavLink>
        {
          !user?.email
            ?
            <NavLink to="/signin">Sign In</NavLink>
            :
            <NavLink onClick={logOut}>Sign Out</NavLink>
        }
      </div>
    </nav>
  );
};

export default Header;