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

    if (!message.nickname.trim()) {
      alert('Nickname을 입력해주세요.');
      return;
    }

    if (!message.content.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

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
        <S.NicknameInput
          type="text"
          name="nickname"
          maxLength="14"
          placeholder="Write your nickname (up to 14 characters)"
          value={message.nickname}
          onChange={handleChange}
        />
        <textarea
          rows="3"
          name="content"
          maxLength="100"
          placeholder="Write a message (up to 100 characters)"
          value={message.content}
          onChange={handleChange}
        />
        <button>Send</button>
      </form>
    </S.AddLetter>
  );
}
