import React, { useState } from 'react';
import {
  StButton,
  StError,
  StGoToSignUpBtn,
  StInputBox,
  StLoginFormContainer,
  StSignForm,
  StSubmitButtonBox,
} from './styles';
import { useInput } from 'hooks/useInput';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa6';
import { login } from 'redux/modules/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { apiWithAuth } from 'apis/api';

export default function LoginForm({ onToggle }) {
  const userId = useInput('');
  const password = useInput('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        id: userId.value,
        password: password.value,
      };

      const { data } = await apiWithAuth.post('/login?expiresIn=1h', userData);
      dispatch(login(data));
      alert('로그인 되었습니다.');
      navigate('/');
    } catch (error) {
      setError(error.response.data.message);
    }
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
      {error && <StError>{error}</StError>}
    </StLoginFormContainer>
  );
}
