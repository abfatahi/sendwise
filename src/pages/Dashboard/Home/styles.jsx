import styled from 'styled-components';

export default styled.div`
  width: 100%;

  p {
    margin-bottom: 2rem !important;
  }

  h3 {
    font-weight: bold;
    text-transform: uppercase;

    @media screen and (max-width: 425px) {
      font-size: 0.8rem;
    }
  }

  .header {
    display: flex;
    width: 40%;
    justify-content: space-between;
    margin-bottom: 1rem;

    @media screen and (max-width: 1024px) {
      width: 60%;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    @media screen and (max-width: 425px) {
      b,
      h3 {
        font-size: 0.8rem;
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

  .card_group {
    display: flex;
    gap: 1.5rem;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }

  .assets {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;

    .group {
      display: flex;
      gap: 1.5rem;

      @media screen and (max-width: 320px) {
        flex-direction: column;
      }
    }
  }
`;
