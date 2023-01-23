import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
  return (
    <div className='signin'>
      <h2>Sign in</h2>
      <h5>Email Address</h5>
      <input className='input' type="email" name="" id="" />
      <br />
      <input className='btn-regular' type="submit" value="Continue" />
      <p>-----------------------------or----------------------------</p>
      <p>New to Ema-john?</p>
      <Link to='/register'>Create your ema-john account</Link>
    </div>
  );
};

export default Signin;