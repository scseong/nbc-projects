import { COLORS } from 'constants/colors';
import styled from 'styled-components';

export const Letter = styled.section`
  padding: 3rem;

  h3 {
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
    rotate: -3deg;
  }
`;

export const EmptyLetter = styled.div`
  padding: 1rem;
  width: 100%;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 6px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 2rem;
`;
