import React from 'react';
import styled from 'styled-components';
import { FaUser, FaBell, FaChevronCircleLeft, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Logo as logo } from '../../assets/images';

const Navbar = (props) => {
  const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
  const Navigate = useNavigate();
  const signout = () => {
    sessionStorage.removeItem('token');
    Navigate('/login');
  };

  return (
    <Container>
      <div className='group'>
        <Logout onClick={signout} />
        <h4>
          SEND<span>WISE ...</span>{' '}
        </h4>
      </div>
      <NavMenu>
        <NotificationIcon />
        <Avatar />
        <UserProfile>
          <p>{loggedInUser.fullName}</p>
          <span>{loggedInUser.accountNumber}</span>
        </UserProfile>
        <Logo src={logo} />
      </NavMenu>
      <Toggle onClick={props.toggleSidebar} />
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100vw;
  background: #ffffff;
  border-bottom: 1px solid #5a75ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  z-index: 500;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }

  .group {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  h4 {
    font-weight: normal;
    font-size: 18px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #5a75ff;

    @media screen and (max-width: 425px) {
      font-size: 14px;
    }

    span {
      font-weight: bold;
    }
  }
`;

const Logo = styled.img`
  width: 60px;
  height: 80%;
  object-fit: fill;
`;

const NavMenu = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const Toggle = styled(FaBars)`
  width: 1.2rem;
  height: 1.2rem;
  color: #5a75ff;

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

const UserProfile = styled.div`
  margin-right: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    letter-spacing: 0.001em;
    color: #666666;
    text-transform:capitalize;
    padding:0 !important;
    margin-bottom: 0.1em !important;
  }

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 0.9rem;
    text-align: center;
    letter-spacing: 0.015em;
    color: #5a75ff;
    margin: 0 !important;
    padding: 0 !important;
  }
`;

const NotificationIcon = styled(FaBell)`
  margin-right: 2.5rem;
  width: 1.2rem;
  height: 1.2rem;
  color: #5a75ff;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    transition: 0.2s all ease-in-out;
  }
`;

const Avatar = styled(FaUser)`
  margin-right: 0.5rem;
  width: 2rem;
  height: 2rem;
  color: #5a75ff;
  border-radius: 50%;
  padding: 1px;
`;

const Logout = styled(FaChevronCircleLeft)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  color: #5a75ff;

  @media screen and (max-width: 425px) {
    width: 1.2rem;
    height: 1.2rem;
  }

  :hover {
    opacity: 0.7;
    transition: 0.2s all ease-in-out;
  }
`;
