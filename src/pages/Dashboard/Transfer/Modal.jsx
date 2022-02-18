import React from 'react';
import { Modal } from 'antd';
import { FaInfoCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  transferSelector,
  clearState,
} from '../../../redux/reducers/transfers';
import { clearState as clearAccountState } from '../../../redux/reducers/account';
import { getLatestUserDetails } from '../../../redux/actions/transfers';

export const TransferSuccessModal = () => {
  const dispatch = useDispatch();
  const { success } = useSelector(transferSelector);

  return (
    <ModalContainer
      centered={true}
      visible={success}
      footer={false}
      onCancel={() => {
        dispatch(clearState());
        dispatch(getLatestUserDetails());
        dispatch(clearAccountState());
      }}
    >
      <div className='container'>
        <FaInfoCircle className='img' />
        <h5>Transfer Successful!</h5>
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

    h5 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      color: #000000;
      text-align: center;
      text-transform: capitalize;

      @media screen and (max-width: 425px) {
        font-size: 16px;
      }
    }

    .img {
      width: 86px;
      height: 86px;
      color: #5a75ff;

      @media screen and (max-width: 425px) {
        width: 64px;
        height: 64px;
      }
    }
  }
`;
