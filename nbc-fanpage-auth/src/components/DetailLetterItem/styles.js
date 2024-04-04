import styled, { keyframes } from 'styled-components';
import cardbg from 'assets/cardbg.jpg';

const TYPE = {
  cancel: 'grey',
  edit: '#04AA6D',
  delete: '#f44336',
  default: '#3498db',
};

export const Detail = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DetailContainer = styled.div`
  position: relative;
  padding: 2rem;
  border: 1px solid #000;
  border-radius: 10px;
  overflow: hidden;

  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    background: url(${cardbg});
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
`;

export const DetailHeader = styled.header`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: bold;

  h2 {
    font-size: 2rem;
  }
`;

export const DetailInfo = styled.div`
  display: flex;
  width: 60vw;
`;
export const DetailImg = styled.label`
  position: relative;

  input {
    display: none;
  }

  img {
    border: 1px solid #ddd;
    min-width: 150px;
    max-width: 200px;
    min-height: 150px;
    max-height: 300px;
    ${(props) => props.style && { ...props.style }}
  }

  div {
    padding: 5px;
    position: absolute;
    bottom: 5%;
    right: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 50%;
    border: 1px solid #ccc;
    z-index: 99;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    svg {
      width: 20px;
      height: 20px;
      color: #ccc;
      transform: translateX(0.5px);
    }
  }
`;

const blink = keyframes`
   50% {
      color: #eee;
    }
`;

export const DetailDesc = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 20px;

  div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dotted #000;
    line-height: 2rem;
  }
  input {
    text-align: end;
    font-size: 1rem;
    animation: ${blink} 2s linear infinite;
  }

  div:last-child {
    flex-grow: 2;
    max-width: 60vw;
    p {
      width: 100%;
      word-break: break-all;
    }
    textarea {
      padding: 1rem 0.1rem;
      width: 100%;
      font-size: 1.2rem;
      line-height: 1.4rem;
      resize: none;
      word-break: break-all;
    }
  }
`;

export const DetailBtnBox = styled.div`
  padding: 0.4rem 1rem;
  text-align: end;
`;

export const DetailBtn = styled.button`
  margin-left: 4px;
  padding: 0.4rem 1rem;
  background-color: ${(props) => TYPE[props.type]};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  cursor: pointer;
`;
