import React from 'react';
import MemberList from 'components/MemberList';
import { MEMBERS } from 'constants/member';
import { StSection } from './styles';

export default function Member({ memberId, onUpdate }) {
  return (
    <StSection>
      <h2>MEMBER</h2>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        {MEMBERS.map((member) => (
          <MemberList
            key={member.id}
            id={member.englishName}
            clicked={member.englishName === memberId}
            onUpdate={onUpdate}
          >
            {member.englishName}
          </MemberList>
        ))}
      </ul>
    </StSection>
  );
}
