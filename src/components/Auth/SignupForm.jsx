import React from 'react';
import {
  StButton,
  StGoToSignUpBtn,
  StInputBox,
  StLoginFormContainer,
  StSignForm,
  StSubmitButtonBox,
} from './styles';
import { useInput } from 'hooks/useInput';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa6';
import { HiOutlineIdentification } from 'react-icons/hi';

export default function SignupForm({ onToggle }) {
  const userId = useInput('');
  const nickname = useInput('');
  const password = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StLoginFormContainer>
      <h2>회원가입</h2>
      <StSignForm onSubmit={handleSubmit}>
        <StInputBox>
          <label htmlFor="nickname">
            <span>
              <HiOutlineIdentification />
            </span>
          </label>
          <input
            id="nickname"
            type="text"
            {...nickname}
            placeholder="닉네임 입력"
            maxLength="10"
            required
          />
        </StInputBox>
        <StInputBox>
          <label htmlFor="id">
            <span>
              <FaRegUser />
            </span>
          </label>
          <input
            id="id"
            type="text"
            {...userId}
            placeholder="아이디 입력"
            autoComplete="username"
            required
          />
        </StInputBox>
        <StInputBox>
          <label htmlFor="password">
            <span>
              <RiLockPasswordLine />
            </span>
          </label>
          <input
            id="password"
            type="password"
            {...password}
            autoComplete="current-password"
            placeholder="비밀번호 입력(4~15글자)"
            minLength="4"
            maxLength="15"
            required
          />
        </StInputBox>
        <StSubmitButtonBox>
          <StButton type="submit">가입하기</StButton>
        </StSubmitButtonBox>
      </StSignForm>
      <div>
        <span>
          이미계정이 있으신가요?
          <StGoToSignUpBtn onClick={onToggle} type="button">
            로그인하기
          </StGoToSignUpBtn>
        </span>
      </div>
    </StLoginFormContainer>
  );
}
