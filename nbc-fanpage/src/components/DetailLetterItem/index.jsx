import React from 'react';
import * as S from './styles';
import { timestampToDate } from 'utils/date';

export default function DetailLetterItem({
  handleEdit,
  handleDelete,
  handleChangeContent,
  nickname,
  content,
  createdAt,
  writedTo,
  isEdit,
  editContent,
  id,
}) {
  return (
    <S.DetailContainer>
      <S.DetailHeader>
        <h2>NewJeans</h2>
        <span>No. {id?.slice(0, 8)}</span>
      </S.DetailHeader>
      <S.DetailInfo>
        <S.DetailImg>
          <img src={require(`assets/${writedTo}.jpg`)} alt="" />
        </S.DetailImg>
        <S.DetailDesc>
          <div>
            <h3>닉네임</h3>
            <p>{nickname}</p>
          </div>
          <div>
            <h3>작성일</h3>
            <p>{timestampToDate(createdAt)}</p>
          </div>
          <div>
            <h3>내용</h3>
          </div>
          <div>
            {isEdit ? (
              <textarea
                cols="30"
                rows="6"
                maxLength="100"
                value={editContent}
                onChange={handleChangeContent}
              />
            ) : (
              <p>{content}</p>
            )}
          </div>
        </S.DetailDesc>
      </S.DetailInfo>
      <S.DetailBtnBox>
        <S.DetailBtn onClick={handleEdit} type={isEdit ? 'edit' : 'default'}>
          {isEdit ? '완료' : '수정'}
        </S.DetailBtn>
        {!isEdit ? (
          <S.DetailBtn onClick={handleDelete} type="delete">
            삭제
          </S.DetailBtn>
        ) : undefined}
      </S.DetailBtnBox>
    </S.DetailContainer>
  );
}
