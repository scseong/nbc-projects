import React from 'react';
import Member from 'components/Member';
import Letter from 'components/Letter';
import LetterForm from 'components/LetterForm';

export default function MemberTemplate() {
  return (
    <>
      <Member />
      <Letter />
      <LetterForm />
    </>
  );
}
