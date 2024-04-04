import styled from 'styled-components';
import { COLORS } from 'constants/colors';

export const StSection = styled.section`
  padding: 0 3rem 2rem;
  width: 100%;
  text-align: center;

  h2 {
    margin-bottom: 2rem;
    padding: 1rem;
    display: inline-block;
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2rem;
    border-radius: 10px;
    color: ${COLORS.blue.congress};
    background: -webkit-repeating-linear-gradient(
      -45deg,
      #b3e5fc,
      #b3e5fc 3px,
      #e1f5fe 3px,
      #e1f5fe 7px
    );
    background: repeating-linear-gradient(
      -45deg,
      #b3e5fc,
      #b3e5fc 3px,
      #e1f5fe 3px,
      #e1f5fe 7px
    );
    box-shadow:
      rgba(0, 150, 199, 0.4) 5px 5px,
      rgba(0, 150, 199, 0.3) 10px 10px,
      rgba(0, 150, 199, 0.2) 15px 15px,
      rgba(0, 150, 199, 0.1) 20px 20px,
      rgba(0, 150, 199, 0.05) 25px 25px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
`;
