import React from 'react';
import {
  // Hero1,
  Hero2,
  Logo,
} from '../../assets/images';
// import { Carousel } from 'react-responsive-carousel';
import Container, { RightFrame, LeftFrame } from './styles';
import Aos from 'aos';

const Index = (props) => {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container>
      <LeftFrame>
        {/* <Carousel> */}
        <img src={Hero2} alt='Hero' />
        <br />
        <h2>Welcome to</h2>
        <h1>SENDWISE</h1>
        {/* </Carousel> */}
      </LeftFrame>
      <RightFrame>
        <div className='logo'>
          <img src={Logo} alt='Logo' />
        </div>
        <h3 data-aos='fade-left' data-aos-duration='1000'>
          {props.title}
        </h3>
        <p data-aos='fade-left' data-aos-duration='1000'>
          {props.subtitle}
        </p>
        {props.content}
      </RightFrame>
    </Container>
  );
};

export default Index;
