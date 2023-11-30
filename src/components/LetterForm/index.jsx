import React, { useEffect, useState } from 'react';
import defaultImg from 'assets/defaultUser.jpg';
import { v4 as uuid } from 'uuid';
import * as S from './styles';
import { useMemberId } from 'hooks/useMemberId';
import { useDispatch, useSelector } from 'react-redux';
import { __createLetter } from 'redux/modules/letterSlice';

export default function LetterForm() {
  const user = useSelector(({ auth }) => auth.user);
  const { memberId } = useMemberId();
  const dispatch = useDispatch();

  const [newLetter, setNewLetter] = useState({
    id: '',
    avatar: user.avatar ?? '',
    writedTo: memberId,
    createdAt: '',
    nickname: user.nickname,
    content: '',
  });

  useEffect(() => {
    setNewLetter((prev) => ({ ...prev, writedTo: memberId }));
  }, [memberId]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!newLetter.content.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

    dispatch(
      __createLetter({
        ...newLetter,
        id: uuid(),
        createdAt: Date.now(),
        userId: user.userId,
      }),
    );

    setNewLetter({
      id: '',
      avatar: user.avatar,
      writedTo: memberId,
      createdAt: '',
      nickname: user.nickname,
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
        <S.Nickname>
          From. <span>{user.nickname}</span>
        </S.Nickname>
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
