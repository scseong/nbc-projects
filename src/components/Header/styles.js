import { COLORS } from 'constants/colors';
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
      flex: 1 1 0;
      gap: 2rem;

      li {
        text-transform: uppercase;
        a.active {
          color: ${COLORS.blue.congress};
          text-shadow: 1px 1px 2px ${COLORS.blue.sea};
        }
        a:hover {
          font-weight: bold;
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
    @media screen and (max-width: 500px) {
      svg {
        width: 140px;
        height: 60px;
      }
    }
  }
`;
