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

export default function LoginForm({ onToggle }) {
  const userId = useInput('');
  const password = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userId.value, password.value);
  };

  return (
    <StLoginFormContainer>
      <h2>로그인</h2>
      <StSignForm onSubmit={handleSubmit}>
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
            autoComplete="username"
            placeholder="아이디 입력"
            minLength="4"
            maxLength="10"
            required
            autoFocus
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
            placeholder="비밀번호 입력 (4~15글자)"
            minLength="4"
            maxLength="15"
            required
          />
        </StInputBox>
        <StSubmitButtonBox>
          <StButton type="submit">로그인</StButton>
        </StSubmitButtonBox>
      </StSignForm>
      <div>
        <span>
          아직 가입하지 않았나요?
          <StGoToSignUpBtn onClick={onToggle} type="button">
            회원가입하기
          </StGoToSignUpBtn>
        </span>
      </div>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id"></label>
          <input id="id" type="text" placeholder="아이디" {...userId} />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            id="password"
            type="current-password"
            placeholder="비밀번호"
            {...password}
          />
        </div>
        <button type="submit">로그인</button>
      </form> */}
    </StLoginFormContainer>
  );
}
