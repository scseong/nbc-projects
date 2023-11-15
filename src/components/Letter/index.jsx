import React from 'react';
import { MEMBERS } from 'constants/member';
import LetterItem from 'components/LetterItem';
import * as S from './styles';

export default function Letter({ memberId, messages }) {
  const memberData = MEMBERS.filter(
    (member) => member.englishName === memberId,
  )[0];
  const filterdData = messages?.filter(
    (v) => v.writedTo === memberData.englishName,
  );

  return (
    <S.Letter>
      <S.H3>To. {memberData.englishName}</S.H3>
      {filterdData?.map((item) => {
        const { nickname, avatar, content, writedTo, createdAt, id } = item;
        return (
          <LetterItem
            nickname={nickname}
            avatar={avatar}
            content={content}
            writedTo={writedTo}
            createdAt={createdAt}
            id={id}
            key={id}
          />
        );
      })}
    </S.Letter>
  );
}
