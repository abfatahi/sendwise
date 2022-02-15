import React from 'react';
import { Table } from 'antd';
import Container, { GoBack } from './styles';
import { columns } from '../../../utils/tables';
import { useSelector } from 'react-redux';
import { transferSelector } from '../../../redux/reducers/transfers';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const { transfers } = useSelector(transferSelector);
  const Navigate = useNavigate();
  return (
    <Container>
      <div className='header'>
        <GoBack onClick={() => Navigate('/account')} />
        <h1>Account Statement</h1>
      </div>
      <p>
        View your account statements over a selected range of time, default
        range is set to one week from current date
      </p>
      <h3>Recent Transactions</h3>
      <br />

      <Table dataSource={transfers} columns={columns} scroll={{ x: 1250 }} />
    </Container>
  );
};
export default Index;
