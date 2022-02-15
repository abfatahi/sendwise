import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '../../../layouts';
import Home from './Home';
// import Statements from './Statements';
import Transactions from './Transactions';

const Index = () => {
  return (
    <DashboardLayout
      content={
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* <Route exact path='statement' element={<Statements />} /> */}
          <Route exact path='transaction-history' element={<Transactions />} />
        </Routes>
      }
    />
  );
};
export default Index;
