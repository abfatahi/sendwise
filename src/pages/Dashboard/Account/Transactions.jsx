import React from 'react';
import { Table } from 'antd';
import Container, { GoBack } from './styles';
import { TransferDetailsModal } from './Modals';
import { useDispatch, useSelector } from 'react-redux';
import { transferSelector } from '../../../redux/reducers/transfers';
import { useNavigate } from 'react-router-dom';
import { columns } from '../../../utils/tables';
import { getTransactions } from '../../../redux/actions/account';
import { accountSelector } from '../../../redux/reducers/account';

const Index = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  const Navigate = useNavigate();
  const { transactions } = useSelector(accountSelector);

  return (
    <Container>
      <TransferDetailsModal />
      <div className='header'>
        <GoBack onClick={() => Navigate('/account')} />
        <h1>Transaction History</h1>
      </div>
      <p>
        View your transactions over a selected range of time, default range is
        set to one week from current date
      </p>
      <h3>Recent Transactions</h3>
      <br />
      <Table dataSource={transactions} columns={columns} scroll={{ x: 1250 }} />
    </Container>
  );
};
export default Index;
