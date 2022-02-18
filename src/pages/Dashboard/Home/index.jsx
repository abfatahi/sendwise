import React from 'react';
import { Switch, Table } from 'antd';
import { DashboardLayout } from '../../../layouts';
import Container from './styles';
import { AccountSummaryCard, BalanceCard } from '../../../components/Dashboard';
import { columns } from '../../../utils/tables';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleShowBalance,
  accountSelector,
} from '../../../redux/reducers/account';
// import { transferSelector } from '../../../redux/reducers/transfers';
import { getTransactions } from '../../../redux/actions/account';

const Index = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
  let { EURBalance, USDBalance, NGNBalance } = loggedInUser;
  const { showBalance, transactions } = useSelector(accountSelector);
  // const { transfers } = useSelector(transferSelector);
  return (
    <DashboardLayout
      content={
        <Container>
          <h1>Dashboard</h1>
          <p>
            Quickly perform task such as transfers funds and view all
            transactions from the dashboard
          </p>
          <div className='header'>
            <h3>ACCOUNT SUMMARY</h3>
            <div className='balance__group'>
              {showBalance ? <b>Hide Balance</b> : <b>Show Balance</b>}
              <Switch
                style={{ background: '#5a75ff' }}
                onChange={() => dispatch(toggleShowBalance())}
              />
            </div>
          </div>
          <div className='card_group'>
            <AccountSummaryCard />
            <div className='assets'>
              <h3>Account Balance Breakdown</h3>
              <div className='group'>
                <BalanceCard symbol='$' currency='USD' balance={USDBalance} />
                <BalanceCard symbol='€' currency='EUR' balance={EURBalance} />
                <BalanceCard symbol='₦' currency='NGN' balance={NGNBalance} />
              </div>
            </div>
          </div>
          <br />
          <br />
          <h3>Recent Transactions</h3>
          <br />
          <Table
            dataSource={
              transactions.length > 0 ? transactions.slice(-5) : transactions
            }
            columns={columns}
            pagination={false}
            scroll={{ x: 1250 }}
          />
        </Container>
      }
    />
  );
};
export default Index;
