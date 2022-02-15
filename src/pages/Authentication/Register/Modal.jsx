import React from 'react';
import { Modal } from 'antd';
import { FaCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  registerSelector,
  clearState,
} from '../../../redux/reducers/auth/register';
import { Button } from '../../../reusables';

export const RegisterSuccessModal = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { success } = useSelector(registerSelector);
  return (
    <ModalContainer
      centered={true}
      visible={success}
      footer={false}
      closable={false}
    >
      <div className='container'>
        <FaCheckCircle className='img' />
        <h5>Account Successfully Created</h5>
        <Button
          full
          text='Continue'
          dark
          onClick={() => {
            dispatch(clearState());
            Navigate('/login');
          }}
        />
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled(Modal)`
  height: 356px !important;
  width: 400px !important;
  text-align: center;
  display: flex;
  align-items: center;

  @media screen and (max-width: 425px) {
    width: 90% !important;
  }

  .container {
    // margin: 2rem 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 32px;
    padding: 0 75px;

    h5 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      color: #000000;
      text-align: center;
      text-transform: capitalize;
    }

    .img {
      width: 86px;
      height: 86px;
      color: #057a07;
    }
  }
`;
