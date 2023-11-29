import React, { useEffect, useState } from 'react';
import defaultImg from 'assets/defaultUser.jpg';
import { v4 as uuid } from 'uuid';
import * as S from './styles';
import { useMemberId } from 'hooks/useMemberId';
import { useLetter } from 'hooks/useLetter';
import { createLetter } from 'redux/modules/letter';

export default function LetterForm() {
  const { memberId } = useMemberId();
  const { setLetters } = useLetter();

  const [newLetter, setNewLetter] = useState({
    id: '',
    avatar: '',
    writedTo: memberId,
    createdAt: '',
    nickname: '',
    content: '',
  });

  useEffect(() => {
    setNewLetter((prev) => ({ ...prev, writedTo: memberId }));
  }, [memberId]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!newLetter.nickname.trim()) {
      alert('Nickname을 입력해주세요.');
      return;
    }

    if (!newLetter.content.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

    setLetters(
      { ...newLetter, id: uuid(), createdAt: Date.now() },
      createLetter,
    );

    setNewLetter({
      id: '',
      avatar: '',
      writedTo: memberId,
      createdAt: '',
      nickname: '',
      content: '',
    });
  };

  const handleChange = (e) => {
    setNewLetter((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <S.LetterForm>
      <form onSubmit={submitHandler}>
        <div>
          <img src={defaultImg} alt="" />
          <span>To. {memberId}</span>
        </div>
        <S.NicknameInput
          type="text"
          name="nickname"
          maxLength="14"
          placeholder="Write your nickname (up to 14 characters)"
          value={newLetter.nickname}
          onChange={handleChange}
        />
        <textarea
          rows="3"
          name="content"
          maxLength="100"
          placeholder="Write a message (up to 100 characters)"
          value={newLetter.content}
          onChange={handleChange}
        />
        <button>Send</button>
      </form>
    </S.LetterForm>
  );
}
