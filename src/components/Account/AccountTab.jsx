import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Index = (props) => {
  const Navigate = useNavigate();
  return (
    <Container
      transfer={props.transfer ? props.transfer : undefined}
      transactions={props.transactions ? props.transactions : undefined}
      onClick={() => Navigate(props.link)}
    >
      {props.icon}
      <p>{props.text}</p>
    </Container>
  );
};

export default Index;

const Container = styled.div`
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 10px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;

  ${(props) => css`
    ${props.transfer &&
    css`
      background: #057a07 !important;
      color: #fff !important;

      .icon {
        color: #fff !important;
      }

      :hover {
        opacity: 0.7;
      }
    `}

    ${props.transactions &&
    css`
      background: #5a75ff !important;
      color: #fff !important;

      .iconStyle {
        color: #fff !important;
      }

      :hover {
        opacity: 0.7;
      }
    `}
  `}

  @media screen and (max-width: 425px) {
    width: 150px;
    height: 150px;
    padding: 1rem;
  }

  .iconStyle {
    font-size: 2rem !important;
    color: #000;
    background: transparent;
  }

  p {
    font-size: 1.3rem;
  }

  :hover {
    background: #5a75ff;

    p {
      color: #fff;
      font-size: 1.3rem;
    }

    .iconStyle {
      color: #fff;
    }
  }
`;
