import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { accountSelector } from '../../redux/reducers/account';
// import { Radio } from 'antd';

const Index = (props) => {
  const loggedInUser = JSON.parse(localStorage.getItem('user'));
  const { showBalance } = useSelector(accountSelector);
  return (
    <Container>
      {loggedInUser && (
        <>
          <h3>
            {props.currency} ({props.symbol})
          </h3>
          <h1>{showBalance ? props.balance : 'XXXXXX'}</h1>
        </>
      )}
    </Container>
  );
};

export default Index;

const Container = styled.div`
  width: 150px;
  height: 100px;
  background: #057a07;
  border-radius: 10px;
  // padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  h3 {
    font-weight: bold;
    font-size: 1rem;
    color: #fff;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;

    @media screen and (max-width:425px){
      font-size: 1.6rem;
    }
  }

  :hover {
    opacity: 0.7;
  }
`;
