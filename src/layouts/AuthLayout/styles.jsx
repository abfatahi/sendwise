import styled from 'styled-components';
import { rem } from 'polished';

export default styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2fr 1fr;
  overflow:hidden !important;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  p.error-msg {
    text-align: left !important;
    margin: 0px;
    padding: 0;
    margin-top: 0.5em;
    font-size: ${rem('13px')};
    letter-spacing: ${rem('0.13px')};
    color: #e24307;
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

export const LeftFrame = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 50% !important;
    width: 60%;
    object-fit: contain;
    padding: 0 !important;
    margin: 0 important;
  }

  h1 {
    font-weight: bold;
    font-size: 3rem;
    color: #e24307;
  }

  h2 {
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RightFrame = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #3e464e;

  .logo {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 80px;
    height: 80px;
    border: 1px solid #efefef;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 40px;
    letter-spacing: 0.0015em;
    color: #fff;
    margin-bottom: 1rem !important;
  }

  p {
    color: #fff;

    a {
      font-weight: bold;
      color: #e24307;
    }
  }

  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 23px;
    letter-spacing: 0.0015em;
    color: #999999;
  }

  form {
    margin-top: 2rem;
    width: 70%;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;

    .img {
      width: 180px;
      height: 180px;
    }

    @media screen and (max-width: 1030px) {
      width: 80%;
    }

    @media screen and (max-width: 425px) {
      width: 90%;
    }

    .group {
      width: 100%;
      display: flex;
      gap: 1em;

      @media screen and (max-width: 425px) {
        flex-direction:column;
      }

      .input{
        width:100%;
      }
    }
  }

  .input_field_wrapper {
    .label {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: #666666;
      margin-bottom: 0.3em;
    }
  }

  .others_wrapper {
    display: flex;
    justify-content: space-between;
  }
`;
