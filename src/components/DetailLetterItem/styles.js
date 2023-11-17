import styled from 'styled-components';
import cardbg from 'assets/cardbg.jpg';

const TYPE = {
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
export const DetailImg = styled.div`
  img {
    border: 1px solid #000;
  }
`;
export const DetailDesc = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 2;

  div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dotted #000;
    line-height: 2rem;
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
  text-align: end;
`;

export const DetailBtn = styled.button`
  width: 60px;
  height: 30px;
  background-color: ${(props) => TYPE[props.type]};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
`;
