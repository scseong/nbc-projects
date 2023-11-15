import React from 'react';
import * as S from './styles';

export default function LetterItem({
  nickname,
  avatar,
  content,
  createdAt,
  id,
}) {
  return (
    <S.Letter>
      <img src={!avatar ? require(`assets/default.jpg`) : avatar} alt="" />
      <div>
        <h4>{nickname}</h4>
        <div>
          <span title={content}>{content}</span>
          <h5>{new Date(createdAt).toLocaleString().substring(2, 21)}</h5>
        </div>
      </div>
    </S.Letter>
  );
}
