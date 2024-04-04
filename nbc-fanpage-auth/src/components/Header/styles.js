import { COLORS } from 'constants/colors';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StHeader = styled.header`
  width: 100%;
  background-color: inherit;
  color: white;

  nav {
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      align-items: center;
      flex: 1 1 0;
      gap: 2rem;

      li {
        text-transform: uppercase;

        button {
          font-size: 1rem;
          color: white;
          cursor: pointer;
        }
      }
    }
    ul:last-child {
      justify-content: flex-end;
    }

    h1 {
      display: inline-block;
      flex: 2 1 0;
      text-align: center;

      svg {
        transition: all 0.2s ease-in-out;
      }

      svg:hover {
        stroke-width: 3;
      }
    }
    @media screen and (max-width: 700px) {
      svg {
        width: 160px;
        height: 60px;
      }
      a,
      button {
        font-size: 14px !important;
      }
      ul {
        gap: 8px !important;
      }
    }
  }
`;

export const StNavLink = styled(NavLink)`
  position: relative;
  &.active {
    font-weight: bold;
    color: ${COLORS.blue.congress};
  }

  &.active:after {
    position: absolute;
    top: -5px;
    left: 50%;
    width: 6px;
    height: 6px;
    background-color: ${COLORS.blue.congress};
    border-radius: 50%;
    content: '';
    opacity: 0.5;
    transform: translate(-50%, -50%);
  }
`;
