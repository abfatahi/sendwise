import React from 'react';
import { FaWallet, FaHistory } from 'react-icons/fa';
import { AccountTab } from '../../../components/Account';
import Container, { CardWrapper } from './styles';

const Index = () => {
  return (
    <Container>
      <h1>Accounts</h1>
      <p>Manage your accounts, view balance and do more</p>
      <CardWrapper>
        <AccountTab
          text='Transaction History'
          icon={<FaHistory className='iconStyle' />}
          link='/account/transaction-history'
        />
        <AccountTab
          text='Account Statement'
          icon={<FaWallet className='iconStyle' />}
          // link='/account/statement'
        />
      </CardWrapper>
    </Container>
  );
};
export default Index;
