import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { accountSelector } from '../../redux/reducers/account';

const Index = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('user'));
  const { showBalance } = useSelector(accountSelector);
  return (
    <Container>
      {loggedInUser && (
        <>
          <div className='first__row'>
            <div className='balance__group'>
              <div className='available__balance'>
                # {showBalance ? '450,000' : 'XXXXXX'}
              </div>
              <p>Book Balance: #{showBalance ? '500,000' : 'XXXXXX'}</p>
            </div>
            <FaCheckCircle className='icon' />
          </div>
          <div className='second_row'>
            <h3>{loggedInUser.fullname}</h3>
            <h4>0089728686</h4>
          </div>
        </>
      )}
    </Container>
  );
};

export default Index;

const Container = styled.div`
  position: relative;
  width: 40%;
  height: 200px;
  padding: 2rem 1rem;
  border-radius: 10px;
  background: #3e464e;

  @media screen and (max-width: 1024px) {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 180px;
  }

  .first__row {
    display: flex;
    justify-content: space-between;

    .icon {
      width: 24px;
      height: 24px;
      color: #057a07;
      background: transparent;
    }

    .balance__group {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .available__balance {
        font-size: 2rem;
        font-weight: bold;
        color: #fff;

        @media screen and (max-width:425px){
          font-size:1.3rem;
        }
      }

      p {
        color: #fff;
      }
    }
  }

  .second_row {
    position: absolute;
    right: 1em;
    bottom: 2em;
    text-align: right;

    h3 {
      font-size: 1rem;
      color: #e24307;
      margin-bottom: 10px;
    }

    h4 {
      font-size: 1rem;
      color: #fff;
    }
  }
`;
