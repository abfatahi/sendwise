import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const Index = ({ component: Component, ...rest }) => {
  let isAuthorized = false;
  const token = localStorage.getItem('token');
  if (token !== null || undefined || '') {
    isAuthorized = true;
  }
  return isAuthorized ? <Outlet /> : <Navigate to='/login' />;
};

export default Index;
