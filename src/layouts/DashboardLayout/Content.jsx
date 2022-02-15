import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';
import { FaChevronCircleLeft } from 'react-icons/fa';

const Content = (props) => {
  return <Container>{props.content}</Container>;
};

export default Content;

const Container = styled.div`
  position: absolute;
  top: 60px;
  left: 250px;
  width: calc(100vw - 250px);
  height: -webkit-calc(100% - 60px);
  height: -moz-calc(100% - 60px);
  min-height: calc(100vh - 60px);
  background: #efefef;
  padding: 2rem 3rem;
  color: #666666;

  @media screen and (max-width: 425px) {
    width: 100vw;
    left: 0;
    padding: 1.5rem 1rem 2rem;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;

    @media screen and (max-width: 425px) {
      font-size: 1.3rem;
    }
  }

  p.error-msg {
    text-align: left !important;
    margin: 0px;
    padding: 0;
    margin-top: 0.5em;
    font-size: ${rem('13px')};
    letter-spacing: ${rem('0.13px')};
    color: #ff5e5e;
    opacity: 1;
  }

  p.success {
    text-align: left !important;
    margin: 0px;
    padding: 0;
    margin-top: 0.5em;
    font-size: ${rem('13px')};
    font-weight: bold;
    letter-spacing: ${rem('0.13px')};
    color: green;
    opacity: 1;
  }
`;

export const BackArrow = styled(FaChevronCircleLeft)`
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`;
