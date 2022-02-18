import React from 'react';
import { FaCheckCircle, FaExchangeAlt, FaHistory } from 'react-icons/fa';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { accountSelector } from '../../redux/reducers/account';
// import { Selectfield } from '../../reusables';
// import { Radio } from 'antd';

const Index = () => {
  const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
  let { EURBalance, USDBalance, NGNBalance } = loggedInUser;
  let totalBalance =
    parseFloat(EURBalance) * 1.14 +
    parseFloat(USDBalance) +
    parseFloat(NGNBalance) * 0.0024;
  const { showBalance } = useSelector(accountSelector);
  return (
    <Container>
      {loggedInUser && (
        <>
          <div className='first__row'>
            <div className='total__balance'>
              <span>USD</span>&nbsp;
              {showBalance
                ? totalBalance.toFixed(2)
                : 'XXXXXX'}
            </div>
            <div className='btn__group'>
              <div className='btn_tab'>
                <FaExchangeAlt />
                Transfer
              </div>
              <div className='btn_tab'>
                <FaHistory />
                Transactions
              </div>
            </div>
            <FaCheckCircle className='icon' />
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
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 24px;
      height: 24px;
      color: #5a75ff;
      background: transparent;
    }

    .total__balance {
      font-size: 3rem;
      font-weight: bold;
      color: #fff;

      span {
        font-size: 2rem;
        color: grey;

        @media screen and (max-width: 425px) {
          font-size: 1.7rem;
        }
      }
      @media screen and (max-width: 425px) {
        font-size: 2.3rem;
      }
    }

    .btn__group {
      display: flex;
      width: 100%;
      margin-top: 1rem;
      gap: 1rem;

      justify-content: center;
    }

    .btn_tab {
      width: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.3em;
      background: #5a75ff;
      color: #fff;
      padding: 0.5rem 0;
      font-weight: bold;
      cursor: pointer;
      border-radius: 5px;

      .icon {
        width: 1rem;
        height: 1rem;
      }

      :hover {
        opacity: 0.7;
      }
    }
  }

  // .default_currency {
  //   position: absolute;
  //   left: 1em;
  //   top: 1em;
  //   width:80px;

  //   h3 {
  //     font-size: 1rem;
  //     color: #5a75ff;
  //     margin-bottom: 10px;
  //   }

  //   h4 {
  //     font-size: 0.7rem;
  //     color: #fff;
  //   }
  // }
`;
