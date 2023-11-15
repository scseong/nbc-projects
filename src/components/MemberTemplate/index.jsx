import React, { useState } from 'react';
import Member from 'components/Member';
import Letter from 'components/Letter';
import { MEMBERS } from 'constants/member';
import AddLetter from 'components/AddLetter';

export default function MemberTemplate() {
  const [memberId, setMemberId] = useState(MEMBERS[0].englishName);
  const [messages, setMessages] = useState([]);

  const handleUpdate = (member) => setMemberId(member);
  const handleAdd = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <>
      <Member memberId={memberId} onUpdate={handleUpdate} />
      <AddLetter memberId={memberId} handleAdd={handleAdd} />
      <Letter memberId={memberId} messages={messages} />
    </>
  );
}
