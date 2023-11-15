import React, { useState } from 'react';
import defaultImg from 'assets/defaultUser.jpg';
import { MEMBERS } from 'constants/member';
import { v4 as uuid } from 'uuid';
import * as S from './styles';

export default function AddLetter({ memberId, handleAdd }) {
  const member = MEMBERS.filter((m) => memberId === m.englishName)[0];
  const [message, setMessage] = useState({
    nickname: '',
    content: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    handleAdd(message);
    setMessage({ nickname: '', content: '' });
  };

  const handleChange = (e) => {
    setMessage((prev) => ({
      id: uuid(),
      avatar: '',
      createdAt: Date.now(),
      writedTo: memberId,
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <S.AddLetter>
      <form onSubmit={submitHandler}>
        <div>
          <img src={defaultImg} alt="" />
          <span>To. {member.englishName}</span>
        </div>
        <input
          type="text"
          name="nickname"
          placeholder="Write your nickname"
          value={message.nickname}
          onChange={handleChange}
        />
        <textarea
          rows="4"
          name="content"
          placeholder="Write a message"
          value={message.content}
          onChange={handleChange}
        />
        <button>Send</button>
      </form>
    </S.AddLetter>
  );
}
