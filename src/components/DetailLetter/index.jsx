import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DetailLetterItem from 'components/DetailLetterItem';
import * as S from './styles';

export default function DetailLetter({ id, messages, setMessages }) {
  const { nickname, content, createdAt, writedTo } = messages?.filter(
    (message) => message.id === id,
  )[0];
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const navigate = useNavigate();

  const handleEdit = () => {
    if (!isEdit) {
      setIsEdit((prev) => !prev);
      return;
    }

    if (content === editContent) {
      window.alert('변경 사항이 없습니다.');
      setIsEdit((prev) => !prev);
      return;
    }

    if (window.confirm('수정하시겠습니까?')) {
      setMessages((messages) => {
        const target = messages.filter((message) => message.id === id)[0];
        const copy = messages.filter((message) => message.id !== id);
        target.content = editContent;
        setIsEdit((prev) => !prev);

        return [...copy, target];
      });
    }
  };

  const handleDelete = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      setMessages((messages) =>
        messages.filter((message) => message.id !== id),
      );
      navigate('/');
    }
  };

  const handleChangeContent = (e) => {
    if (e.target.value.length > 100) {
      alert('over 100 characers');
      return;
    }
    setEditContent(e.target.value);
  };

  return (
    <S.Detail>
      <DetailLetterItem
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleChangeContent={handleChangeContent}
        nickname={nickname}
        content={content}
        createdAt={createdAt}
        writedTo={writedTo}
        isEdit={isEdit}
        editContent={editContent}
        id={id}
      />
    </S.Detail>
  );
}
