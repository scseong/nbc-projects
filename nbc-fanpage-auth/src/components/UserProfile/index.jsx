import React, { useState } from 'react';
import * as S from 'components/DetailLetterItem/styles';
import { Detail as StUserProfile } from 'components/DetailLetter/styles';
import { useDispatch, useSelector } from 'react-redux';
import defaultImg from 'assets/defaultUser.jpg';
import { useInput } from 'hooks/useInput';
import { FaCamera } from 'react-icons/fa6';
import { apiWithAuth, apiWithLetter } from 'apis/api';
import { setProfile } from 'redux/modules/authSlice';
import { __getLetters } from 'redux/modules/letterSlice';
import { toast } from 'react-toastify';

export default function UserProfile() {
  const [isEdit, setIsEdit] = useState(false);
  const [newImage, setNewImage] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const { user } = useSelector(({ auth }) => auth);
  const { letters } = useSelector(({ letters }) => letters);
  const nickname = useInput(user.nickname);
  const dispatch = useDispatch();
  const letterCount = letters.reduce((a, c) => {
    if (c.userId === user.userId) a++;
    return a;
  }, 0);

  const handleImageChange = (e) => {
    if (!isEdit) {
      toast.info('수정을 한 상태에서 변경해주세요.');
      setPreviewImage(null);
      return;
    }

    const file = e.target.files[0];

    if (!file) return;
    setNewImage(file);

    const previewImageUrl = URL.createObjectURL(file);
    setPreviewImage(previewImageUrl);
  };

  const handleEditBtn = () => setIsEdit((prev) => !prev);
  const handleEditProfile = async () => {
    if (!newImage && nickname.value === user.nickname) {
      handleEditBtn();
      return toast.info('변경사항이 없습니다.');
    }

    const formData = new FormData();
    if (newImage) {
      formData.append('avatar', newImage);
    }

    if (nickname.value !== user.nickname) {
      formData.append('nickname', nickname.value);
    }

    const { data: updatedProfile } = await apiWithAuth.patch(
      '/profile',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      },
    );
    const { nickname: updatedNickname, avatar: updatedAvatar } = updatedProfile;
    dispatch(setProfile({ ...updatedProfile }));

    const { data: userLetters } = await apiWithLetter.get(
      `/letters?userId=${user.userId}`,
    );

    if (userLetters.length) {
      const userLetterIds = userLetters.map((letter) => letter.id);
      await Promise.all(
        userLetterIds.map((letterId) =>
          apiWithLetter.patch(`/letters/${letterId}`, {
            nickname: updatedNickname,
            avatar: updatedAvatar,
          }),
        ),
      );
      dispatch(__getLetters());
    }

    handleEditBtn();
  };

  return (
    <StUserProfile>
      <S.DetailContainer>
        <S.DetailHeader>
          <h2>NewJeans</h2>
          <span>ID: {user.userId}</span>
        </S.DetailHeader>
        <S.DetailInfo>
          <S.DetailImg
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          >
            <img src={previewImage || user.avatar || defaultImg} alt="avatar" />
            <div>
              <FaCamera />
            </div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </S.DetailImg>
          <S.DetailDesc>
            <div>
              <h3>닉네임</h3>
              {isEdit ? (
                <input
                  type="text"
                  {...nickname}
                  maxLength="10"
                  required
                  autoFocus
                  placeholder="최대 10글자"
                />
              ) : (
                <p>{user.nickname}</p>
              )}
            </div>
            <div>
              <h3>팬레터 개수</h3>
              <p>{letterCount}</p>
            </div>
            <div>
              <p>
                멤버들에게 따뜻한 마음을 전하세요! 여러분의 응원과 사랑은
                멤버들에게 큰 힘이 됩니다.
              </p>
            </div>
          </S.DetailDesc>
        </S.DetailInfo>
        <S.DetailBtnBox>
          <S.DetailBtn
            onClick={handleEditBtn}
            type={isEdit ? 'cancel' : 'edit'}
          >
            {isEdit ? '취소' : '수정'}
          </S.DetailBtn>
          {isEdit && (
            <S.DetailBtn onClick={handleEditProfile} type="default">
              완료
            </S.DetailBtn>
          )}
        </S.DetailBtnBox>
      </S.DetailContainer>
    </StUserProfile>
  );
}
