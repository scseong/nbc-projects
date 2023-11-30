import React from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { StHeader, StNavLink } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/modules/auth';

export default function Header() {
  const isLogin = useSelector(({ auth }) => auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  return (
    <StHeader>
      <nav>
        <ul>
          <li>
            <StNavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              home
            </StNavLink>
          </li>
        </ul>
        <h1>
          <Logo fill="white" width="200" height="70" stroke="white" />
        </h1>
        <ul>
          <li>
            <StNavLink to="/profile">프로필</StNavLink>
          </li>
          <li>{isLogin && <button onClick={handleLogout}>로그아웃</button>}</li>
        </ul>
      </nav>
    </StHeader>
  );
}
