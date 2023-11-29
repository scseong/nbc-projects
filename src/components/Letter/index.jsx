import React from 'react';
import LetterItem from 'components/LetterItem';
import * as S from './styles';
import { useLetter } from 'hooks/useLetter';
import { useMemberId } from 'hooks/useMemberId';

export default function Letter() {
  const [letters] = useLetter();
  const [memberId] = useMemberId();
  const filteredLetters = letters?.filter((v) => v.writedTo === memberId);

  return (
    <S.Letter>
      <h3>To. {memberId}</h3>
      {!!filteredLetters.length || (
        <S.EmptyLetter>
          <strong>
            No fan letters have been registered yet. Be the star of your first
            fan letter!
          </strong>
        </S.EmptyLetter>
      )}
      {filteredLetters?.map((item) => {
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
