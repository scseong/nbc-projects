import styled, { css } from 'styled-components';

export const StLoginFormContainer = styled.section`
  margin: auto;
  padding: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

export const StSignForm = styled.form`
  width: 90%;

  div {
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin-top: 1rem;
    border: 1px solid #000;
    border-radius: 10px;

    &:last-child {
      border: none;
      outline: none;
    }
  }
`;

const blind = css`
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const StInputBox = styled.div`
  input {
    padding: 1rem 1rem 1rem 0;
    flex-grow: 2;
  }

  label {
    display: flex;
    align-items: center;
    caret-color: transparent;
    span {
      padding: 0 1rem;
      display: flex;
      align-items: center;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  &:focus-within {
    border-color: transparent;
    outline: 2px solid green;
  }
`;

export const StSubmitButtonBox = styled.div`
  border: none !important;
`;

export const StButton = styled.button`
  margin-bottom: 1rem;
  padding: 1rem;
  width: 100%;
  border: none;
  background-color: #008cba;
  border-radius: 10px;
  font-size: 1rem;
  line-height: 1rem;
  color: white;
  cursor: pointer;

  svg {
    margin-right: 5px;
    transform: translateY(1px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StGoToSignUpBtn = styled.button`
  font-size: 1rem;
  font-weight: bold;
  line-height: 2rem;
  color: #666;
  cursor: pointer;
`;

export const StError = styled.div`
  margin-top: 1rem;
  font-weight: bold;
  color: #e01e5a;
`;
