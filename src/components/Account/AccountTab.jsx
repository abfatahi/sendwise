import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Index = (props) => {
  const Navigate = useNavigate();
  return (
    <Container onClick={() => Navigate(props.link)}>
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

  @media screen and (max-width:425px){
    width:150px;
    height:150px;
    padding:1rem;
  }

  .icon {
    width: 30px;
    height: 50px;
    color: #000;
    background: transparent;
  }

  :hover {
    background: #e24307;

    p {
      color: #fff;
    }

    .icon {
      color: #fff;
    }
  }
`;
