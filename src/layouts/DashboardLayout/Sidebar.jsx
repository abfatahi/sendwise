import React from 'react';
import styled from 'styled-components';
import {
  FaBuffer,
  FaWallet,
  FaExchangeAlt,
  FaSignOutAlt,
  FaUserAlt,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toggleSidebar } from '../../redux/reducers/sidebar';
import { useDispatch } from 'react-redux';

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = React.useState('Dashboard');
  const loggedInUser = JSON.parse(localStorage.getItem('user'));
  React.useEffect(() => {
    const tab = localStorage.getItem('tab');
    setActiveTab(tab);
  }, []);

  return (
    <Container showSidebar={props.showSidebar}>
      <Close onClick={props.toggleSidebar} />
      <div className='user_info'>
        <FaUserAlt className='avatar' />
        <div className='group'>
          <h2>{loggedInUser.fullname}</h2>
          <h3>0089728686</h3>
        </div>
      </div>

      <SidebarTabs
        onClick={() => {
          localStorage.setItem('tab', 'Dashboard');
          dispatch(toggleSidebar());
        }}
        className={activeTab === 'Dashboard' ? 'active' : ''}
        to={'/'}
      >
        <FaBuffer className='icon' />
        <p>Dashboard</p>
      </SidebarTabs>
      <SidebarTabs
        onClick={() => {
          localStorage.setItem('tab', 'Accounts');
          dispatch(toggleSidebar());
        }}
        className={activeTab === 'Accounts' ? 'active' : ''}
        to={'/account'}
      >
        <FaWallet className='icon' />
        <p>Accounts</p>
      </SidebarTabs>
      <SidebarTabs
        onClick={() => {
          localStorage.setItem('tab', 'Transfers');
          dispatch(toggleSidebar());
        }}
        className={activeTab === 'Transfers' ? 'active' : ''}
        to={'/transfer'}
      >
        <FaExchangeAlt className='icon' />
        <p>Transfers</p>
      </SidebarTabs>
      <SidebarTabs
        onClick={() => {
          localStorage.removeItem('token');
          dispatch(toggleSidebar());
        }}
        className='logout__btn'
        to={'/login'}
      >
        <FaSignOutAlt className='icon' />
        <p>Logout</p>
      </SidebarTabs>
      <div className='overlay' onClick={props.toggleSidebar} />
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100vh - 60px);
  width: 250px;
  background: #3e464e;
  padding: 1rem 0 0;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  z-index: ${({ showSidebar }) => (showSidebar ? 20 : 0)};

  @media screen and (max-width: 425px) {
    display: ${({ showSidebar }) => (showSidebar ? 'flex' : 'none')};
    height: 100vh;
    top: 0;
    z-index: 1000;
    .overlay {
      position: fixed;
      right: 0;
      top: 0;
      height: 100vh;
      width: calc(100vw - 250px);
      background: linear-gradient(
        99.11deg,
        rgba(49, 66, 79, 0.71) 0.83%,
        rgba(10, 11, 12, 0.64) 100%
      );
      display: none;

      @media screen and (max-width: 425px) {
        display: ${({ showSidebar }) => (showSidebar ? 'block' : 'none')};
        z-index: 900;
      }
    }
  }

  .logout__btn {
    position: absolute;
    bottom: 5rem;
  }

  .active {
    background: #e24307 !important;
    border-left: 5px solid #fff !important;

    p,
    .icon {
      color: #fff !important;
    }

    :hover {
      opacity: 0.7;
    }
  }

  .user_info {
    display: flex;
    width: 100%;
    padding: 1rem;
    align-items: center;
    margin-bottom: 3rem;
    gap: 0.5rem;

    .avatar {
      width: 36px;
      height: 36px;
      color: #bdbdbd;
      border-radius: 50%;
      border: 1px solid #bdbdbd;
      padding: 5px;
    }
    .group {
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 1rem;
        color: #e24307;
      }

      h3 {
        font-size: 1rem;
        color: #fff;
      }
    }
  }
`;

const Close = styled(FaTimes)`
  width: 1.2rem;
  height: 1.2rem;
  color: #e24307;
  position: absolute;
  top: 1rem;
  right: 1rem;

  :hover {
    transition: 0s all ease-in-out linear;
  }

  @media screen and (min-width: 425px) {
    display: none;
  }

  @media screen and (max-width: 425px) {
    display: block;
  }
`;

const SidebarTabs = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1em 1em 1em 2em;
  cursor: pointer;
  text-decoration: none;

  .icon {
    width: 1.5em;
    height: 1.5em;
    margin-right: 1rem;
    color: #bdbdbd;
  }

  p {
    font-style: normal;
    font-size: 1rem;
    line-height: 23px;
    letter-spacing: 0.0015em;
    color: #bdbdbd;
    margin: 0;
    padding: 0;
  }

  :hover {
    opacity: 0.7;
  }
`;
