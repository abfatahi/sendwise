import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '../../../layouts';
import Home from './Home';
import Transfer from './Transfer';

const Index = () => {
  return (
    <DashboardLayout
      content={
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='funds-transfer' element={<Transfer />} />
        </Routes>
      }
    />
  );
};
export default Index;
