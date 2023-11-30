import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DetailLetterItem from 'components/DetailLetterItem';
import * as S from './styles';
import { useParams } from 'react-router-dom';
import { useLetter } from 'hooks/useLetter';
import { __deleteLetter, __updateLetter } from 'redux/modules/letterSlice';
import { useDispatch } from 'react-redux';

export default function DetailLetter() {
  const { letters } = useLetter();
  const dispatch = useDispatch();

  const { id: letterId } = useParams();
  const { id, nickname, content, createdAt, writedTo } =
    letters?.filter((message) => message.id === letterId)[0] ?? {};
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
      dispatch(__updateLetter({ letterId, editContent }));
      setIsEdit((prev) => !prev);
    }
  };

  const handleDelete = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      dispatch(__deleteLetter(letterId));
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
