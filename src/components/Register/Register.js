import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Register.css';

const Register = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const redirect_uri = location?.state?.from || '/';

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then(result => {
        setUser(result.user);
        setError('');
        console.log(location);
        navigate(redirect_uri);
      })
  }

  return (
    <div className='register'>
      <h2>Create Account</h2>
      <h5>Your name</h5>
      <input type="text" name="" id="name" placeholder='First and last name' />
      <h5>Email</h5>
      <input type="email" name="" id="email" />
      <h5>Password</h5>
      <input type="password" name="" id="password" placeholder='At least 6 characters' />
      <h5>Re-enter password</h5>
      <input type="password" name="" id="check-password" />
      <br />
      <input className='btn-regular' type="submit" value="Continue" />
      <p>---------------------------or-------------------------</p>
      <p>Already have an account?
        <span> <Link to='/signin'>Sign in</Link></span>
      </p>
      <button
        onClick={handleGoogleSignIn}
        className='btn-regular'>Sign In Using Google</button>
    </div>
  );
};

export default Register;