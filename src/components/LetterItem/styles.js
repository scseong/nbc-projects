import styled from 'styled-components';

export const Letter = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;

  & > div {
    & > div {
      display: flex;
      align-items: flex-end;
      flex-wrap: wrap;

      span {
        max-width: 70vw;
        display: inline-block;
        position: relative;
        background-color: white;
        padding: 13px;
        border-radius: 10px;
        font-size: 18px;
        margin-right: 5px;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
      }
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 20px;
    margin-right: 10px;
  }

  @media screen and (max-width: 800px) {
    div > div {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.4rem;
    }

    h5 {
      font-size: 0.8rem;
    }
  }
`;
