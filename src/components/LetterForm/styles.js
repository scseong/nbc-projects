import styled from 'styled-components';
import { COLORS } from 'constants/colors';

export const LetterForm = styled.section`
  padding: 0 3rem 3rem;

  form {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 20px;
    padding: 1rem;

    & > div {
      display: flex;
      align-items: center;
      img {
        margin-right: 6px;
        width: 40px;
        height: 40px;
        border: 1px solid #333;
        border-radius: 50%;
      }
      span {
        font-weight: bold;
      }
    }
    textarea {
      padding: 1rem;
      border: 1px dashed #000;
      resize: none;
      margin-bottom: 5px;
      border-radius: 5px;
    }
    button {
      padding: 0.4rem 0;
      background-color: ${COLORS.blue.sea};
      font-weight: bold;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export const NicknameInput = styled.input`
  padding: 0.3rem 0;
  font-size: 1rem;
  line-height: 2rem;
  text-decoration: underline;
  color: ${(props) => (props.$isOver ? 'red' : 'inherit')};
`;
