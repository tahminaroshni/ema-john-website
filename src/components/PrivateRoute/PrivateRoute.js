import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <div>
      {
        user?.email
          ?
          <Outlet />
          :
          <Navigate to='/register' state={{ from: location }} />
      }
    </div>
  );
};

export default PrivateRoute;