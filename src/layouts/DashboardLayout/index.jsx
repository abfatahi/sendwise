import React from 'react';
import styled from 'styled-components';
import { sidebarSelector, toggleSidebar } from '../../redux/reducers/sidebar';
import { useDispatch, useSelector } from 'react-redux';
import Content from './Content';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Index = (props) => {
  const { sidebarActive } = useSelector(sidebarSelector);
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <React.Fragment>
      <Container id='container'>
        <Navbar toggleSidebar={handleToggleSidebar} />
        <Sidebar
          showSidebar={sidebarActive}
          toggleSidebar={handleToggleSidebar}
        />
        <Content content={props.content} />
      </Container>
    </React.Fragment>
  );
};

export default Index;

const Container = styled.div`
  overflow-x: hidden !important;
`;
