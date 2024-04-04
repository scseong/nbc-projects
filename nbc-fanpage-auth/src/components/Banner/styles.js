import styled from 'styled-components';
import bg from 'assets/bg2.jpg';

export const StBanner = styled.section`
  padding: 0 3rem 2rem;

  div {
    margin: 0 auto;
    height: 50vh;
    border: 6px double #fff;
    background: no-repeat url(${bg});
    background-size: 100% 100%;

    @media screen and (min-width: 768px) {
      background-size: cover;
    }

    @media screen and (min-width: 2000px) {
      height: 30vh;
    }
  }
`;
