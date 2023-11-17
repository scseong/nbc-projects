import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { timestampToDate } from 'utils/date';

export default function LetterItem({
  nickname,
  avatar,
  content,
  createdAt,
  id,
}) {
  return (
    <S.Letter>
      <Link to={`detail/${id}`}>
        <S.LetterImg>
          <img
            src={!avatar ? require(`assets/defaultUser.jpg`) : avatar}
            alt=""
          />
        </S.LetterImg>
        <S.LetterInfo>
          <div>
            <span>{nickname}</span>
            <span>{timestampToDate(createdAt)}</span>
          </div>
          <div>
            <p title={content}>{content}</p>
          </div>
        </S.LetterInfo>
      </Link>
    </S.Letter>
  );
}
