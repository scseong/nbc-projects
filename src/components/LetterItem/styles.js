import styled from 'styled-components';

export const Letter = styled.div`
  margin-bottom: 20px;
  a {
    display: grid;
    grid-template-columns: 10% 90%;
    width: 100%;
  }
  &:hover {
    scale: 1.02;
  }
`;

export const LetterImg = styled.div`
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  }

  @media screen and (max-width: 600px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const LetterInfo = styled.div`
  div:first-child {
    display: flex;
    flex-grow: 0;
    justify-content: space-between;
    margin-bottom: 0.8rem;

    span:first-child {
      font-size: 1.4rem;
    }
  }

  div:last-child {
    display: block;
    background-color: white;
    border-radius: 6px;

    p {
      font-size: 1.2rem;
      line-height: 1.4rem;
      padding: 1rem;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      border-radius: 6px;
      box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    }
  }
`;
