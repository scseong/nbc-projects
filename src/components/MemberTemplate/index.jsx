import React, { useState } from 'react';
import Member from 'components/Member';
import Letter from 'components/Letter';
import { MEMBERS } from 'constants/member';
import AddLetter from 'components/AddLetter';
import useLocalStorage from 'hooks/useLocalStorage';

export default function MemberTemplate() {
  const [memberId, setMemberId] = useState(MEMBERS[0].englishName);
  const [messages, setMessages] = useLocalStorage('message', []);

  const handleUpdate = (member) => setMemberId(member);
  const handleAdd = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <>
      <Member memberId={memberId} onUpdate={handleUpdate} />
      <Letter memberId={memberId} messages={messages} />
      <AddLetter memberId={memberId} handleAdd={handleAdd} />
    </>
  );
}
