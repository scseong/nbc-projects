import React from 'react';
import { useMemberId } from 'hooks/useMemberId';
import * as S from './styles';

export default function MemberList({ children: name }) {
  const [memberId, setMemberId] = useMemberId(name);
  const handleClick = () => setMemberId(name);

  return (
    <S.MemberList onClick={handleClick} $clicked={memberId === name}>
      <div>
        <img src={require(`assets/${name}.jpg`)} alt={name} />
        <p>{name}</p>
      </div>
    </S.MemberList>
  );
}
