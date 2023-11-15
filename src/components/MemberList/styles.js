import { COLORS } from 'constants/colors';
import styled from 'styled-components';

export const StPolaroid = styled.div`
  padding: 1rem;
  background-color: ${(props) => (props.$clicked ? COLORS.blue.sea : 'white')};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.1s ease-in-out;
  border: 5px double skyblue;

  div > img {
    width: 150px;
    height: 220px;
  }

  div > p {
    font-size: 1.4rem;
    line-height: 2.2rem;
    text-align: center;
    font-weight: bold;
    color: ${(props) => (props.$clicked ? 'white' : COLORS.blue.congress)};
  }

  &:nth-child(even) {
    rotate: 2deg;
  }
  &:nth-child(odd) {
    rotate: -1deg;
  }

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 800px) {
    background-color: ${(props) =>
      props.$clicked ? COLORS.blue.ice : 'white'};
    padding: 0.2rem;
    div > img {
      width: 100px;
      height: 100px;
    }

    div > p {
      background: none;
      font-size: 1.1rem;
    }

    &:nth-child(odd) {
      rotate: 0deg;
    }
    &:nth-child(even) {
      rotate: 0deg;
    }
  }
`;
