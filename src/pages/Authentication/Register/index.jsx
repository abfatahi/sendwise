import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { AuthLayout } from '../../../layouts';
import Step1 from './Step1';
import Step2 from './Step2';

const Index = () => {
  return (
    <AuthLayout
      title='Create Your Account'
      subtitle={
        <>
          Already have login details? <Link to='/login'>Login Here</Link>
        </>
      }
      content={
        <Routes>
          <Route exact path='/' element={<Step1 />} />
          <Route exact path='/step-2' element={<Step2 />} />
        </Routes>
      }
    />
  );
};

export default Index;
