import styled from 'styled-components';

export default styled.div`
  width: 100%;

  p {
    margin-bottom: 2rem !important;
  }

  h3 {
    font-weight: bold;
    text-transform: uppercase;

    
    @media screen and (max-width:425px){
        font-size:0.8rem;
    }
  }

  .header {
    display: flex;
    width: 40%;
    justify-content: space-between;
    margin-bottom: 1rem;

    @media screen and (max-width:1024px){
      width:60%;
    }

    @media screen and (max-width:768px){
      width:100%;
    }

    @media screen and (max-width:425px){
      b, h3{
        font-size:0.8rem;
      }
    }

    .balance__group {
      display: flex;
      gap: 1rem;

      b {
        color: grey;
      }
    }
  }

`;
