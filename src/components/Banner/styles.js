import styled from 'styled-components';
import bg from 'assets/bg2.jpg';

export const StBanner = styled.section`
  padding: 0 3rem 2rem;

  /* TODO: Image resize */
  div {
    margin: 0 auto;
    height: 60vh;
    border: 6px double #fff;
    background: no-repeat url(${bg});
    background-size: cover;

    @media screen and (max-width: 800px) {
      background-size: 100% 100%;
    }

    @media screen and (min-width: 1600px) {
      background-size: 100% 100%;
    }
  }
`;
