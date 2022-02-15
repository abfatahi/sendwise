import { Modal } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  toggleShowTranferModal,
  accountSelector,
} from '../../../redux/reducers/account';

export const TransferDetailsModal = (props, { status = 'pending' }) => {
  const dispatch = useDispatch();
  const { showTransferModal } = useSelector(accountSelector);
  const transaction = JSON.parse(localStorage.getItem('selectedTransaction'));
  return (
    <ModalContainer
      centered={true}
      visible={showTransferModal}
      footer={false}
      onCancel={() => dispatch(toggleShowTranferModal())}
    >
      {transaction && (
        <div className='container'>
          <h2>Transfer Details</h2>
          <div className='group'>
            <div className='title'>Transaction ID:</div>
            <div className='value'>{transaction.id}</div>
          </div>
          <div className='group'>
            <div className='title'>Beneficiary Name:</div>
            <div className='value'>{transaction.name}</div>
          </div>
          <div className='group'>
            <div className='title'>Beneficiary Account:</div>
            <div className='value'>{transaction.account_number}</div>
          </div>
          <div className='group'>
            <div className='title'>Beneficiary Bank:</div>
            <div className='value'>{transaction.bank_name}</div>
          </div>
          <div className='group'>
            <div className='title'>Amount</div>
            <div className='value'>{transaction.amount.toLocaleString()}</div>
          </div>
          <div className='group'>
            <div className='title'>Date</div>
            <div className='value'>
              {transaction.createdAt &&
                new Date(transaction.createdAt).toLocaleDateString()}
            </div>
          </div>
          <div className='group'>
            <div className='title'>Date</div>
            <div className='value'>
              {transaction.createdAt &&
                new Date(transaction.createdAt).toLocaleTimeString()}
            </div>
          </div>
          <div className='group'>
            <div className='title'>Narration</div>
            <div className='value'>{transaction.reason}</div>
          </div>
          <div className='group'>
            <div className='title'>Status</div>
            <div className={`status ${transaction.status}`}>
              {transaction.status}
            </div>
          </div>
        </div>
      )}
    </ModalContainer>
  );
};

const ModalContainer = styled(Modal)`
  //   height: 356px !important;
  width: 500px !important;
  text-align: center;
  display: flex;
  align-items: center;

  @media screen and (max-width: 425px) {
    width: 90% !important;
  }

  .container {
    display: flex;
    // align-items: center;
    flex-direction: column;
    gap: 1rempx;
    // padding: 0 75px;

    h2 {
      margin-bottom: 1rem !important;
      width: 100%;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      color: #000000;
      text-align: center;
      text-transform: capitalize;

      @media screen and (max-width: 425px) {
        font-size: 20px;
      }
    }

    .status {
      font-weight: bold;
      text-transform: uppercase;
      flex: 1;
      font-style: normal;
      font-size: 16px;

      @media screen and (max-width: 425px) {
        font-size: 14px;
      }
    }

    .pending {
      color: #ffad33 !important;
    }

    .success {
      color: #19b729 !important;
    }

    .rejected {
      color: #ff8282 !important;
    }

    .group {
      display: flex;
      width: 100%;
      margin-bottom: 0.5rem !important;
    }

    .title {
      flex: 1;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #000000;

      @media screen and (max-width: 425px) {
        font-size: 14px;
      }
    }

    .value {
      flex: 1;
      font-style: normal;
      font-size: 16px;
      color: #000000;

      @media screen and (max-width: 425px) {
        font-size: 14px;
      }
    }
  }
`;
